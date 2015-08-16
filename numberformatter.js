(function(root) {
    "use_strict";

    var LOCALES_INFO = {"br":[","," ",3,0,"\u00a4 #",""],"fr-bf":[","," ",3,0,"# \u00a4","XOF"],"mr":[".",",",3,0,"\u00a4#",""],"mer-ke":[".",",",3,0,"\u00a4#","KES"],"bs":[",",".",3,0,"# \u00a4",""],"en-tv":[".",",",3,0,"\u00a4#","AUD"],"ksf":[","," ",3,0,"# \u00a4",""],"ms":[".",",",3,0,"\u00a4#",""],"sk-sk":[","," ",3,0,"# \u00a4","EUR"],"he-il":[".",",",3,0,"# \u00a4","ILS"],"ru-ru":[","," ",3,0,"# \u00a4","RUB"],"en-lc":[".",",",3,0,"\u00a4#","XCD"],"fr-ml":[","," ",3,0,"# \u00a4","XOF"],"fr-gf":[","," ",3,0,"# \u00a4","EUR"],"kkj":[",",".",3,0,"\u00a4 #",""],"ha":[".",",",3,0,"\u00a4 #",""],"mt":[".",",",3,0,"\u00a4#",""],"fr-cm":[","," ",3,0,"# \u00a4","XAF"],"dje-ne":["."," ",3,0,"#\u00a4","XOF"],"ar-ss":["٫","٬",3,0,"# \u00a4","SSP"],"kl-gl":[",",".",3,0,"\u00a4#","DKK"],"en-gd":[".",",",3,0,"\u00a4#","XCD"],"fi-fi":[","," ",3,0,"# \u00a4","EUR"],"en-vc":[".",",",3,0,"\u00a4#","XCD"],"he":[".",",",3,0,"# \u00a4",""],"es-es":[",",".",3,0,"# \u00a4","EUR"],"en-ck":[".",",",3,0,"\u00a4#","NZD"],"bas":[","," ",3,0,"# \u00a4",""],"cs-cz":[","," ",3,0,"# \u00a4","CZK"],"ckb":["٫","٬",3,0,"\u00a4 #",""],"tr-tr":[",",".",3,0,"\u00a4#","TRY"],"az-az":[",",".",3,0,"\u00a4 #","AZN"],"es-py":[",",".",3,0,"\u00a4 #","PYG"],"mer":[".",",",3,0,"\u00a4#",""],"my":[".",",",3,0,"\u00a4 #",""],"en-hk":[".",",",3,0,"\u00a4#","HKD"],"sg":[",",".",3,0,"\u00a4#",""],"nl-nl":[",",".",3,0,"\u00a4 #","EUR"],"en-be":[",",".",3,0,"# \u00a4","EUR"],"ms-my":[".",",",3,0,"\u00a4#","MYR"],"es-uy":[",",".",3,0,"\u00a4 #","UYU"],"hi":[".",",",3,2,"\u00a4#",""],"ar-bh":["٫","٬",3,0,"# \u00a4","BHD"],"kw-gb":[".",",",3,0,"\u00a4#","GBP"],"si":[".",",",3,0,"\u00a4#",""],"khq-ml":["."," ",3,0,"#\u00a4","XOF"],"mfe":["."," ",3,0,"\u00a4 #",""],"teo":[".",",",3,0,"\u00a4#",""],"sk":[","," ",3,0,"# \u00a4",""],"dz-bt":[".",",",3,2,"\u00a4#","BTN"],"so-dj":[".",",",3,0,"\u00a4#","DJF"],"sl":[",",".",3,0,"# \u00a4",""],"en-nr":[".",",",3,0,"\u00a4#","AUD"],"da-gl":[",",".",3,0,"# \u00a4","DKK"],"sn":[".",",",3,0,"\u00a4#",""],"sn-zw":[".",",",3,0,"\u00a4#","USD"],"zgh-ma":[","," ",3,0,"#\u00a4","MAD"],"or-in":[".",",",3,2,"\u00a4 #","INR"],"kde":[".",",",3,0,"\u00a4#",""],"so":[".",",",3,0,"\u00a4#",""],"en-is":[",",".",3,0,"\u00a4#","ISK"],"kam-ke":[".",",",3,0,"\u00a4#","KES"],"sq":[","," ",3,0,"# \u00a4",""],"hr":[",",".",3,0,"# \u00a4",""],"fr-bi":[","," ",3,0,"# \u00a4","BIF"],"en-cm":[".",",",3,0,"\u00a4#","XAF"],"mgo-cm":[".",",",3,0,"\u00a4 #","XAF"],"sr":[",",".",3,0,"# \u00a4",""],"eu-es":[",",".",3,0,"# \u00a4","EUR"],"af-na":[","," ",3,0,"\u00a4 #","NAD"],"ca":[",",".",3,0,"# \u00a4",""],"hu":[","," ",3,0,"# \u00a4",""],"es-do":[".",",",3,0,"\u00a4#","DOP"],"kab-dz":[","," ",3,0,"#\u00a4","DZD"],"nb":[","," ",3,0,"\u00a4 #",""],"en-ss":[".",",",3,0,"\u00a4#","SSP"],"sv":[","," ",3,0,"# \u00a4",""],"de-li":[".","'",3,0,"\u00a4 #","CHF"],"ta-my":[".",",",3,0,"\u00a4 #","MYR"],"sw":[".",",",3,0,"\u00a4#",""],"ca-it":[",",".",3,0,"# \u00a4","EUR"],"en-gg":[".",",",3,0,"\u00a4#","GBP"],"xog-ug":[".",",",3,0,"# \u00a4","UGX"],"nd":[".",",",3,0,"\u00a4#",""],"fr-bj":[","," ",3,0,"# \u00a4","XOF"],"hy":[",",".",0,0,"# \u00a4",""],"ne":[".",",",3,0,"\u00a4#",""],"en-it":[",",".",3,0,"\u00a4#","EUR"],"uz-uz":[","," ",3,0,"\u00a4 #","UZS"],"en-tz":[".",",",3,0,"\u00a4#","TZS"],"kkj-cm":[",",".",3,0,"\u00a4 #","XAF"],"fil-ph":[".",",",3,0,"\u00a4#","PHP"],"rw-rw":[",",".",3,0,"\u00a4 #","RWF"],"mgh-mz":[",",".",3,0,"\u00a4 #","MZN"],"mg-mg":[".",",",3,0,"\u00a4#","MGA"],"luo-ke":[".",",",3,0,"#\u00a4","KES"],"seh":[",",".",3,0,"#\u00a4",""],"km-kh":[",",".",3,0,"\u00a4#","KHR"],"pt-st":[","," ",3,0,"# \u00a4","STD"],"iu-ca":[".",",",3,0,"\u00a4 #","CAD"],"en-gh":[".",",",3,0,"\u00a4#","GHS"],"en-vg":[".",",",3,0,"\u00a4#","USD"],"nl":[",",".",3,0,"\u00a4 #",""],"ar-ae":["٫","٬",3,0,"# \u00a4","AED"],"cgg-ug":[".",",",3,0,"\u00a4#","UGX"],"swc-cd":[",",".",3,0,"\u00a4#","CDF"],"en-nu":[".",",",3,0,"\u00a4#","NZD"],"ha-gh":[".",",",3,0,"\u00a4 #","GHS"],"sv-se":[","," ",3,0,"# \u00a4","SEK"],"fr-mq":[","," ",3,0,"# \u00a4","EUR"],"ln-ao":[",",".",3,0,"# \u00a4","AOA"],"mas-tz":[".",",",3,0,"\u00a4#","TZS"],"nn":[","," ",3,0,"# \u00a4",""],"dua":[","," ",3,0,"# \u00a4",""],"yav-cm":[","," ",3,0,"# \u00a4","XAF"],"so-et":[".",",",3,0,"\u00a4#","ETB"],"kea":[",",".",3,0,"#\u00a4",""],"kln":[".",",",3,0,"\u00a4#",""],"en-mo":[".",",",3,0,"\u00a4#","MOP"],"yo":[".",",",3,0,"\u00a4#",""],"ar-mr":["٫","٬",3,0,"# \u00a4","MRO"],"en-gi":[".",",",3,0,"\u00a4#","GIP"],"ii-cn":[".",",",3,0,"\u00a4 #","CNY"],"pt-mo":[","," ",3,0,"# \u00a4","MOP"],"en-za":[","," ",3,0,"\u00a4#","ZAR"],"fr-bl":[","," ",3,0,"# \u00a4","EUR"],"cs":[","," ",3,0,"# \u00a4",""],"en-ro":[",",".",3,0,"# \u00a4","RON"],"fr-mr":[","," ",3,0,"# \u00a4","MRO"],"hi-in":[".",",",3,2,"\u00a4#","INR"],"kln-ke":[".",",",3,0,"\u00a4#","KES"],"nn-no":[","," ",3,0,"# \u00a4","NOK"],"luo":[".",",",3,0,"#\u00a4",""],"ta":[".",",",3,2,"\u00a4 #",""],"sq-xk":[","," ",3,0,"# \u00a4","EUR"],"ar-dz":[",",".",3,0,"\u00a4 #","DZD"],"ar-sy":["٫","٬",3,0,"# \u00a4","SYP"],"en-mp":[".",",",3,0,"\u00a4#","USD"],"nl-be":[",",".",3,0,"# \u00a4","EUR"],"id":[",",".",3,0,"\u00a4#",""],"cy":[".",",",3,0,"\u00a4#",""],"es-cl":[",",".",3,0,"\u00a4#","CLP"],"en-vi":[".",",",3,0,"\u00a4#","USD"],"fr-sy":[","," ",3,0,"# \u00a4","SYP"],"fr-dz":[","," ",3,0,"# \u00a4","DZD"],"te":[".",",",3,0,"\u00a4#",""],"ca-ad":[",",".",3,0,"# \u00a4","EUR"],"mgh":[",",".",3,0,"\u00a4 #",""],"en-ad":[",",".",3,0,"\u00a4#","EUR"],"ig":[".",",",3,0,"\u00a4#",""],"sr-me":[",",".",3,0,"# \u00a4","EUR"],"tg":[".",",",3,0,"\u00a4 #",""],"vai":[".",",",3,0,"\u00a4#",""],"hy-am":[",",".",0,0,"# \u00a4","AMD"],"sr-xk":[",",".",3,0,"# \u00a4","EUR"],"ses":["."," ",3,0,"#\u00a4",""],"fr-pf":[","," ",3,0,"# \u00a4","XPF"],"th":[".",",",3,0,"\u00a4#",""],"ii":[".",",",3,0,"\u00a4 #",""],"ti":[".",",",3,0,"\u00a4#",""],"zu-za":[".",",",3,0,"\u00a4#","ZAR"],"nl-sr":[",",".",3,0,"\u00a4 #","SRD"],"fr-ht":[","," ",3,0,"# \u00a4","HTG"],"es-ve":[",",".",3,0,"\u00a4#","VEF"],"tk":[","," ",3,0,"#\u00a4",""],"brx":[".",",",3,2,"\u00a4 #",""],"so-so":[".",",",3,0,"\u00a4#","SOS"],"ps-af":["٫","٬",3,0,"# \u00a4","AFN"],"haw":[".",",",3,0,"\u00a4#",""],"pl-pl":[","," ",3,0,"# \u00a4","PLN"],"fr-gn":[","," ",3,0,"# \u00a4","GNF"],"en-hr":[",",".",3,0,"# \u00a4","HRK"],"gsw-ch":[".","’",3,0,"# \u00a4","CHF"],"om-ke":[".",",",3,0,"\u00a4#","KES"],"dua-cm":[","," ",3,0,"# \u00a4","XAF"],"en-sx":[".",",",3,0,"\u00a4#","ANG"],"to":[".",",",3,0,"\u00a4 #",""],"en-ke":[".",",",3,0,"\u00a4#","KES"],"mgo":[".",",",3,0,"\u00a4 #",""],"yo-bj":[".",",",3,0,"\u00a4#","XOF"],"ee-tg":[".",",",3,0,"\u00a4#","XOF"],"lkt-us":[".",",",3,0,"\u00a4 #","USD"],"tr":[",",".",3,0,"# \u00a4",""],"sr-ba":[",",".",3,0,"# \u00a4","BAM"],"is":[",",".",3,0,"# \u00a4",""],"luy":[".",",",3,0,"\u00a4#",""],"kde-tz":[".",",",3,0,"\u00a4#","TZS"],"fr-mu":[","," ",3,0,"# \u00a4","MUR"],"it":[",",".",3,0,"# \u00a4",""],"da":[",",".",3,0,"# \u00a4",""],"es-hn":[".",",",3,0,"\u00a4#","HNL"],"mfe-mu":["."," ",3,0,"\u00a4 #","MUR"],"iu":[".",",",3,0,"\u00a4 #",""],"vai-lr":[".",",",3,0,"\u00a4#","LRD"],"en-bm":[".",",",3,0,"\u00a4#","BMD"],"ml-in":[".",",",3,2,"#\u00a4","INR"],"sv-ax":[","," ",3,0,"# \u00a4","EUR"],"en-ms":[".",",",3,0,"\u00a4#","XCD"],"ru-by":[","," ",3,0,"# \u00a4","BYR"],"ro-md":[",",".",3,0,"# \u00a4","MDL"],"en-gm":[".",",",3,0,"\u00a4#","GMD"],"de":[",",".",3,0,"# \u00a4",""],"es-co":[",",".",3,0,"\u00a4#","COP"],"en-ag":[".",",",3,0,"\u00a4#","XCD"],"es-pa":[".",",",3,0,"\u00a4#","PAB"],"en-nz":[".",",",3,0,"\u00a4#","NZD"],"ms-sg":[".",",",3,0,"\u00a4#","SGD"],"fr-gp":[","," ",3,0,"# \u00a4","EUR"],"en-ws":[".",",",3,0,"\u00a4#","WST"],"it-sm":[",",".",3,0,"# \u00a4","EUR"],"en-sz":[".",",",3,0,"\u00a4#","SZL"],"lt-lt":[","," ",3,0,"# \u00a4","EUR"],"zh":[".",",",3,0,"\u00a4#",""],"asa":[".",",",3,0,"# \u00a4",""],"en-mt":[".",",",3,0,"\u00a4#","EUR"],"si-lk":[".",",",3,0,"\u00a4#","LKR"],"it-ch":[".","'",3,0,"\u00a4 #","CHF"],"rm-ch":[".","’",3,0,"# \u00a4","CHF"],"en-pg":[".",",",3,0,"\u00a4#","PGK"],"om":[".",",",3,0,"\u00a4#",""],"fr-gq":[","," ",3,0,"# \u00a4","XAF"],"agq-cm":[","," ",3,0,"#\u00a4","XAF"],"en-hu":[","," ",3,0,"# \u00a4","HUF"],"jmc":[".",",",3,0,"\u00a4#",""],"en-ug":[".",",",3,0,"\u00a4#","UGX"],"es-sv":[".",",",3,0,"\u00a4#","USD"],"fr-rw":[","," ",3,0,"# \u00a4","RWF"],"en-mu":[".",",",3,0,"\u00a4#","MUR"],"pa-in":[".",",",3,2,"\u00a4 #","INR"],"en-ai":[".",",",3,0,"\u00a4#","XCD"],"or":[".",",",3,2,"\u00a4 #",""],"br-fr":[","," ",3,0,"\u00a4 #","EUR"],"vun-tz":[".",",",3,0,"\u00a4#","TZS"],"ar-td":["٫","٬",3,0,"# \u00a4","XAF"],"en-ph":[".",",",3,0,"\u00a4#","PHP"],"pt-cv":[","," ",3,0,"# \u00a4","CVE"],"en-ru":[","," ",3,0,"# \u00a4","RUB"],"sq-mk":[","," ",3,0,"# \u00a4","MKD"],"jgo-cm":[",",".",3,0,"\u00a4 #","XAF"],"ja":[".",",",3,0,"\u00a4#",""],"en-fi":[","," ",3,0,"\u00a4#","EUR"],"mk-mk":[",",".",3,0,"\u00a4 #","MKD"],"twq":["."," ",3,0,"#\u00a4",""],"fr-td":[","," ",3,0,"# \u00a4","XAF"],"ta-sg":[".",",",3,0,"\u00a4 #","SGD"],"zu":[".",",",3,0,"\u00a4#",""],"naq":[".",",",3,0,"\u00a4#",""],"en-ki":[".",",",3,0,"\u00a4#","AUD"],"fo-fo":[",",".",3,0,"\u00a4#","DKK"],"el-gr":[",",".",3,0,"# \u00a4","EUR"],"rof-tz":[".",",",3,0,"\u00a4#","TZS"],"es-cr":[",",".",3,0,"\u00a4#","CRC"],"el-cy":[",",".",3,0,"\u00a4#","EUR"],"nmg-cm":[","," ",3,0,"# \u00a4","XAF"],"dz":[".",",",3,2,"\u00a4#",""],"swc":[",",".",3,0,"\u00a4#",""],"ewo-cm":[","," ",3,0,"# \u00a4","XAF"],"ewo":[","," ",3,0,"# \u00a4",""],"nus-sd":[".",",",3,0,"\u00a4#","SDG"],"en-fj":[".",",",3,0,"\u00a4#","FJD"],"mua-cm":[",",".",3,0,"\u00a4#","XAF"],"zh-sg":[".",",",3,0,"\u00a4#","SGD"],"ug":[".",",",3,0,"\u00a4#",""],"bem-zm":[".",",",3,0,"\u00a4#","ZMW"],"ar-ye":["٫","٬",3,0,"# \u00a4","YER"],"ja-jp":[".",",",3,0,"\u00a4#","JPY"],"ur-pk":[".",",",3,0,"\u00a4‎#","PKR"],"en-mw":[".",",",3,0,"\u00a4#","MWK"],"nl-sx":[",",".",3,0,"\u00a4 #","ANG"],"ar-km":["٫","٬",3,0,"# \u00a4","KMF"],"gl-es":[",",".",3,0,"\u00a4#","EUR"],"en-tc":[".",",",3,0,"\u00a4#","USD"],"ar-eg":["٫","٬",3,0,"# \u00a4","EGP"],"nyn":[".",",",3,0,"\u00a4#",""],"en-rw":[".",",",3,0,"\u00a4#","RWF"],"th-th":[".",",",3,0,"\u00a4#","THB"],"es-pe":[".",",",3,0,"\u00a4#","PEN"],"en-cx":[".",",",3,0,"\u00a4#","AUD"],"uk":[","," ",3,0,"# \u00a4",""],"fr-km":[","," ",3,0,"# \u00a4","KMF"],"ln-cd":[",",".",3,0,"# \u00a4","CDF"],"en-fk":[".",",",3,0,"\u00a4#","FKP"],"zgh":[","," ",3,0,"#\u00a4",""],"lv-lv":[","," ",3,0,"\u00a4#","EUR"],"fr-pm":[","," ",3,0,"# \u00a4","EUR"],"ko-kp":[".",",",3,0,"\u00a4#","KPW"],"is-is":[",",".",3,0,"# \u00a4","ISK"],"pt-br":[",",".",3,0,"\u00a4#","BRL"],"hr-ba":[",",".",3,0,"# \u00a4","BAM"],"fil":[".",",",3,0,"\u00a4#",""],"en-ee":[","," ",3,0,"\u00a4#","EUR"],"en-cy":[",",".",3,0,"\u00a4#","EUR"],"en-al":[","," ",3,0,"\u00a4#","ALL"],"ar-eh":[".",",",3,0,"\u00a4 #","MAD"],"tg-tj":[".",",",3,0,"\u00a4 #","TJS"],"ur":[".",",",3,0,"\u00a4‎#",""],"en-pk":[".",",",3,0,"\u00a4#","PKR"],"en-lr":[".",",",3,0,"\u00a4#","LRD"],"en-je":[".",",",3,0,"\u00a4#","GBP"],"fa-ir":["٫","٬",3,0,"#‎\u00a4","IRR"],"pa":["٫","٬",3,0,"\u00a4 #",""],"fr-tg":[","," ",3,0,"# \u00a4","XOF"],"en-bs":[".",",",3,0,"\u00a4#","BSD"],"ky-kg":[","," ",3,0,"# \u00a4","KGS"],"ar-sa":["٫","٬",3,0,"# \u00a4","SAR"],"mr-in":[".",",",3,0,"\u00a4#","INR"],"uz-af":["٫","٬",3,0,"\u00a4 #","AFN"],"fr-lu":[",",".",3,0,"# \u00a4","EUR"],"de-lu":[",",".",3,0,"# \u00a4","EUR"],"ka-ge":[","," ",3,0,"# \u00a4","GEL"],"ru-md":[","," ",3,0,"# \u00a4","MDL"],"es-419":[".",",",3,0,"\u00a4#",""],"es-ea":[",",".",3,0,"# \u00a4","EUR"],"ee":[".",",",3,0,"\u00a4#",""],"haw-us":[".",",",3,0,"\u00a4#","USD"],"es-cu":[".",",",3,0,"\u00a4#","CUP"],"en-cz":[","," ",3,0,"# \u00a4","CZK"],"bg-bg":[","," ",3,0,"# \u00a4","BGN"],"en-pl":[","," ",3,0,"# \u00a4","PLN"],"en-ls":[".",",",3,0,"\u00a4#","ZAR"],"ln-cf":[",",".",3,0,"# \u00a4","XAF"],"nyn-ug":[".",",",3,0,"\u00a4#","UGX"],"bem":[".",",",3,0,"\u00a4#",""],"uz":[","," ",3,0,"\u00a4 #",""],"shi-ma":[","," ",3,0,"#\u00a4","MAD"],"en-fm":[".",",",3,0,"\u00a4#","USD"],"fr-vu":[","," ",3,0,"# \u00a4","VUV"],"ebu-ke":[".",",",3,0,"\u00a4#","KES"],"es-bo":[",",".",3,0,"\u00a4#","BOB"],"ko-kr":[".",",",3,0,"\u00a4#","KRW"],"en-001":[".",",",3,0,"\u00a4#",""],"it-it":[",",".",3,0,"# \u00a4","EUR"],"dyo-sn":[","," ",3,0,"# \u00a4","XOF"],"pt-mz":[","," ",3,0,"# \u00a4","MZN"],"ff-sn":[","," ",3,0,"# \u00a4","XOF"],"el":[",",".",3,0,"# \u00a4",""],"es-ph":[",",".",3,0,"# \u00a4","PHP"],"pl":[","," ",3,0,"# \u00a4",""],"en-lt":[","," ",3,0,"\u00a4#","EUR"],"ln-cg":[",",".",3,0,"# \u00a4","XAF"],"en":[".",",",3,0,"\u00a4#",""],"so-ke":[".",",",3,0,"\u00a4#","KES"],"bn-in":[".",",",3,2,"#\u00a4","INR"],"eo":[","," ",3,0,"\u00a4 #",""],"en-um":[".",",",3,0,"\u00a4#","USD"],"shi":[","," ",3,0,"#\u00a4",""],"kok":[".",",",3,2,"\u00a4 #",""],"fr-nc":[","," ",3,0,"# \u00a4","XPF"],"mas":[".",",",3,0,"\u00a4#",""],"rof":[".",",",3,0,"\u00a4#",""],"id-id":[",",".",3,0,"\u00a4#","IDR"],"en-kn":[".",",",3,0,"\u00a4#","XCD"],"en-zm":[".",",",3,0,"\u00a4#","ZMW"],"en-gu":[".",",",3,0,"\u00a4#","USD"],"es-ec":[",",".",3,0,"\u00a4#","USD"],"ru-kz":[","," ",3,0,"# \u00a4","KZT"],"fr-sc":[","," ",3,0,"# \u00a4","SCR"],"es":[",",".",3,0,"# \u00a4",""],"en-pn":[".",",",3,0,"\u00a4#","NZD"],"en-na":[".",",",3,0,"\u00a4#","NAD"],"ps":["٫","٬",3,0,"# \u00a4",""],"et":[","," ",3,0,"# \u00a4",""],"en-lu":[",",".",3,0,"\u00a4#","EUR"],"pt-ao":[","," ",3,0,"# \u00a4","AOA"],"nl-cw":[",",".",3,0,"\u00a4 #","ANG"],"pt":[",",".",3,0,"\u00a4#",""],"eu":[",",".",3,0,"# \u00a4",""],"ka":[","," ",3,0,"# \u00a4",""],"bo-in":[".",",",3,0,"\u00a4 #","INR"],"mn-mn":[".",",",3,0,"\u00a4 #","MNT"],"cgg":[".",",",3,0,"\u00a4#",""],"ar-sd":["٫","٬",3,0,"# \u00a4","SDG"],"nl-bq":[",",".",3,0,"\u00a4 #","USD"],"lag":[".",",",3,0,"\u00a4 #",""],"fr-fr":[","," ",3,0,"# \u00a4","EUR"],"es-gq":[",",".",3,0,"\u00a4#","XAF"],"ta-in":[".",",",3,2,"\u00a4 #","INR"],"en-vu":[".",",",3,0,"\u00a4#","VUV"],"de-de":[",",".",3,0,"# \u00a4","EUR"],"en-lv":[","," ",3,0,"\u00a4#","EUR"],"ar-ly":[",",".",3,0,"\u00a4 #","LYD"],"mas-ke":[".",",",3,0,"\u00a4#","KES"],"en-bw":[".",",",3,0,"\u00a4#","BWP"],"en-sb":[".",",",3,0,"\u00a4#","SBD"],"lo-la":[",",".",3,0,"\u00a4#","LAK"],"ki":[".",",",3,0,"\u00a4#",""],"fr-ne":[","," ",3,0,"# \u00a4","XOF"],"rn-bi":[",",".",3,0,"#\u00a4","BIF"],"vi":[",",".",3,0,"# \u00a4",""],"es-mx":[".",",",3,0,"\u00a4#","MXN"],"rwk":[".",",",3,0,"#\u00a4",""],"bez":[".",",",3,0,"#\u00a4",""],"kk":[","," ",3,0,"# \u00a4",""],"kl":[",",".",3,0,"\u00a4#",""],"pt-gw":[","," ",3,0,"# \u00a4","XOF"],"tr-cy":[",",".",3,0,"# \u00a4","EUR"],"bn-bd":[".",",",3,2,"#\u00a4","BDT"],"km":[",",".",3,0,"\u00a4#",""],"ar-ps":["٫","٬",3,0,"# \u00a4","ILS"],"kn":[".",",",3,0,"\u00a4#",""],"dav-ke":[".",",",3,0,"\u00a4#","KES"],"ksb-tz":[".",",",3,0,"#\u00a4","TZS"],"ko":[".",",",3,0,"\u00a4#",""],"de-at":[",",".",3,0,"\u00a4 #","EUR"],"en-sc":[".",",",3,0,"\u00a4#","SCR"],"kk-kz":[","," ",3,0,"# \u00a4","KZT"],"gsw-li":[".","’",3,0,"# \u00a4","CHF"],"sw-tz":[".",",",3,0,"\u00a4#","TZS"],"teo-ug":[".",",",3,0,"\u00a4#","UGX"],"ar-om":["٫","٬",3,0,"# \u00a4","OMR"],"et-ee":[","," ",3,0,"# \u00a4","EUR"],"rwk-tz":[".",",",3,0,"#\u00a4","TZS"],"da-dk":[",",".",3,0,"# \u00a4","DKK"],"ks":["٫","٬",3,2,"\u00a4 #",""],"ro-ro":[",",".",3,0,"# \u00a4","RON"],"lu-cd":[",",".",3,0,"#\u00a4","CDF"],"bm-ml":[".",",",3,0,"\u00a4#","XOF"],"fa":["٫","٬",3,0,"#‎\u00a4",""],"en-fr":[","," ",3,0,"\u00a4#","EUR"],"fr-ca":[","," ",3,0,"# \u00a4","CAD"],"ca-fr":[",",".",3,0,"# \u00a4","EUR"],"brx-in":[".",",",3,2,"\u00a4 #","INR"],"en-sd":[".",",",3,0,"\u00a4#","SDG"],"en-de":[",",".",3,0,"\u00a4#","EUR"],"ses-ml":["."," ",3,0,"#\u00a4","XOF"],"sr-rs":[",",".",3,0,"# \u00a4","RSD"],"kw":[".",",",3,0,"\u00a4#",""],"en-ie":[".",",",3,0,"\u00a4#","EUR"],"ar-ma":[",",".",3,0,"\u00a4 #","MAD"],"es-gt":[".",",",3,0,"\u00a4#","GTQ"],"en-gy":[".",",",3,0,"\u00a4#","GYD"],"kab":[","," ",3,0,"#\u00a4",""],"en-tk":[".",",",3,0,"\u00a4#","NZD"],"am-et":[".",",",3,0,"\u00a4#","ETB"],"ky":[","," ",3,0,"# \u00a4",""],"bs-ba":[",",".",3,0,"\u00a4 #","BAM"],"en-pr":[".",",",3,0,"\u00a4#","USD"],"fr-ma":[","," ",3,0,"# \u00a4","MAD"],"ar-tn":[",",".",0,0,"\u00a4#","TND"],"en-as":[".",",",3,0,"\u00a4#","USD"],"twq-ne":["."," ",3,0,"#\u00a4","XOF"],"ff":[","," ",3,0,"# \u00a4",""],"tk-tm":[","," ",3,0,"#\u00a4","TMT"],"jgo":[",",".",3,0,"\u00a4 #",""],"ar-jo":["٫","٬",3,0,"# \u00a4","JOD"],"fa-af":["٫","٬",3,0,"#‎\u00a4","AFN"],"fr-tn":[","," ",3,0,"# \u00a4","TND"],"en-se":[","," ",3,0,"# \u00a4","SEK"],"ha-ne":[".",",",3,0,"\u00a4 #","XOF"],"en-bz":[".",",",3,0,"\u00a4#","BZD"],"khq":["."," ",3,0,"#\u00a4",""],"gsw":[".","’",3,0,"# \u00a4",""],"fi":[","," ",3,0,"# \u00a4",""],"ar-001":["٫","٬",3,0,"# \u00a4",""],"nb-sj":[","," ",3,0,"\u00a4 #","NOK"],"te-in":[".",",",3,0,"\u00a4#","INR"],"cy-gb":[".",",",3,0,"\u00a4#","GBP"],"zh-tw":[".",",",3,0,"\u00a4#","TWD"],"en-at":[",",".",3,0,"\u00a4#","EUR"],"saq":[".",",",3,0,"\u00a4#",""],"en-nf":[".",",",3,0,"\u00a4#","AUD"],"pt-tl":[","," ",3,0,"# \u00a4","USD"],"zh-hk":[".",",",3,0,"\u00a4#","HKD"],"en-jm":[".",",",3,0,"\u00a4#","JMD"],"en-dg":[".",",",3,0,"\u00a4#","USD"],"fo":[",",".",3,0,"\u00a4#",""],"en-us":[".",",",3,0,"\u00a4#","USD"],"ar-dj":["٫","٬",3,0,"# \u00a4","DJF"],"ar-kw":["٫","٬",3,0,"# \u00a4","KWD"],"af-za":[","," ",3,0,"\u00a4#","ZAR"],"fr-dj":[","," ",3,0,"# \u00a4","DJF"],"fr":[","," ",3,0,"# \u00a4",""],"xog":[".",",",3,0,"# \u00a4",""],"ig-ng":[".",",",3,0,"\u00a4#","NGN"],"tzm":[","," ",3,0,"# \u00a4",""],"en-au":[".",",",3,0,"\u00a4#","AUD"],"en-pt":[","," ",3,0,"\u00a4#","EUR"],"fr-mc":[","," ",3,0,"# \u00a4","EUR"],"en-ng":[".",",",3,0,"\u00a4#","NGN"],"ti-er":[".",",",3,0,"\u00a4#","ERN"],"luy-ke":[".",",",3,0,"\u00a4#","KES"],"en-ca":[".",",",3,0,"\u00a4#","CAD"],"pt-pt":[","," ",3,0,"# \u00a4","EUR"],"fr-cd":[","," ",3,0,"# \u00a4","CDF"],"ug-cn":[".",",",3,0,"\u00a4#","CNY"],"bo-cn":[".",",",3,0,"\u00a4 #","CNY"],"en-sg":[".",",",3,0,"\u00a4#","SGD"],"ha-ng":[".",",",3,0,"\u00a4 #","NGN"],"kn-in":[".",",",3,0,"\u00a4#","INR"],"gu-in":[".",",",3,2,"\u00a4#","INR"],"gv-im":[".",",",3,0,"\u00a4#","GBP"],"bez-tz":[".",",",3,0,"#\u00a4","TZS"],"es-ic":[",",".",3,0,"# \u00a4","EUR"],"lg-ug":[".",",",3,0,"#\u00a4","UGX"],"kam":[".",",",3,0,"\u00a4#",""],"ar-er":["٫","٬",3,0,"# \u00a4","ERN"],"af":[","," ",3,0,"\u00a4#",""],"nd-zw":[".",",",3,0,"\u00a4#","USD"],"lg":[".",",",3,0,"#\u00a4",""],"ebu":[".",",",3,0,"\u00a4#",""],"sw-ke":[".",",",3,0,"\u00a4#","KES"],"en-sh":[".",",",3,0,"\u00a4#","SHP"],"sq-al":[","," ",3,0,"# \u00a4","ALL"],"sbp-tz":[".",",",3,0,"#\u00a4","TZS"],"hr-hr":[",",".",3,0,"# \u00a4","HRK"],"ak":[".",",",3,0,"\u00a4#",""],"chr":[".",",",3,0,"\u00a4#",""],"zh-cn":[".",",",3,0,"\u00a4 #","CNY"],"ar-il":["٫","٬",3,0,"# \u00a4","ILS"],"en-cc":[".",",",3,0,"\u00a4#","AUD"],"dav":[".",",",3,0,"\u00a4#",""],"ti-et":[".",",",3,0,"\u00a4#","ETB"],"es-ar":[",",".",3,0,"\u00a4#","ARS"],"en-to":[".",",",3,0,"\u00a4#","TOP"],"am":[".",",",3,0,"\u00a4#",""],"dje":["."," ",3,0,"#\u00a4",""],"dyo":[","," ",3,0,"# \u00a4",""],"ln":[",",".",3,0,"# \u00a4",""],"fr-cf":[","," ",3,0,"# \u00a4","XAF"],"lo":[",",".",3,0,"\u00a4#",""],"fr-re":[","," ",3,0,"# \u00a4","EUR"],"en-si":[",",".",3,0,"\u00a4#","EUR"],"yo-ng":[".",",",3,0,"\u00a4#","NGN"],"ru-ua":[","," ",3,0,"# \u00a4","UAH"],"ar":["٫","٬",3,0,"# \u00a4",""],"as":[".",",",3,2,"\u00a4 #",""],"sbp":[".",",",3,0,"#\u00a4",""],"nnh-cm":[",",".",3,0,"\u00a4 #","XAF"],"es-pr":[".",",",3,0,"\u00a4#","USD"],"en-pw":[".",",",3,0,"\u00a4#","USD"],"fr-mf":[","," ",3,0,"# \u00a4","EUR"],"ksf-cm":[","," ",3,0,"# \u00a4","XAF"],"vun":[".",",",3,0,"\u00a4#",""],"teo-ke":[".",",",3,0,"\u00a4#","KES"],"lt":[","," ",3,0,"# \u00a4",""],"bas-cm":[","," ",3,0,"# \u00a4","XAF"],"ga":[".",",",3,0,"\u00a4#",""],"seh-mz":[",",".",3,0,"#\u00a4","MZN"],"fr-cg":[","," ",3,0,"# \u00a4","XAF"],"lu":[",",".",3,0,"#\u00a4",""],"nb-no":[","," ",3,0,"\u00a4 #","NOK"],"en-dk":[",",".",3,0,"# \u00a4","DKK"],"nmg":[","," ",3,0,"# \u00a4",""],"lv":[","," ",3,0,"\u00a4#",""],"asa-tz":[".",",",3,0,"# \u00a4","TZS"],"zh-mo":[".",",",3,0,"\u00a4#","MOP"],"en-zw":[".",",",3,0,"\u00a4#","USD"],"fr-wf":[","," ",3,0,"# \u00a4","XPF"],"en-er":[".",",",3,0,"\u00a4#","ERN"],"ak-gh":[".",",",3,0,"\u00a4#","GHS"],"vi-vn":[",",".",3,0,"# \u00a4","VND"],"sv-fi":[","," ",3,0,"# \u00a4","EUR"],"az":[",",".",3,0,"\u00a4 #",""],"to-to":[".",",",3,0,"\u00a4 #","TOP"],"sw-ug":[".",",",3,0,"\u00a4#","UGX"],"fr-mg":[","," ",3,0,"# \u00a4","MGA"],"en-150":[",",".",3,0,"\u00a4#","EUR"],"fr-ga":[","," ",3,0,"# \u00a4","XAF"],"fr-ch":[".","'",3,0,"\u00a4 #","CHF"],"de-ch":[".","'",3,0,"\u00a4 #","CHF"],"es-us":[".",",",3,0,"\u00a4#","USD"],"my-mm":[".",",",3,0,"\u00a4 #","MMK"],"en-sk":[","," ",3,0,"\u00a4#","EUR"],"lag-tz":[".",",",3,0,"\u00a4 #","TZS"],"en-me":[",",".",3,0,"\u00a4#","EUR"],"ga-ie":[".",",",3,0,"\u00a4#","EUR"],"ar-qa":["٫","٬",3,0,"# \u00a4","QAR"],"en-ky":[".",",",3,0,"\u00a4#","KYD"],"ee-gh":[".",",",3,0,"\u00a4#","GHS"],"fr-yt":[","," ",3,0,"# \u00a4","EUR"],"as-in":[".",",",3,2,"\u00a4 #","INR"],"ca-es":[",",".",3,0,"# \u00a4","EUR"],"en-es":[",",".",3,0,"\u00a4#","EUR"],"gl":[",",".",3,0,"\u00a4#",""],"ne-in":[".",",",3,0,"\u00a4#","INR"],"fr-sn":[","," ",3,0,"# \u00a4","XOF"],"en-tr":[",",".",3,0,"# \u00a4","TRY"],"en-nl":[",",".",3,0,"\u00a4#","EUR"],"ms-bn":[",",".",3,0,"\u00a4 #","BND"],"rm":[".","’",3,0,"# \u00a4",""],"ta-lk":[".",",",3,2,"\u00a4 #","LKR"],"ur-in":[".",",",3,2,"\u00a4 #","INR"],"ar-lb":["٫","٬",3,0,"# \u00a4","LBP"],"fr-ci":[","," ",3,0,"# \u00a4","XOF"],"rn":[",",".",3,0,"#\u00a4",""],"en-dm":[".",",",3,0,"\u00a4#","XCD"],"en-sl":[".",",",3,0,"\u00a4#","SLL"],"sg-cf":[",",".",3,0,"\u00a4#","XAF"],"ro":[",",".",3,0,"# \u00a4",""],"pa-pk":["٫","٬",3,0,"\u00a4 #","PKR"],"ks-in":["٫","٬",3,2,"\u00a4 #","INR"],"ar-so":["٫","٬",3,0,"# \u00a4","SOS"],"om-et":[".",",",3,0,"\u00a4#","ETB"],"jmc-tz":[".",",",3,0,"\u00a4#","TZS"],"saq-ke":[".",",",3,0,"\u00a4#","KES"],"en-im":[".",",",3,0,"\u00a4#","GBP"],"chr-us":[".",",",3,0,"\u00a4#","USD"],"naq-na":[".",",",3,0,"\u00a4#","NAD"],"uk-ua":[","," ",3,0,"# \u00a4","UAH"],"kea-cv":[",",".",3,0,"# \u00a4","CVE"],"agq":[","," ",3,0,"#\u00a4",""],"kok-in":[".",",",3,2,"\u00a4 #","INR"],"gu":[".",",",3,2,"\u00a4#",""],"en-ba":[",",".",3,0,"\u00a4 #","BAM"],"ru":[","," ",3,0,"# \u00a4",""],"gv":[".",",",3,0,"\u00a4#",""],"mt-mt":[".",",",3,0,"\u00a4#","EUR"],"ki-ke":[".",",",3,0,"\u00a4#","KES"],"yav":[","," ",3,0,"# \u00a4",""],"en-mg":[".",",",3,0,"\u00a4#","MGA"],"tzm-ma":[","," ",3,0,"# \u00a4","MAD"],"en-in":[".",",",3,2,"\u00a4 #","INR"],"guz-ke":[".",",",3,0,"\u00a4#","KES"],"rw":[",",".",3,0,"\u00a4 #",""],"be":[","," ",3,0,"\u00a4#",""],"ar-iq":["٫","٬",3,0,"# \u00a4","IQD"],"en-ch":[".","'",3,0,"\u00a4 #","CHF"],"en-tt":[".",",",3,0,"\u00a4#","TTD"],"mua":[",",".",3,0,"\u00a4#",""],"es-ni":[".",",",3,0,"\u00a4#","NIO"],"bg":[","," ",3,0,"# \u00a4",""],"nl-aw":[",",".",3,0,"\u00a4 #","AWG"],"mg":[".",",",3,0,"\u00a4#",""],"ne-np":[".",",",3,0,"\u00a4#","NPR"],"en-bb":[".",",",3,0,"\u00a4#","BBD"],"nus":[".",",",3,0,"\u00a4#",""],"lkt":[".",",",3,0,"\u00a4 #",""],"en-mh":[".",",",3,0,"\u00a4#","USD"],"hu-hu":[","," ",3,0,"# \u00a4","HUF"],"en-io":[".",",",3,0,"\u00a4#","USD"],"en-gb":[".",",",3,0,"\u00a4#","GBP"],"ru-kg":[","," ",3,0,"# \u00a4","KGS"],"guz":[".",",",3,0,"\u00a4#",""],"fr-be":[",",".",3,0,"# \u00a4","EUR"],"de-be":[",",".",3,0,"# \u00a4","EUR"],"nnh":[",",".",3,0,"\u00a4 #",""],"mk":[",",".",3,0,"\u00a4 #",""],"be-by":[","," ",3,0,"\u00a4#","BYR"],"bm":[".",",",3,0,"\u00a4#",""],"sl-si":[",",".",3,0,"# \u00a4","EUR"],"en-no":[","," ",3,0,"\u00a4 #","NOK"],"ml":[".",",",3,2,"#\u00a4",""],"ksb":[".",",",3,0,"#\u00a4",""],"bn":[".",",",3,2,"#\u00a4",""],"mn":[".",",",3,0,"\u00a4 #",""],"bo":[".",",",3,0,"\u00a4 #",""]};

    var CURRENCIES_INFO = {"TZS":[0,{"bez-tz":"TSh","asa-tz":"TSh","ksb-tz":"TSh","jmc-tz":"TSh","rwk-tz":"TSh","rof-tz":"TSh","mas-tz":"TSh","en-tz":"TSh","sbp-tz":"TSh","vun-tz":"TSh","kde-tz":"TSh","lag-tz":"TSh","sw-tz":"TSh"},"TZS","TZS"],"ISK":[0,{"is-is":"kr","en-is":"ISK"},"ISK","ISK"],"BWP":[2,{"en-bw":"P"},"BWP","BWP"],"SBD":[2,{"en-sb":"$"},"$SB","SBD"],"LAK":[0,{"lo-la":"₭"},"LAK","LAK"],"MWK":[2,{"en-mw":"MK"},"MWK","MWK"],"IDR":[0,{"id-id":"Rp"},"IDR","IDR"],"IRR":[0,{"fa-ir":"ریال"},"IRR","IRR"],"MAD":[2,{"ar-eh":"د.م.‏","tzm-ma":"MAD","shi-ma":"MAD","ar-ma":"د.م.‏","fr-ma":"MAD","zgh-ma":"MAD"},"MAD","MAD"],"BBD":[2,{"en-bb":"$"},"BBD","BBD"],"BDT":[2,{"bn-bd":"৳"},"BDT","BDT"],"NPR":[2,{"ne-np":"नेरू"},"NPR","NPR"],"SGD":[2,{"zh-sg":"$","ta-sg":"$","ms-sg":"$","en-sg":"$"},"$SG","SGD"],"ZMW":[2,{"en-zm":"K","bem-zm":"K"},"ZMW","ZMW"],"SSP":[2,{"ar-ss":"£","en-ss":"£"},"£SS","SSP"],"MRO":[0,{"ar-mr":"أ.م.‏","fr-mr":"UM"},"MRO","MRO"],"KMF":[0,{"ar-km":"ف.ج.ق.‏","fr-km":"CF"},"KMF","KMF"],"AMD":[0,{"hy-am":"դր."},"AMD","AMD"],"CAD":[2,{"iu-ca":"CA$","fr-ca":"$","en-ca":"$"},"$CA","CAD"],"PEN":[2,{"es-pe":"S/."},"PEN","PEN"],"UYU":[2,{"es-uy":"$"},"$UY","UYU"],"JPY":[0,{"ja-jp":"¥"},"¥JP","JPY"],"BAM":[2,{"bs-ba":"KM","sr-ba":"КМ","hr-ba":"KM","en-ba":"BAM"},"BAM","BAM"],"GNF":[0,{"fr-gn":"FG"},"GNF","GNF"],"TTD":[2,{"en-tt":"$"},"$TT","TTD"],"INR":[2,{"ur-in":"₹","ml-in":"₹","bo-in":"₹","ne-in":"₹","or-in":"₹","brx-in":"₹","gu-in":"₹","pa-in":"₹","mr-in":"₹","hi-in":"₹","ta-in":"₹","kok-in":"₹","as-in":"₹","ks-in":"₹","en-in":"₹","kn-in":"₹","bn-in":"₹","te-in":"₹"},"₹","INR"],"JOD":[3,{"ar-jo":"د.أ.‏"},"JOD","JOD"],"PYG":[0,{"es-py":"₲"},"PYG","PYG"],"MKD":[2,{"mk-mk":"ден","sq-mk":"den"},"MKD","MKD"],"KWD":[3,{"ar-kw":"د.ك.‏"},"KWD","KWD"],"ALL":[0,{"en-al":"ALL","sq-al":"Lekë"},"ALL","ALL"],"BZD":[2,{"en-bz":"$"},"$BZ","BZD"],"MGA":[0,{"en-mg":"Ar","fr-mg":"Ar","mg-mg":"Ar"},"MGA","MGA"],"TMT":[2,{"tk-tm":"m."},"TMT","TMT"],"USD":[2,{"en-zw":"US$","en-io":"$","haw-us":"$","sn-zw":"US$","chr-us":"$","nd-zw":"US$","nl-bq":"$","pt-tl":"US$","en-gu":"$","lkt-us":"$","en-mp":"$","en-vi":"$","en-dg":"$","en-as":"$","es-ec":"$","en-pr":"$","en-us":"$","en-pw":"US$","en-um":"$","en-vg":"$","es-sv":"$","en-tc":"US$","en-mh":"$","en-fm":"US$","es-pr":"$","es-us":"$"},"$US","USD"],"UZS":[0,{"uz-uz":"soʻm"},"UZS","UZS"],"AZN":[2,{"az-az":"man."},"AZN","AZN"],"SAR":[2,{"ar-sa":"ر.س.‏"},"SAR","SAR"],"BTN":[2,{"dz-bt":"Nu."},"BTN","BTN"],"RWF":[0,{"rw-rw":"RF","en-rw":"RF","fr-rw":"RF"},"RWF","RWF"],"KGS":[2,{"ky-kg":"сом","ru-kg":"сом"},"KGS","KGS"],"XAF":[0,{"ksf-cm":"FCFA","ln-cg":"FCFA","fr-cf":"FCFA","ln-cf":"FCFA","jgo-cm":"FCFA","en-cm":"FCFA","fr-gq":"FCFA","nmg-cm":"FCFA","yav-cm":"FCFA","es-gq":"FCFA","fr-ga":"FCFA","mgo-cm":"FCFA","mua-cm":"FCFA","bas-cm":"FCFA","agq-cm":"FCFA","sg-cf":"FCFA","fr-cm":"FCFA","kkj-cm":"FCFA","dua-cm":"FCFA","nnh-cm":"FCFA","fr-cg":"FCFA","ar-td":"FCFA","ewo-cm":"FCFA","fr-td":"FCFA"},"FCFA","XAF"],"IQD":[0,{"ar-iq":"د.ع.‏"},"IQD","IQD"],"XOF":[0,{"ha-ne":"CFA","twq-ne":"CFA","ff-sn":"CFA","khq-ml":"CFA","bm-ml":"CFA","fr-ne":"CFA","ee-tg":"CFA","fr-tg":"CFA","pt-gw":"CFA","fr-bj":"CFA","fr-ml":"CFA","dyo-sn":"CFA","ses-ml":"CFA","dje-ne":"CFA","yo-bj":"CFA","fr-sn":"CFA","fr-ci":"CFA","fr-bf":"CFA"},"CFA","XOF"],"ZAR":[2,{"en-ls":"R","zu-za":"R","af-za":"R","en-za":"R"},"ZAR","ZAR"],"NAD":[2,{"af-na":"$","naq-na":"$","en-na":"$"},"$NA","NAD"],"SOS":[0,{"ar-so":"S","so-so":"S"},"SOS","SOS"],"GHS":[2,{"ee-gh":"GH₵","ha-gh":"GH₵","ak-gh":"GH₵","en-gh":"GH₵"},"GHS","GHS"],"BHD":[3,{"ar-bh":"د.ب.‏"},"BHD","BHD"],"MXN":[2,{"es-mx":"$"},"$MX","MXN"],"RSD":[0,{"sr-rs":"дин."},"RSD","RSD"],"KPW":[0,{"ko-kp":"KPW"},"KPW","KPW"],"UGX":[0,{"xog-ug":"USh","nyn-ug":"USh","lg-ug":"USh","cgg-ug":"USh","teo-ug":"USh","sw-ug":"USh","en-ug":"USh"},"UGX","UGX"],"SYP":[0,{"fr-sy":"LS","ar-sy":"ل.س.‏"},"SYP","SYP"],"AWG":[2,{"nl-aw":"Afl."},"AWG","AWG"],"LBP":[0,{"ar-lb":"ل.ل.‏"},"£LB","LBP"],"WST":[2,{"en-ws":"WS$"},"WS$","WST"],"LKR":[2,{"si-lk":"රු.","ta-lk":"Rs."},"LKR","LKR"],"LRD":[2,{"vai-lr":"$","en-lr":"$"},"$LR","LRD"],"MNT":[0,{"mn-mn":"₮"},"MNT","MNT"],"AED":[2,{"ar-ae":"د.إ.‏"},"AED","AED"],"KZT":[2,{"ru-kz":"₸","kk-kz":"₸"},"KZT","KZT"],"BMD":[2,{"en-bm":"$"},"$BM","BMD"],"DJF":[0,{"fr-dj":"Fdj","ar-dj":"Fdj","so-dj":"Fdj"},"DJF","DJF"],"EGP":[2,{"ar-eg":"ج.م.‏"},"£EG","EGP"],"SLL":[0,{"en-sl":"Le"},"SLL","SLL"],"GEL":[2,{"ka-ge":"GEL"},"GEL","GEL"],"NIO":[2,{"es-ni":"C$"},"NIO","NIO"],"GIP":[2,{"en-gi":"£"},"£GI","GIP"],"AOA":[2,{"ln-ao":"Kz","pt-ao":"Kz"},"AOA","AOA"],"GYD":[0,{"en-gy":"$"},"GYD","GYD"],"ANG":[2,{"nl-sx":"NAf.","nl-cw":"NAf.","en-sx":"NAf."},"ANG","ANG"],"PGK":[2,{"en-pg":"K"},"PGK","PGK"],"KHR":[2,{"km-kh":"៛"},"KHR","KHR"],"SRD":[2,{"nl-sr":"$"},"$SR","SRD"],"SZL":[2,{"en-sz":"E"},"SZL","SZL"],"MOP":[2,{"zh-mo":"MOP$","en-mo":"MOP$","pt-mo":"MOP$"},"MOP","MOP"],"TRY":[2,{"tr-tr":"₺","en-tr":"TRY"},"TRY","TRY"],"BGN":[2,{"bg-bg":"лв."},"BGN","BGN"],"HRK":[2,{"en-hr":"HRK","hr-hr":"kn"},"HRK","HRK"],"VND":[0,{"vi-vn":"₫"},"₫","VND"],"BYR":[0,{"ru-by":"р.","be-by":"р."},"BYR","BYR"],"THB":[2,{"th-th":"฿"},"฿","THB"],"UAH":[2,{"ru-ua":"₴","uk-ua":"₴"},"UAH","UAH"],"EUR":[2,{"en-si":"€","sr-me":"€","en-ee":"€","ga-ie":"€","en-it":"€","de-de":"€","es-ea":"€","nl-be":"€","sq-xk":"€","sk-sk":"€","et-ee":"€","sr-xk":"€","pt-pt":"€","en-ie":"€","br-fr":"€","en-mt":"€","en-fr":"€","en-de":"€","nl-nl":"€","en-me":"€","fr-re":"€","fr-fr":"€","it-sm":"€","it-it":"€","ca-ad":"€","lv-lv":"€","ca-es":"€","en-lt":"€","tr-cy":"€","de-lu":"€","fr-mq":"€","de-be":"€","en-pt":"€","en-sk":"€","en-150":"€","fr-gp":"€","sl-si":"€","de-at":"€","fr-bl":"€","el-cy":"€","en-lu":"€","sv-ax":"€","sv-fi":"€","en-cy":"€","fr-mf":"€","mt-mt":"€","fr-yt":"€","en-be":"€","es-ic":"€","en-es":"€","en-ad":"€","gl-es":"€","es-es":"€","ca-it":"€","fr-lu":"€","eu-es":"€","fr-pm":"€","fr-be":"€","lt-lt":"€","fi-fi":"€","en-at":"€","en-fi":"€","fr-mc":"€","en-nl":"€","ca-fr":"€","en-lv":"€","el-gr":"€","fr-gf":"€"},"€","EUR"],"TOP":[2,{"to-to":"T$","en-to":"T$"},"TOP","TOP"],"SDG":[2,{"ar-sd":"ج.س.","nus-sd":"SDG","en-sd":"SDG"},"£SD","SDG"],"XPF":[0,{"fr-pf":"FCFP","fr-nc":"FCFP","fr-wf":"FCFP"},"FCFP","XPF"],"TJS":[2,{"tg-tj":"сом"},"TJS","TJS"],"PKR":[0,{"ur-pk":"Rs","pa-pk":"ر","en-pk":"Rs"},"PKR","PKR"],"COP":[0,{"es-co":"$"},"$CO","COP"],"FKP":[2,{"en-fk":"£"},"£FK","FKP"],"VEF":[2,{"es-ve":"Bs."},"VEF","VEF"],"NOK":[2,{"nb-no":"kr","nb-sj":"kr","nn-no":"kr","en-no":"NOK"},"NOK","NOK"],"VUV":[0,{"fr-vu":"VT","en-vu":"VT"},"VUV","VUV"],"KYD":[2,{"en-ky":"$"},"KYD","KYD"],"BIF":[0,{"rn-bi":"FBu","fr-bi":"FBu"},"BIF","BIF"],"PLN":[2,{"pl-pl":"zł","en-pl":"PLN"},"PLN","PLN"],"BND":[2,{"ms-bn":"$"},"$BN","BND"],"HNL":[2,{"es-hn":"L"},"HNL","HNL"],"XCD":[2,{"en-vc":"EC$","en-ag":"EC$","en-ai":"EC$","en-lc":"EC$","en-ms":"EC$","en-dm":"EC$","en-kn":"EC$","en-gd":"EC$"},"EC$","XCD"],"CNY":[2,{"zh-cn":"￥","ii-cn":"¥","ug-cn":"￥","bo-cn":"¥"},"¥CN","CNY"],"CVE":[2,{"kea-cv":"CVE","pt-cv":"CVE"},"$CV","CVE"],"MYR":[2,{"ms-my":"RM","ta-my":"RM"},"MYR","MYR"],"CHF":[2,{"gsw-li":"CHF","fr-ch":"CHF","rm-ch":"CHF","gsw-ch":"CHF","en-ch":"CHF","de-li":"CHF","de-ch":"CHF","it-ch":"CHF"},"CHF","CHF"],"BSD":[2,{"en-bs":"$"},"$BS","BSD"],"SCR":[2,{"fr-sc":"SR","en-sc":"SR"},"SCR","SCR"],"OMR":[3,{"ar-om":"ر.ع.‏"},"OMR","OMR"],"RUB":[2,{"ru-ru":"₽","en-ru":"RUB"},"RUB","RUB"],"ERN":[2,{"ti-er":"Nfk","ar-er":"Nfk","en-er":"Nfk"},"ERN","ERN"],"QAR":[2,{"ar-qa":"ر.ق.‏"},"QAR","QAR"],"HKD":[2,{"zh-hk":"$","en-hk":"$"},"$HK","HKD"],"ETB":[2,{"om-et":"Br","am-et":"ብር","so-et":"Br","ti-et":"Br"},"ETB","ETB"],"ARS":[2,{"es-ar":"$"},"$AR","ARS"],"JMD":[2,{"en-jm":"$"},"JMD","JMD"],"CRC":[0,{"es-cr":"₡"},"CRC","CRC"],"NZD":[2,{"en-nu":"$","en-pn":"$","en-tk":"$","en-nz":"$","en-ck":"$"},"$NZ","NZD"],"CZK":[2,{"en-cz":"CZK","cs-cz":"Kč"},"CZK","CZK"],"SHP":[2,{"en-sh":"£"},"£SH","SHP"],"MZN":[2,{"seh-mz":"MTn","mgh-mz":"MTn","pt-mz":"MTn"},"MZN","MZN"],"BOB":[2,{"es-bo":"Bs"},"BOB","BOB"],"BRL":[2,{"pt-br":"R$"},"R$","BRL"],"ILS":[2,{"he-il":"₪","ar-il":"₪","ar-ps":"₪"},"₪","ILS"],"HTG":[2,{"fr-ht":"G"},"HTG","HTG"],"KRW":[0,{"ko-kr":"₩"},"₩","KRW"],"DZD":[2,{"fr-dz":"DA","ar-dz":"د.ج.‏","kab-dz":"DA"},"DZD","DZD"],"TWD":[2,{"zh-tw":"NT$"},"$TW","TWD"],"DKK":[2,{"da-dk":"kr","en-dk":"DKK","da-gl":"kr","kl-gl":"kr","fo-fo":"kr"},"DKK","DKK"],"PAB":[2,{"es-pa":"B/."},"PAB","PAB"],"MUR":[0,{"en-mu":"Rs","mfe-mu":"Rs","fr-mu":"Rs"},"MUR","MUR"],"PHP":[2,{"es-ph":"₱","en-ph":"₱","fil-ph":"₱"},"PHP","PHP"],"AUD":[2,{"en-nr":"$","en-ki":"$","en-cx":"$","en-tv":"$","en-nf":"$","en-au":"$","en-cc":"$"},"$AU","AUD"],"GTQ":[2,{"es-gt":"Q"},"GTQ","GTQ"],"KES":[2,{"mer-ke":"Ksh","kln-ke":"Ksh","sw-ke":"Ksh","guz-ke":"Ksh","luo-ke":"Ksh","ki-ke":"Ksh","dav-ke":"Ksh","en-ke":"Ksh","so-ke":"Ksh","om-ke":"Ksh","saq-ke":"Ksh","teo-ke":"Ksh","luy-ke":"Ksh","ebu-ke":"Ksh","kam-ke":"Ksh","mas-ke":"Ksh"},"KES","KES"],"CUP":[2,{"es-cu":"$"},"CUP","CUP"],"RON":[2,{"ro-ro":"RON","en-ro":"RON"},"RON","RON"],"MMK":[0,{"my-mm":"K"},"MMK","MMK"],"GMD":[2,{"en-gm":"D"},"GMD","GMD"],"DOP":[2,{"es-do":"$"},"DOP","DOP"],"CDF":[2,{"swc-cd":"FC","fr-cd":"FC","lu-cd":"FC","ln-cd":"FC"},"CDF","CDF"],"STD":[0,{"pt-st":"Db"},"STD","STD"],"TND":[3,{"fr-tn":"DT","ar-tn":"د.ت.‏"},"TND","TND"],"SEK":[2,{"en-se":"SEK","sv-se":"kr"},"SEK","SEK"],"YER":[0,{"ar-ye":"ر.ي.‏"},"YER","YER"],"LYD":[3,{"ar-ly":"د.ل.‏"},"LYD","LYD"],"CLP":[0,{"es-cl":"$"},"$CL","CLP"],"GBP":[2,{"gv-im":"£","en-gg":"£","en-je":"£","cy-gb":"£","kw-gb":"£","en-gb":"£","en-im":"£"},"£GB","GBP"],"FJD":[2,{"en-fj":"$"},"$FJ","FJD"],"HUF":[0,{"hu-hu":"Ft","en-hu":"HUF"},"HUF","HUF"],"MDL":[2,{"ru-md":"L","ro-md":"L"},"MDL","MDL"],"NGN":[2,{"en-ng":"₦","ha-ng":"₦","ig-ng":"₦","yo-ng":"₦"},"NGN","NGN"],"AFN":[0,{"ps-af":"؋","fa-af":"؋","uz-af":"؋"},"AFN","AFN"]};

    var numberformatter = function(locale) {

        this.maximum_fraction_digits = -1;
        this.minimum_fraction_digits = -1;
        this.set_locale(locale);
        this._read_currency_info(this.currency_code);
    };

    numberformatter.DEFAULT_LOCALE = 'en-us';

    numberformatter.DEFAULT_LOCALE_INFO = {
        DECIMAL_SEPARATOR: '.',
        GROUPING_SEPARATOR: ',',
        GROUPING_SIZE: 3,
        SECONDARY_GROUPING_SIZE: 0,
        CURRENCY_FORMAT: '\u00a4#',
        CURRENCY_CODE: 'USD',
        POSITIVE_PREFIX: '',
        NEGATIVE_PREFIX: '−',
        PLUS_SIGN: '+',
        MINUS_SIGN: '−'
    };

    numberformatter.prototype._read_locale_info = function (locale) {
        var locale_info = this._get_locale_info(locale);
        this.decimal_separator = locale_info.DECIMAL_SEPARATOR;
        this.grouping_separator = locale_info.GROUPING_SEPARATOR;
        this.grouping_size = locale_info.GROUPING_SIZE;
        this.secondary_grouping_size = locale_info.SECONDARY_GROUPING_SIZE;
        this.positive_prefix = locale_info.POSITIVE_PREFIX;
        this.negative_prefix = locale_info.NEGATIVE_PREFIX;
        this.plus_sign = locale_info.PLUS_SIGN;
        this.minus_sign = locale_info.MINUS_SIGN;
        this.currency_format = locale_info.CURRENCY_FORMAT;
        this.currency_code = locale_info.CURRENCY_CODE;
    };

    numberformatter.prototype._get_locale_info = function (locale) {
        var default_locale_info = numberformatter.DEFAULT_LOCALE_INFO;
        if ((typeof locale === 'undefined') || !(locale in LOCALES_INFO)) {
            return default_locale_info;
        }
        var locale_info = {};
        var l = LOCALES_INFO[locale];
        locale_info.DECIMAL_SEPARATOR = l[0];
        locale_info.GROUPING_SEPARATOR = l[1];
        locale_info.GROUPING_SIZE = l[2];
        locale_info.SECONDARY_GROUPING_SIZE = l[3];
        locale_info.CURRENCY_FORMAT = l[4];
        locale_info.CURRENCY_CODE = l[5];
        // ---
        locale_info.POSITIVE_PREFIX = default_locale_info.POSITIVE_PREFIX;
        locale_info.NEGATIVE_PREFIX = default_locale_info.NEGATIVE_PREFIX;
        locale_info.PLUS_SIGN = default_locale_info.PLUS_SIGN;
        locale_info.MINUS_SIGN = default_locale_info.MINUS_SIGN;
        return locale_info;
    };

    numberformatter.prototype._read_currency_info = function(currency_code) {
        var currency_info = CURRENCIES_INFO[currency_code];
        var available_local_symbols = currency_info[1];
        this.currency_maximum_fraction_digits = currency_info[0];
        var locale = this.locale;
        if (!(locale in available_local_symbols)) {
            locale = locale.split('-')[0];
        }
        var currency_symbol;
        if (!(locale in available_local_symbols)) {
            currency_symbol = currency_info[2];
        } else {
            currency_symbol = available_local_symbols[locale];
        }
        if (currency_symbol.length === 0) {
            currency_symbol = currency_info[3];
        }
        this.currency_symbol = currency_symbol;
    };

    numberformatter.prototype._determine_best_locale = function () {
        var nav_language = (navigator.language || navigator.userLanguage).toLowerCase();
        if (!(nav_language in LOCALES_INFO)) {
            nav_language = nav_language.split('-')[0];
        }
        if (!(nav_language in LOCALES_INFO)) {
            nav_language = this.DEFAULT_LOCALE;
        }
        return nav_language;
    };

    numberformatter.prototype.set_locale = function(locale) {
        if (typeof locale === 'undefined') {
            locale = this._determine_best_locale();
        }
        this.locale = locale;
        this._read_locale_info(locale);
    };

    numberformatter.prototype.set_currency_code = function(currency_code) {
        if (_test_is_empty_string(currency_code) || !(currency_code in CURRENCIES_INFO)) {
            currency_code = this.currency_code;
        }
        if (_test_is_empty_string(currency_code) || !(currency_code in CURRENCIES_INFO)) {
            currency_code = numberformatter.locale.CURRENCY_CODE;
        }
        this.currency_code = currency_code;
        this._read_currency_info(currency_code);
    };

    numberformatter.prototype.string_from_number = function(number) {
        number = parseFloat(number);
        var is_negative = (number < 0);
        var prefix = (is_negative ? this.negative_prefix : this.positive_prefix) || '';

        number = Math.abs(number);
        var number_str = '';
        if (this.maximum_fraction_digits >= 0) {
            var fixed_fraction_digits = this.maximum_fraction_digits;
            if (this.minimum_fraction_digits >= 0) {
                fixed_fraction_digits = Math.min(fixed_fraction_digits, this.minimum_fraction_digits);
            }
            number_str = number.toFixed(fixed_fraction_digits);
        } else {
            if (this.minimum_fraction_digits >= 0) {
                number_str = number.toFixed(this.minimum_fraction_digits);
            } else {
                number_str = number.toString();
            }
        }

        var integer_part_size = number.toFixed(0).length;
        var fraction_part_start = Math.min(number_str.length, integer_part_size + 1);
        var integer_part = number_str.substr(0, integer_part_size);
        var fraction_part = number_str.substr(fraction_part_start);

        var groups = [];
        var grouping_size = this.grouping_size;
        if (integer_part.length <= grouping_size) {
            groups.push(integer_part);
        } else {
            var i = integer_part.length - grouping_size;
            while (true) {
                groups.push(integer_part.substr(i, grouping_size));
                if (this.secondary_grouping_size > 0) {
                    grouping_size = this.secondary_grouping_size;
                }
                i -= grouping_size;
                if (i <= 0) {
                    groups.push(integer_part.substr(0, i + grouping_size));
                    break;
                }
            }
        }

        var res = '' + prefix;
        res += groups.reverse().join(this.grouping_separator);
        res += (fraction_part.length > 0 ? this.decimal_separator : '');
        res += fraction_part;
        return res;
    };

    numberformatter.prototype.curency_string_from_number = function(number) {

        var currency_format = this.currency_format;
        var currency_symbol = this.currency_symbol;
        var maximum_fraction_digits = this.maximum_fraction_digits;
        if (maximum_fraction_digits < 0) {
            this.maximum_fraction_digits = this.currency_maximum_fraction_digits;
        }
        var formatted_number = this.string_from_number(number);
        this.maximum_fraction_digits = maximum_fraction_digits;

        formatted_number = currency_format.replace('#', formatted_number).replace('\u00a4', currency_symbol);

        return formatted_number;
    };

    Number.prototype.string_from_number = function(locale) {
        var formatter = new numberformatter();
        formatter.set_locale(locale);
        return formatter.string_from_number(this);
    };


    Number.prototype.format_as_currency = function(currency, locale) {
        var formatter = new numberformatter();
        if (!_test_is_empty_string(locale)) {
           formatter.set_locale(locale);
        }
        if (!_test_is_empty_string(currency)) {
            formatter.set_currency_code(currency);
        }
        return formatter.curency_string_from_number(this);
    };

    function _test_is_empty_string(value) {
        return !(typeof value === 'string' && value.length !== 0);
    }

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = numberformatter;
        }
        exports.numberformatter = numberformatter;
    }
    else {
        root.numberformatter = numberformatter;
    }

})(this);