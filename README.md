# NumberFormatter
Number and currency formatter inspired by Cocoa's NSNumberFormatter. Supports a wide range of locales.  

`NumberFormatter` provides tools to format numbers into their textual representation. 

It currently supports standard number formatting as well as currency formatting.

The output is properly localized in the given locale (and defaults to the current navigator locale).

* **decimal separator**: symbol used to separate the integer and fraction part of a number.
* **grouping separator**: symbol between logical groups in the number (e.g. `,` in the USA, but ` ` in France)
* **grouping size**: size of these logical groups. Usually 3, but certain locales define a…
* **secondary grouping size**: in some locales, the grouping size for larger numbers may be different. For a secondary grouping size of 2 and a grouping size of 3, `123456789` would be formatted as `12,34,56,789` for example.
* **script**: not every locale is using a Latin script. In Egypt, `123,456` is written `١٢٣٬٤٥٦` for example.

The currency symbol also depends on the locale: the symbol used in the country where the currency is in use (local symbol) is usually different from the one in usage in different countries. For exemple, the US dollar symbol is `$` in the USA, but `$US` in France. 

## Basic usage

Format any number in the current locale:

```js
(1234.5).string_from_number(); // "1,234.5" in the USA
```
    
Format a number in a specific locale:

```js
(1234.5).string_from_number('fr-fr'); // "1 234,5"
(1234.5).string_from_number('fr-ch'); // "1'234.5"
```

Note that in these examples, we're using the shorthand function defined directly on `Number`. You can also write:
 
```js
var formatter = new NumberFormatter();
formatter.string_from_number(1234.5); // "1,234.5" in the USA
```

## Currency

Format any number in a given currency (with the current locale)

```js
// en-US locale
(123.9).format_as_currency('USD'); // "$123.90"
(123.9).format_as_currency('EUR'); // "€123.90"

// fr-FR locale
(123.9).format_as_currency('USD'); // "123.90 $US"
(123.9).format_as_currency('EUR'); // "123.90 €"
```

It is of course possible to pass a specific locale:

```js
(123.9).format_as_currency('USD', 'en-ca'); // "$US123.90"
(123.9).format_as_currency('GBP', 'fr-fr'); // "123,90 £GB"
(1234567.89).format_as_currency('AED', 'ar-ae') // "١٬٢٣٤٬٥٦٧٫٨٩ د.إ.‏"
```

Note that currency formatting conforms to the **maximum fraction digits** value for the currency. For example, the Japanese Yen (JPY) doesn't allow any fraction digit because something like `¥JP123.45` is incorrect, so you would get:

```js
(123.9).format_as_currency('JPY', 'ja-JP'); // "¥124"
```

## Advanced usage

You can customize the formatting behavior by creating your own `NumberFormatter` instance. This way you can specify a minimum fraction digits value for example:

```js
var formatter = new NumberFormatter();
formatter.minimum_fraction_digits = 4;
formatter.string_from_number(1234); // "1,234.0000"
```

Well… in fact you can override any property:

```js
formatter.decimal_separator = '🐶'; 
formatter.grouping_separator = '🐮';
formatter.string_from_number(1234567.89); // "1🐮234🐮567🐶89"
```

## Scripts

NumberFormatter currently supports the following scripts:

* Latin: `0 1 2 3 4 5 6 7 8 9`
* Arabic: `٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩`
* Dévanâgarî: `० १ २ ३ ४ ५ ६ ७ ८ ९`
* Urdu: `۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹`
* Myanmar: `၀ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉`
* Bengali: `০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯`
* Tibetan: `༠ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩`

```js
(123456789.12345).string_from_number('en');
  "123,456,789.12345" // Latin
(123456789.12345).string_from_number('ar');
  "١٢٣٬٤٥٦٬٧٨٩٫١٢٣٤٥" // Arabic
(123456789.12345).string_from_number('hi');
  "१२,३४,५६,७८९.१२३४५" // Dévanâgarî
(123456789.12345).string_from_number('uz');
  "۱۲۳ ۴۵۶ ۷۸۹,۱۲۳۴۵" // Urdu
(123456789.12345).string_from_number('my');
  "၁၂၃,၄၅၆,၇၈၉.၁၂၃၄၅" // Myanmar
(123456789.12345).string_from_number('bn');
  "১২,৩৪,৫৬,৭৮৯.১২৩৪৫" // Bengali
(123456789.12345).string_from_number('dz');
  "༡༢,༣༤,༥༦,༧༨༩.༡༢༣༤༥" // Tibetan
```

## References

* Numeral scripts: [Numerals in many different writing systems](http://www.omniglot.com/language/numerals.htm)
* [NSNumberFormatter](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNumberFormatter_Class/) class reference
* [CLDR](http://cldr.unicode.org) - Unicode Common Locale Data Repository
