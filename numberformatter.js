// The MIT License (MIT)
// 
// Copyright (c) 2015 Jean-Luc Dagon
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function(root) {
    "use strict";

    var NumberFormatter = function NumberFormatter(localeIdentifier, scriptName) {

        this.maximumFractionDigits = -1;
        this.minimumFractionDigits = -1;
        this.setLocale(localeIdentifier, scriptName);
        _readCurrencyInfo.bind(this)(this.currencyCode);
    };

    NumberFormatter.prototype.setLocale = function setLocale(localeIdentifier, scriptName) {
        if (typeof localeIdentifier === 'undefined') {
            localeIdentifier = root.Locale.detectCurrentLocale();
        }
        _readLocaleInfo.bind(this)(localeIdentifier, scriptName);
    };

    NumberFormatter.prototype.setCurrencyCode = function setCurrencyCode(currencyCode) {
        if (_isEmptyString(currencyCode) || !(currencyCode in CURRENCIES_INFO)) {
            currencyCode = this.currencyCode;
        }
        this.currencyCode = currencyCode;
        _readCurrencyInfo.bind(this)(currencyCode);
    };

    NumberFormatter.prototype.stringFromNumber = function stringFromNumber(number) {
        number = parseFloat(number);
        var isNegative = (number < 0);
        var prefix = (isNegative ? this.negativePrefix : this.positivePrefix) || '';

        number = Math.abs(number);
        var numberStr = '';
        if (this.maximumFractionDigits >= 0) {
            var fixedFractionDigits = this.maximumFractionDigits;
            if (this.minimumFractionDigits >= 0) {
                fixedFractionDigits = Math.min(fixedFractionDigits, this.minimumFractionDigits);
            }
            numberStr = number.toFixed(fixedFractionDigits);
        } else {
            if (this.minimumFractionDigits >= 0) {
                numberStr = number.toFixed(this.minimumFractionDigits);
            } else {
                numberStr = number.toString();
            }
        }
        numberStr = _transformToLocalNumbersAlphabet.bind(this)(numberStr, this.scriptName);

        var integerPartSize = number.toFixed(0).length;
        var fractionPartStart = Math.min(numberStr.length, integerPartSize + 1);
        var integerPart = numberStr.substr(0, integerPartSize);
        var fractionPart = numberStr.substr(fractionPartStart);

        var groups = [];
        var groupingSize = this.groupingSize;

        if (groupingSize === 0 || integerPart.length <= groupingSize) {
            groups.push(integerPart);
        } else {
            var i = integerPart.length - groupingSize;
            while (true) {
                groups.push(integerPart.substr(i, groupingSize));
                if (this.secondaryGroupingSize > 0) {
                    groupingSize = this.secondaryGroupingSize;
                }
                i -= groupingSize;
                if (i <= 0) {
                    groups.push(integerPart.substr(0, i + groupingSize));
                    break;
                }
            }
        }

        var res = '' + prefix;
        res += groups.reverse().join(this.groupingSeparator);
        res += (fractionPart.length > 0 ? this.decimalSeparator : '');
        res += fractionPart;
        return res;
    };

    NumberFormatter.prototype.numberFromString = function numberFromString(s) {
        s = _transformToLatin(s.trim());

        var decimalSeparatorIndex = s.lastIndexOf(this.decimalSeparator);
        var hasMultipleOccurrencesOfDecimalSeparator = (decimalSeparatorIndex !== -1) && (s.indexOf(this.decimalSeparator) !== decimalSeparatorIndex);
        var lastPointIndex = s.lastIndexOf('.');

        // multiple occurrences of the current locale's decimal separator
        // so it's likely not the decimal separator used in the string
        if (hasMultipleOccurrencesOfDecimalSeparator) {
            decimalSeparatorIndex = -1;
        }
        // No current locale's decimal separator
        // If there's a point (a single one) and that's not the current locale's grouping separator
        // it's probably the decimal separator
        if (decimalSeparatorIndex === -1 && lastPointIndex !== -1) {
           if (this.groupingSeparator !== '.' && s.indexOf('.') === lastPointIndex) {
               decimalSeparatorIndex = lastPointIndex;
           }
        }
        // There's a point, a decimal separator and the point is after the decimal separator
        // in this case we consider that the point becomes the decimal separator
        if (lastPointIndex !== -1 && decimalSeparatorIndex !== -1 && lastPointIndex > decimalSeparatorIndex) {
            decimalSeparatorIndex = lastPointIndex;
        }

        var integerPart = '';
        var fractionPart = '';
        if (decimalSeparatorIndex === -1) {
            integerPart = s;
        } else {
            integerPart = s.substr(0, decimalSeparatorIndex);
            fractionPart = s.substr(decimalSeparatorIndex + 1);
        }
        integerPart = integerPart.replace(/[^0-9]/g, '');
        fractionPart = fractionPart.replace(/[^0-9]/g, '');

        return parseFloat(integerPart + '.' + fractionPart);
    };

    NumberFormatter.prototype.currencyStringFromNumber = function currencyStringFromNumber(number) {
        var currencyFormat = this.currencyFormat;
        var currencySymbol = this.currencySymbol;
        var maximumFractionDigits = this.maximumFractionDigits;
        if (maximumFractionDigits < 0) {
            this.maximumFractionDigits = this.currencyMaximumFractionDigits;
        }
        var formattedNumber = this.stringFromNumber(number);
        this.maximumFractionDigits = maximumFractionDigits;

        formattedNumber = currencyFormat.replace('#', formattedNumber).replace('\u00a4', currencySymbol);

        return formattedNumber;
    };

    Number.prototype.stringFromNumber = function stringFromNumber(localeIdentifier, scriptName) {
        var formatter = new NumberFormatter(localeIdentifier, scriptName);
        return formatter.stringFromNumber(this);
    };

    String.prototype.numberFromString = function numberFromString(localeIdentifier) {
        var formatter = new NumberFormatter();
        formatter.setLocale(localeIdentifier);
        return formatter.numberFromString(this);
    };

    Number.prototype.formatAsCurrency = function formatAsCurrency(currency, localeIdentifier, scriptName) {
        var formatter = new NumberFormatter(localeIdentifier, scriptName);
        if (!_isEmptyString(currency)) {
            formatter.setCurrencyCode(currency);
        }
        return formatter.currencyStringFromNumber(this);
    };

    NumberFormatter.availableCurrencies = function availableCurrencies() {
        return Object.keys(CURRENCIES_INFO).sort();
    };

    NumberFormatter.symbolForCurrencyInLocale = function symbolForCurrencyInLocale(currencyCode, localeIdentifier, scriptName) {
        if (_isEmptyString(localeIdentifier)) {
            localeIdentifier = root.Locale.detectCurrentLocale();
        }
        localeIdentifier = localeIdentifier.toLowerCase();

        var currencyInfo = CURRENCIES_INFO[currencyCode];
        var availableLocalSymbols = currencyInfo[1];
        this.currencyMaximumFractionDigits = currencyInfo[0];
        if (!(localeIdentifier in availableLocalSymbols)) {
            localeIdentifier = localeIdentifier.split('-')[0];
        }
        var currencySymbol;
        if (!(localeIdentifier in availableLocalSymbols)) {
            currencySymbol = currencyInfo[2];
        } else {
            currencySymbol = availableLocalSymbols[localeIdentifier];
        }
        if (currencySymbol.length === 0) {
            currencySymbol = currencyInfo[3];
        }
        return currencySymbol;
    };

    ////////////////////////////////////////////////////////////
    // Private, not exposed
    ////////////////////////////////////////////////////////////

    var _readLocaleInfo = function (localeIdentifier, scriptName) {
        var locale = new root.Locale(localeIdentifier, scriptName);
        this.locale = locale;
        this.decimalSeparator = locale.decimalSeparator;
        this.groupingSeparator = locale.groupingSeparator
        this.groupingSize = locale.groupingSize;
        this.secondaryGroupingSize = locale.secondaryGroupingSize;
        this.positivePrefix = locale.positivePrefix;
        this.negativePrefix = locale.negativePrefix;
        this.plusSign = locale.plusSign;
        this.minusSign = locale.minusSign;
        this.currencyFormat = locale.currencyFormat;
        this.currencyCode = locale.currencyCode;
        this.scriptName = this.locale.scriptName;
    };

    var _readCurrencyInfo = function(currencyCode) {
        if (_isEmptyString(currencyCode) || !(currencyCode in CURRENCIES_INFO)) {
            return;
        }
        var currencyInfo = CURRENCIES_INFO[currencyCode];
        this.currencyMaximumFractionDigits = currencyInfo[0];
        this.currencySymbol = NumberFormatter.symbolForCurrencyInLocale(currencyCode, this.locale.localeIdentifier);
    };

    var _transformToLatin = function(numberStr) {
        return numberStr.split('').map(function(e) {
            if (!(e in TO_LATIN_MAPPING)) {
                return e;
            }
            return TO_LATIN_MAPPING[e];
        }).join('');
    };

    var _transformToLocalNumbersAlphabet = function(numberStr) {
        if (typeof this.locale === 'undefined') {
            return numberStr;
        };
        var scriptNumbers = this.locale.numbers;
        return numberStr.split('').map(function(e) {
            if (e === '.') {
                return e;
            }
            return scriptNumbers[e];
        }).join('');
    };

    function _isEmptyString(value) {
        return !(typeof value === 'string' && value.length !== 0);
    }
    
    ////////////////////////////////////////////////////////////
    // Module exports
    ////////////////////////////////////////////////////////////

    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        root.Locale = require('./locale');
        module.exports = exports = NumberFormatter;
        exports.NumberFormatter = NumberFormatter;
    } else if (typeof define === 'function' && define.amd) {
        define(['./locale'], function(l) {
            root.Locale = l;
            return NumberFormatter;
        });
    } else {
        root.NumberFormatter = NumberFormatter;
    }

    ////////////////////////////////////////////////////////////
    // Localized data
    ////////////////////////////////////////////////////////////

    var TO_LATIN_MAPPING = {"\u0968": "2", "\u1048": "8", "\u1044": "4", "\u0969": "3", "\u096b": "5", "\u1042": "2", "\u096d": "7", "\u096f": "9", "\u06f8": "8", "\u0666": "6", "\u0664": "4", "\u0f23": "3", "\u06f7": "7", "\u06f6": "6", "\u0f26": "6", "\u06f5": "5", "\u0f27": "7", "\u0663": "3", "\u06f9": "9", "\u1045": "5", "\u1043": "3", "\u09ef": "9", "\u09e9": "3", "\u09e6": "0", "\u0668": "8", "\u0f24": "4", "\u06f0": "0", "\u0f29": "9", "\u1049": "9", "\u0967": "1", "\u06f3": "3", "\u09ea": "4", "\u0f20": "0", "\u06f1": "1", "\u06f4": "4", "\u096a": "4", "\u0f25": "5", "\u0f21": "1", "\u0966": "0", "\u096c": "6", "\u096e": "8", "\u0669": "9", "\u1046": "6", "\u1047": "7", "\u0662": "2", "\u09e8": "2", "\u09eb": "5", "\u09ee": "8", "\u0667": "7", "\u0660": "0", "\u1041": "1", "\u0661": "1", "\u06f2": "2", "\u09ed": "7", "\u0665": "5", "\u09ec": "6", "\u1040": "0", "\u0f28": "8", "\u09e7": "1", "\u0f22": "2"};

    var CURRENCIES_INFO = {
        "TZS": [ 0, { "bez-tz": "TSh", "asa-tz": "TSh", "ksb-tz": "TSh", "jmc-tz": "TSh", "rwk-tz": "TSh", "rof-tz": "TSh", "mas-tz": "TSh", "en-tz": "TSh", "sbp-tz": "TSh", "vun-tz": "TSh", "kde-tz": "TSh", "lag-tz": "TSh", "sw-tz": "TSh" }, "TZS", "TZS" ],
        "ISK": [ 0, { "is-is": "kr", "en-is": "ISK" }, "ISK", "ISK" ],
        "BWP": [ 2, { "en-bw": "P" }, "BWP", "BWP" ],
        "SBD": [ 2, { "en-sb": "$" }, "$SB", "SBD" ],
        "LAK": [ 0, { "lo-la": "\u20ad" }, "LAK", "LAK" ],
        "MWK": [ 2, { "en-mw": "MK" }, "MWK", "MWK" ],
        "IDR": [ 0, { "id-id": "Rp" }, "IDR", "IDR" ],
        "IRR": [ 0, { "fa-ir": "\u0631\u06cc\u0627\u0644" }, "IRR", "IRR" ],
        "MAD": [ 2, { "ar-eh": "\u062f.\u0645.\u200f", "tzm-ma": "MAD", "shi-ma": "MAD", "ar-ma": "\u062f.\u0645.\u200f", "fr-ma": "MAD", "zgh-ma": "MAD" }, "MAD", "MAD" ],
        "BBD": [ 2, { "en-bb": "$" }, "BBD", "BBD" ],
        "BDT": [ 2, { "bn-bd": "\u09f3" }, "BDT", "BDT" ],
        "NPR": [ 2, { "ne-np": "\u0928\u0947\u0930\u0942" }, "NPR", "NPR" ],
        "SGD": [ 2, { "zh-sg": "$", "ta-sg": "$", "ms-sg": "$", "en-sg": "$" }, "$SG", "SGD" ],
        "ZMW": [ 2, { "en-zm": "K", "bem-zm": "K" }, "ZMW", "ZMW" ],
        "SSP": [ 2, { "ar-ss": "\u00a3", "en-ss": "\u00a3" }, "\u00a3SS", "SSP" ],
        "MRO": [ 0, { "ar-mr": "\u0623.\u0645.\u200f", "fr-mr": "UM" }, "MRO", "MRO" ],
        "KMF": [ 0, { "ar-km": "\u0641.\u062c.\u0642.\u200f", "fr-km": "CF" }, "KMF", "KMF" ],
        "AMD": [ 0, { "hy-am": "\u0564\u0580." }, "AMD", "AMD" ],
        "CAD": [ 2, { "iu-ca": "CA$", "fr-ca": "$", "en-ca": "$" }, "$CA", "CAD" ],
        "PEN": [ 2, { "es-pe": "S/." }, "PEN", "PEN" ],
        "UYU": [ 2, { "es-uy": "$" }, "$UY", "UYU" ],
        "JPY": [ 0, { "ja-jp": "\u00a5" }, "\u00a5JP", "JPY" ],
        "BAM": [ 2, { "bs-ba": "KM", "sr-ba": "\u041a\u041c", "hr-ba": "KM", "en-ba": "BAM" }, "BAM", "BAM" ],
        "GNF": [ 0, { "fr-gn": "FG" }, "GNF", "GNF" ],
        "TTD": [ 2, { "en-tt": "$" }, "$TT", "TTD" ],
        "INR": [ 2, { "ur-in": "\u20b9", "ml-in": "\u20b9", "bo-in": "\u20b9", "ne-in": "\u20b9", "or-in": "\u20b9", "brx-in": "\u20b9", "gu-in": "\u20b9", "pa-in": "\u20b9", "mr-in": "\u20b9", "hi-in": "\u20b9", "ta-in": "\u20b9", "kok-in": "\u20b9", "as-in": "\u20b9", "ks-in": "\u20b9", "en-in": "\u20b9", "kn-in": "\u20b9", "bn-in": "\u20b9", "te-in": "\u20b9" }, "\u20b9", "INR" ],
        "JOD": [ 3, { "ar-jo": "\u062f.\u0623.\u200f" }, "JOD", "JOD" ],
        "PYG": [ 0, { "es-py": "\u20b2" }, "PYG", "PYG" ],
        "MKD": [ 2, { "mk-mk": "\u0434\u0435\u043d", "sq-mk": "den" }, "MKD", "MKD" ],
        "KWD": [ 3, { "ar-kw": "\u062f.\u0643.\u200f" }, "KWD", "KWD" ],
        "ALL": [ 0, { "en-al": "ALL", "sq-al": "Lek\u00eb" }, "ALL", "ALL" ],
        "BZD": [ 2, { "en-bz": "$" }, "$BZ", "BZD" ],
        "MGA": [ 0, { "en-mg": "Ar", "fr-mg": "Ar", "mg-mg": "Ar" }, "MGA", "MGA" ],
        "TMT": [ 2, { "tk-tm": "m." }, "TMT", "TMT" ],
        "USD": [ 2, { "en-zw": "US$", "en-io": "$", "haw-us": "$", "sn-zw": "US$", "chr-us": "$", "nd-zw": "US$", "nl-bq": "$", "pt-tl": "US$", "en-gu": "$", "lkt-us": "$", "en-mp": "$", "en-vi": "$", "en-dg": "$", "en-as": "$", "es-ec": "$", "en-pr": "$", "en-us": "$", "en-pw": "US$", "en-um": "$", "en-vg": "$", "es-sv": "$", "en-tc": "US$", "en-mh": "$", "en-fm": "US$", "es-pr": "$", "es-us": "$" }, "$US", "USD" ],
        "UZS": [ 0, { "uz-uz": "so\u02bbm" }, "UZS", "UZS" ],
        "AZN": [ 2, { "az-az": "man." }, "AZN", "AZN" ],
        "SAR": [ 2, { "ar-sa": "\u0631.\u0633.\u200f" }, "SAR", "SAR" ],
        "BTN": [ 2, { "dz-bt": "Nu." }, "BTN", "BTN" ],
        "RWF": [ 0, { "rw-rw": "RF", "en-rw": "RF", "fr-rw": "RF" }, "RWF", "RWF" ],
        "KGS": [ 2, { "ky-kg": "\u0441\u043e\u043c", "ru-kg": "\u0441\u043e\u043c" }, "KGS", "KGS" ],
        "XAF": [ 0, { "ksf-cm": "FCFA", "ln-cg": "FCFA", "fr-cf": "FCFA", "ln-cf": "FCFA", "jgo-cm": "FCFA", "en-cm": "FCFA", "fr-gq": "FCFA", "nmg-cm": "FCFA", "yav-cm": "FCFA", "es-gq": "FCFA", "fr-ga": "FCFA", "mgo-cm": "FCFA", "mua-cm": "FCFA", "bas-cm": "FCFA", "agq-cm": "FCFA", "sg-cf": "FCFA", "fr-cm": "FCFA", "kkj-cm": "FCFA", "dua-cm": "FCFA", "nnh-cm": "FCFA", "fr-cg": "FCFA", "ar-td": "FCFA", "ewo-cm": "FCFA", "fr-td": "FCFA" }, "FCFA", "XAF" ],
        "IQD": [ 0, { "ar-iq": "\u062f.\u0639.\u200f" }, "IQD", "IQD" ],
        "XOF": [ 0, { "ha-ne": "CFA", "twq-ne": "CFA", "ff-sn": "CFA", "khq-ml": "CFA", "bm-ml": "CFA", "fr-ne": "CFA", "ee-tg": "CFA", "fr-tg": "CFA", "pt-gw": "CFA", "fr-bj": "CFA", "fr-ml": "CFA", "dyo-sn": "CFA", "ses-ml": "CFA", "dje-ne": "CFA", "yo-bj": "CFA", "fr-sn": "CFA", "fr-ci": "CFA", "fr-bf": "CFA" }, "CFA", "XOF" ],
        "ZAR": [ 2, { "en-ls": "R", "zu-za": "R", "af-za": "R", "en-za": "R" }, "ZAR", "ZAR" ],
        "NAD": [ 2, { "af-na": "$", "naq-na": "$", "en-na": "$" }, "$NA", "NAD" ],
        "SOS": [ 0, { "ar-so": "S", "so-so": "S" }, "SOS", "SOS" ],
        "GHS": [ 2, { "ee-gh": "GH\u20b5", "ha-gh": "GH\u20b5", "ak-gh": "GH\u20b5", "en-gh": "GH\u20b5" }, "GHS", "GHS" ],
        "BHD": [ 3, { "ar-bh": "\u062f.\u0628.\u200f" }, "BHD", "BHD" ],
        "MXN": [ 2, { "es-mx": "$" }, "$MX", "MXN" ],
        "RSD": [ 0, { "sr-rs": "\u0434\u0438\u043d." }, "RSD", "RSD" ],
        "KPW": [ 0, { "ko-kp": "KPW" }, "KPW", "KPW" ],
        "UGX": [ 0, { "xog-ug": "USh", "nyn-ug": "USh", "lg-ug": "USh", "cgg-ug": "USh", "teo-ug": "USh", "sw-ug": "USh", "en-ug": "USh" }, "UGX", "UGX" ],
        "SYP": [ 0, { "fr-sy": "LS", "ar-sy": "\u0644.\u0633.\u200f" }, "SYP", "SYP" ],
        "AWG": [ 2, { "nl-aw": "Afl." }, "AWG", "AWG" ],
        "LBP": [ 0, { "ar-lb": "\u0644.\u0644.\u200f" }, "\u00a3LB", "LBP" ],
        "WST": [ 2, { "en-ws": "WS$" }, "WS$", "WST" ],
        "LKR": [ 2, { "si-lk": "\u0dbb\u0dd4.", "ta-lk": "Rs." }, "LKR", "LKR" ],
        "LRD": [ 2, { "vai-lr": "$", "en-lr": "$" }, "$LR", "LRD" ],
        "MNT": [ 0, { "mn-mn": "\u20ae" }, "MNT", "MNT" ],
        "AED": [ 2, { "ar-ae": "\u062f.\u0625.\u200f" }, "AED", "AED" ],
        "KZT": [ 2, { "ru-kz": "\u20b8", "kk-kz": "\u20b8" }, "KZT", "KZT" ],
        "BMD": [ 2, { "en-bm": "$" }, "$BM", "BMD" ],
        "DJF": [ 0, { "fr-dj": "Fdj", "ar-dj": "Fdj", "so-dj": "Fdj" }, "DJF", "DJF" ],
        "EGP": [ 2, { "ar-eg": "\u062c.\u0645.\u200f" }, "\u00a3EG", "EGP" ],
        "SLL": [ 0, { "en-sl": "Le" }, "SLL", "SLL" ],
        "GEL": [ 2, { "ka-ge": "GEL" }, "GEL", "GEL" ],
        "NIO": [ 2, { "es-ni": "C$" }, "NIO", "NIO" ],
        "GIP": [ 2, { "en-gi": "\u00a3" }, "\u00a3GI", "GIP" ],
        "AOA": [ 2, { "ln-ao": "Kz", "pt-ao": "Kz" }, "AOA", "AOA" ],
        "GYD": [ 0, { "en-gy": "$" }, "GYD", "GYD" ],
        "ANG": [ 2, { "nl-sx": "NAf.", "nl-cw": "NAf.", "en-sx": "NAf." }, "ANG", "ANG" ],
        "PGK": [ 2, { "en-pg": "K" }, "PGK", "PGK" ],
        "KHR": [ 2, { "km-kh": "\u17db" }, "KHR", "KHR" ],
        "SRD": [ 2, { "nl-sr": "$" }, "$SR", "SRD" ],
        "SZL": [ 2, { "en-sz": "E" }, "SZL", "SZL" ],
        "MOP": [ 2, { "zh-mo": "MOP$", "en-mo": "MOP$", "pt-mo": "MOP$" }, "MOP", "MOP" ],
        "TRY": [ 2, { "tr-tr": "\u20ba", "en-tr": "TRY" }, "TRY", "TRY" ],
        "BGN": [ 2, { "bg-bg": "\u043b\u0432." }, "BGN", "BGN" ],
        "HRK": [ 2, { "en-hr": "HRK", "hr-hr": "kn" }, "HRK", "HRK" ],
        "VND": [ 0, { "vi-vn": "\u20ab" }, "\u20ab", "VND" ],
        "BYR": [ 0, { "ru-by": "\u0440.", "be-by": "\u0440." }, "BYR", "BYR" ],
        "THB": [ 2, { "th-th": "\u0e3f" }, "\u0e3f", "THB" ],
        "UAH": [ 2, { "ru-ua": "\u20b4", "uk-ua": "\u20b4" }, "UAH", "UAH" ],
        "EUR": [ 2, { "en-si": "\u20ac", "sr-me": "\u20ac", "en-ee": "\u20ac", "ga-ie": "\u20ac", "en-it": "\u20ac", "de-de": "\u20ac", "es-ea": "\u20ac", "nl-be": "\u20ac", "sq-xk": "\u20ac", "sk-sk": "\u20ac", "et-ee": "\u20ac", "sr-xk": "\u20ac", "pt-pt": "\u20ac", "en-ie": "\u20ac", "br-fr": "\u20ac", "en-mt": "\u20ac", "en-fr": "\u20ac", "en-de": "\u20ac", "nl-nl": "\u20ac", "en-me": "\u20ac", "fr-re": "\u20ac", "fr-fr": "\u20ac", "it-sm": "\u20ac", "it-it": "\u20ac", "ca-ad": "\u20ac", "lv-lv": "\u20ac", "ca-es": "\u20ac", "en-lt": "\u20ac", "tr-cy": "\u20ac", "de-lu": "\u20ac", "fr-mq": "\u20ac", "de-be": "\u20ac", "en-pt": "\u20ac", "en-sk": "\u20ac", "en-150": "\u20ac", "fr-gp": "\u20ac", "sl-si": "\u20ac", "de-at": "\u20ac", "fr-bl": "\u20ac", "el-cy": "\u20ac", "en-lu": "\u20ac", "sv-ax": "\u20ac", "sv-fi": "\u20ac", "en-cy": "\u20ac", "fr-mf": "\u20ac", "mt-mt": "\u20ac", "fr-yt": "\u20ac", "en-be": "\u20ac", "es-ic": "\u20ac", "en-es": "\u20ac", "en-ad": "\u20ac", "gl-es": "\u20ac", "es-es": "\u20ac", "ca-it": "\u20ac", "fr-lu": "\u20ac", "eu-es": "\u20ac", "fr-pm": "\u20ac", "fr-be": "\u20ac", "lt-lt": "\u20ac", "fi-fi": "\u20ac", "en-at": "\u20ac", "en-fi": "\u20ac", "fr-mc": "\u20ac", "en-nl": "\u20ac", "ca-fr": "\u20ac", "en-lv": "\u20ac", "el-gr": "\u20ac", "fr-gf": "\u20ac" }, "\u20ac", "EUR" ],
        "TOP": [ 2, { "to-to": "T$", "en-to": "T$" }, "TOP", "TOP" ],
        "SDG": [ 2, { "ar-sd": "\u062c.\u0633.", "nus-sd": "SDG", "en-sd": "SDG" }, "\u00a3SD", "SDG" ],
        "XPF": [ 0, { "fr-pf": "FCFP", "fr-nc": "FCFP", "fr-wf": "FCFP" }, "FCFP", "XPF" ],
        "TJS": [ 2, { "tg-tj": "\u0441\u043e\u043c" }, "TJS", "TJS" ],
        "PKR": [ 0, { "ur-pk": "Rs", "pa-pk": "\u0631", "en-pk": "Rs" }, "PKR", "PKR" ],
        "COP": [ 0, { "es-co": "$" }, "$CO", "COP" ],
        "FKP": [ 2, { "en-fk": "\u00a3" }, "\u00a3FK", "FKP" ],
        "VEF": [ 2, { "es-ve": "Bs." }, "VEF", "VEF" ],
        "NOK": [ 2, { "nb-no": "kr", "nb-sj": "kr", "nn-no": "kr", "en-no": "NOK" }, "NOK", "NOK" ],
        "VUV": [ 0, { "fr-vu": "VT", "en-vu": "VT" }, "VUV", "VUV" ],
        "KYD": [ 2, { "en-ky": "$" }, "KYD", "KYD" ],
        "BIF": [ 0, { "rn-bi": "FBu", "fr-bi": "FBu" }, "BIF", "BIF" ],
        "PLN": [ 2, { "pl-pl": "z\u0142", "en-pl": "PLN" }, "PLN", "PLN" ],
        "BND": [ 2, { "ms-bn": "$" }, "$BN", "BND" ],
        "HNL": [ 2, { "es-hn": "L" }, "HNL", "HNL" ],
        "XCD": [ 2, { "en-vc": "EC$", "en-ag": "EC$", "en-ai": "EC$", "en-lc": "EC$", "en-ms": "EC$", "en-dm": "EC$", "en-kn": "EC$", "en-gd": "EC$" }, "EC$", "XCD" ],
        "CNY": [ 2, { "zh-cn": "\uffe5", "ii-cn": "\u00a5", "ug-cn": "\uffe5", "bo-cn": "\u00a5" }, "\u00a5CN", "CNY" ],
        "CVE": [ 2, { "kea-cv": "CVE", "pt-cv": "CVE" }, "$CV", "CVE" ],
        "MYR": [ 2, { "ms-my": "RM", "ta-my": "RM" }, "MYR", "MYR" ],
        "CHF": [ 2, { "gsw-li": "CHF", "fr-ch": "CHF", "rm-ch": "CHF", "gsw-ch": "CHF", "en-ch": "CHF", "de-li": "CHF", "de-ch": "CHF", "it-ch": "CHF" }, "CHF", "CHF" ],
        "BSD": [ 2, { "en-bs": "$" }, "$BS", "BSD" ],
        "SCR": [ 2, { "fr-sc": "SR", "en-sc": "SR" }, "SCR", "SCR" ],
        "OMR": [ 3, { "ar-om": "\u0631.\u0639.\u200f" }, "OMR", "OMR" ],
        "RUB": [ 2, { "ru-ru": "\u20bd", "en-ru": "RUB" }, "RUB", "RUB" ],
        "ERN": [ 2, { "ti-er": "Nfk", "ar-er": "Nfk", "en-er": "Nfk" }, "ERN", "ERN" ],
        "QAR": [ 2, { "ar-qa": "\u0631.\u0642.\u200f" }, "QAR", "QAR" ],
        "HKD": [ 2, { "zh-hk": "$", "en-hk": "$" }, "$HK", "HKD" ],
        "ETB": [ 2, { "om-et": "Br", "am-et": "\u1265\u122d", "so-et": "Br", "ti-et": "Br" }, "ETB", "ETB" ],
        "ARS": [ 2, { "es-ar": "$" }, "$AR", "ARS" ],
        "JMD": [ 2, { "en-jm": "$" }, "JMD", "JMD" ],
        "CRC": [ 0, { "es-cr": "\u20a1" }, "CRC", "CRC" ],
        "NZD": [ 2, { "en-nu": "$", "en-pn": "$", "en-tk": "$", "en-nz": "$", "en-ck": "$" }, "$NZ", "NZD" ],
        "CZK": [ 2, { "en-cz": "CZK", "cs-cz": "K\u010d" }, "CZK", "CZK" ],
        "SHP": [ 2, { "en-sh": "\u00a3" }, "\u00a3SH", "SHP" ],
        "MZN": [ 2, { "seh-mz": "MTn", "mgh-mz": "MTn", "pt-mz": "MTn" }, "MZN", "MZN" ],
        "BOB": [ 2, { "es-bo": "Bs" }, "BOB", "BOB" ],
        "BRL": [ 2, { "pt-br": "R$" }, "R$", "BRL" ],
        "ILS": [ 2, { "he-il": "\u20aa", "ar-il": "\u20aa", "ar-ps": "\u20aa" }, "\u20aa", "ILS" ],
        "HTG": [ 2, { "fr-ht": "G" }, "HTG", "HTG" ],
        "KRW": [ 0, { "ko-kr": "\u20a9" }, "\u20a9", "KRW" ],
        "DZD": [ 2, { "fr-dz": "DA", "ar-dz": "\u062f.\u062c.\u200f", "kab-dz": "DA" }, "DZD", "DZD" ],
        "TWD": [ 2, { "zh-tw": "NT$" }, "$TW", "TWD" ],
        "DKK": [ 2, { "da-dk": "kr", "en-dk": "DKK", "da-gl": "kr", "kl-gl": "kr", "fo-fo": "kr" }, "DKK", "DKK" ],
        "PAB": [ 2, { "es-pa": "B/." }, "PAB", "PAB" ],
        "MUR": [ 0, { "en-mu": "Rs", "mfe-mu": "Rs", "fr-mu": "Rs" }, "MUR", "MUR" ],
        "PHP": [ 2, { "es-ph": "\u20b1", "en-ph": "\u20b1", "fil-ph": "\u20b1" }, "PHP", "PHP" ],
        "AUD": [ 2, { "en-nr": "$", "en-ki": "$", "en-cx": "$", "en-tv": "$", "en-nf": "$", "en-au": "$", "en-cc": "$" }, "$AU", "AUD" ],
        "GTQ": [ 2, { "es-gt": "Q" }, "GTQ", "GTQ" ],
        "KES": [ 2, { "mer-ke": "Ksh", "kln-ke": "Ksh", "sw-ke": "Ksh", "guz-ke": "Ksh", "luo-ke": "Ksh", "ki-ke": "Ksh", "dav-ke": "Ksh", "en-ke": "Ksh", "so-ke": "Ksh", "om-ke": "Ksh", "saq-ke": "Ksh", "teo-ke": "Ksh", "luy-ke": "Ksh", "ebu-ke": "Ksh", "kam-ke": "Ksh", "mas-ke": "Ksh" }, "KES", "KES" ],
        "CUP": [ 2, { "es-cu": "$" }, "CUP", "CUP" ],
        "RON": [ 2, { "ro-ro": "RON", "en-ro": "RON" }, "RON", "RON" ],
        "MMK": [ 0, { "my-mm": "K" }, "MMK", "MMK" ],
        "GMD": [ 2, { "en-gm": "D" }, "GMD", "GMD" ],
        "DOP": [ 2, { "es-do": "$" }, "DOP", "DOP" ],
        "CDF": [ 2, { "swc-cd": "FC", "fr-cd": "FC", "lu-cd": "FC", "ln-cd": "FC" }, "CDF", "CDF" ],
        "STD": [ 0, { "pt-st": "Db" }, "STD", "STD" ],
        "TND": [ 3, { "fr-tn": "DT", "ar-tn": "\u062f.\u062a.\u200f" }, "TND", "TND" ],
        "SEK": [ 2, { "en-se": "SEK", "sv-se": "kr" }, "SEK", "SEK" ],
        "YER": [ 0, { "ar-ye": "\u0631.\u064a.\u200f" }, "YER", "YER" ],
        "LYD": [ 3, { "ar-ly": "\u062f.\u0644.\u200f" }, "LYD", "LYD" ],
        "CLP": [ 0, { "es-cl": "$" }, "$CL", "CLP" ],
        "GBP": [ 2, { "gv-im": "\u00a3", "en-gg": "\u00a3", "en-je": "\u00a3", "cy-gb": "\u00a3", "kw-gb": "\u00a3", "en-gb": "\u00a3", "en-im": "\u00a3" }, "\u00a3GB", "GBP" ],
        "FJD": [ 2, { "en-fj": "$" }, "$FJ", "FJD" ],
        "HUF": [ 0, { "hu-hu": "Ft", "en-hu": "HUF" }, "HUF", "HUF" ],
        "MDL": [ 2, { "ru-md": "L", "ro-md": "L" }, "MDL", "MDL" ],
        "NGN": [ 2, { "en-ng": "\u20a6", "ha-ng": "\u20a6", "ig-ng": "\u20a6", "yo-ng": "\u20a6" }, "NGN", "NGN" ],
        "AFN": [ 0, { "ps-af": "\u060b", "fa-af": "\u060b", "uz-af": "\u060b" }, "AFN", "AFN" ]
    };

})(this);
