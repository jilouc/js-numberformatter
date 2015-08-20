
var expect = chai.expect;
var should = chai.should();

describe("Locale", function() {
	describe("constructor", function() {
		it("should throw an error for an unknown locale identifier", function() {
			var fn = function() { new Locale('zzzz'); };
			expect(fn).to.throw(Locale.UnknownLocaleError);
		});

		it("should throw an error for an unknown script identifier", function() {
			var fn = function() { new Locale('en-US', 'zzzz'); };
			expect(fn).to.throw(Locale.UnknownScriptError);
		});
	});
});

describe("NumberFormatter", function() {
	describe("constructor", function() {
		it("should conform to the given locale if valid", function() {
			var nf = new NumberFormatter('fr-FR');
			expect(nf.locale.localeIdentifier).to.equal('fr-fr');
		});
		it("should have a default locale if none is provided", function() {
			var nf = new NumberFormatter();
			expect(nf.locale.localeIdentifier).to.not.be.empty;
		});
	});

	describe("formatting 12345678.9012 into a string", function() {
		it("in eu (eu) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('eu')).to.equal("12.345.678,9012");
		});

		it("in hr-ba (hr_BA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('hr-ba')).to.equal("12.345.678,9012");
		});

		it("in en-cm (en_CM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-cm')).to.equal("12,345,678.9012");
		});

		it("in rw-rw (rw_RW) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('rw-rw')).to.equal("12.345.678,9012");
		});

		it("in en-sz (en_SZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sz')).to.equal("12,345,678.9012");
		});

		it("in tk (tk_Latn) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('tk')).to.equal("12 345 678,9012");
		});

		it("in uz (uz_Arab) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('uz', 'Arab')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in he-il (he_IL) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('he-il')).to.equal("12,345,678.9012");
		});

		it("in ar (ar) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-pn (en_PN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-pn')).to.equal("12,345,678.9012");
		});

		it("in as (as) => ১,২৩,৪৫,৬৭৮.৯০১২", function() {
			expect((12345678.9012).stringFromNumber('as')).to.equal("১,২৩,৪৫,৬৭৮.৯০১২");
		});

		it("in en-nf (en_NF) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-nf')).to.equal("12,345,678.9012");
		});

		it("in rwk-tz (rwk_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('rwk-tz')).to.equal("12,345,678.9012");
		});

		it("in zh-tw (zh_Hant_TW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-tw')).to.equal("12,345,678.9012");
		});

		it("in gsw-li (gsw_LI) => 12’345’678.9012", function() {
			expect((12345678.9012).stringFromNumber('gsw-li')).to.equal("12’345’678.9012");
		});

		it("in th-th (th_TH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('th-th')).to.equal("12,345,678.9012");
		});

		it("in ta-in (ta_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ta-in')).to.equal("1,23,45,678.9012");
		});

		it("in es-ea (es_EA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-ea')).to.equal("12.345.678,9012");
		});

		it("in fr-gf (fr_GF) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-gf')).to.equal("12 345 678,9012");
		});

		it("in ar-001 (ar_001) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-001')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-rw (en_RW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-rw')).to.equal("12,345,678.9012");
		});

		it("in tr-tr (tr_TR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('tr-tr')).to.equal("12.345.678,9012");
		});

		it("in de-ch (de_CH) => 12'345'678.9012", function() {
			expect((12345678.9012).stringFromNumber('de-ch')).to.equal("12'345'678.9012");
		});

		it("in ee-tg (ee_TG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ee-tg')).to.equal("12,345,678.9012");
		});

		it("in en-ng (en_NG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ng')).to.equal("12,345,678.9012");
		});

		it("in fr-tg (fr_TG) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-tg')).to.equal("12 345 678,9012");
		});

		it("in az (az) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('az')).to.equal("12.345.678,9012");
		});

		it("in fr-sc (fr_SC) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-sc')).to.equal("12 345 678,9012");
		});

		it("in es-hn (es_HN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-hn')).to.equal("12,345,678.9012");
		});

		it("in en-ag (en_AG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ag')).to.equal("12,345,678.9012");
		});

		it("in ru-kz (ru_KZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru-kz')).to.equal("12 345 678,9012");
		});

		it("in gsw (gsw) => 12’345’678.9012", function() {
			expect((12345678.9012).stringFromNumber('gsw')).to.equal("12’345’678.9012");
		});

		it("in dyo (dyo) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('dyo')).to.equal("12 345 678,9012");
		});

		it("in so-et (so_ET) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('so-et')).to.equal("12,345,678.9012");
		});

		it("in zh-mo (zh_Hant_MO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-mo')).to.equal("12,345,678.9012");
		});

		it("in de-be (de_BE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('de-be')).to.equal("12.345.678,9012");
		});

		it("in km-kh (km_KH) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('km-kh')).to.equal("12.345.678,9012");
		});

		it("in my-mm (my_MM) => ၁၂,၃၄၅,၆၇၈.၉၀၁၂", function() {
			expect((12345678.9012).stringFromNumber('my-mm')).to.equal("၁၂,၃၄၅,၆၇၈.၉၀၁၂");
		});

		it("in mgh-mz (mgh_MZ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('mgh-mz')).to.equal("12.345.678,9012");
		});

		it("in ee-gh (ee_GH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ee-gh')).to.equal("12,345,678.9012");
		});

		it("in es-ec (es_EC) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-ec')).to.equal("12.345.678,9012");
		});

		it("in kw-gb (kw_GB) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kw-gb')).to.equal("12,345,678.9012");
		});

		it("in rm-ch (rm_CH) => 12’345’678.9012", function() {
			expect((12345678.9012).stringFromNumber('rm-ch')).to.equal("12’345’678.9012");
		});

		it("in en-me (en_ME) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-me')).to.equal("12.345.678,9012");
		});

		it("in nyn (nyn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('nyn')).to.equal("12,345,678.9012");
		});

		it("in mk-mk (mk_MK) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('mk-mk')).to.equal("12.345.678,9012");
		});

		it("in bs-ba (bs_Cyrl_BA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('bs-ba', 'Cyrl')).to.equal("12.345.678,9012");
		});

		it("in ar-mr (ar_MR) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-mr')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-bm (en_BM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-bm')).to.equal("12,345,678.9012");
		});

		it("in ms (ms_Arab) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ms', 'Arab')).to.equal("12,345,678.9012");
		});

		it("in en-ai (en_AI) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ai')).to.equal("12,345,678.9012");
		});

		it("in gl-es (gl_ES) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('gl-es')).to.equal("12.345.678,9012");
		});

		it("in en-pr (en_PR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-pr')).to.equal("12,345,678.9012");
		});

		it("in ha-gh (ha_Latn_GH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ha-gh')).to.equal("12,345,678.9012");
		});

		it("in ne-in (ne_IN) => १२,३४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('ne-in')).to.equal("१२,३४५,६७८.९०१२");
		});

		it("in or-in (or_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('or-in')).to.equal("1,23,45,678.9012");
		});

		it("in khq-ml (khq_ML) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('khq-ml')).to.equal("12 345 678.9012");
		});

		it("in en-mg (en_MG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mg')).to.equal("12,345,678.9012");
		});

		it("in pt-tl (pt_TL) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-tl')).to.equal("12 345 678,9012");
		});

		it("in en-lc (en_LC) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-lc')).to.equal("12,345,678.9012");
		});

		it("in ta-sg (ta_SG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ta-sg')).to.equal("12,345,678.9012");
		});

		it("in jmc-tz (jmc_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('jmc-tz')).to.equal("12,345,678.9012");
		});

		it("in om-et (om_ET) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('om-et')).to.equal("12,345,678.9012");
		});

		it("in lv-lv (lv_LV) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('lv-lv')).to.equal("12 345 678,9012");
		});

		it("in es-us (es_US) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-us')).to.equal("12,345,678.9012");
		});

		it("in en-pt (en_PT) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-pt')).to.equal("12 345 678,9012");
		});

		it("in vai-lr (vai_Latn_LR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vai-lr', 'Latn')).to.equal("12,345,678.9012");
		});

		it("in to-to (to_TO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('to-to')).to.equal("12,345,678.9012");
		});

		it("in en-nl (en_NL) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-nl')).to.equal("12.345.678,9012");
		});

		it("in cgg-ug (cgg_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('cgg-ug')).to.equal("12,345,678.9012");
		});

		it("in ta (ta) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ta')).to.equal("1,23,45,678.9012");
		});

		it("in en-mh (en_MH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mh')).to.equal("12,345,678.9012");
		});

		it("in iu-ca (iu_Cans_CA) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('iu-ca', 'Cans')).to.equal("12,345,678.9012");
		});

		it("in zu-za (zu_ZA) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zu-za')).to.equal("12,345,678.9012");
		});

		it("in shi-ma (shi_Latn_MA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('shi-ma')).to.equal("12 345 678,9012");
		});

		it("in brx-in (brx_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('brx-in')).to.equal("1,23,45,678.9012");
		});

		it("in ar-km (ar_KM) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-km')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-al (en_AL) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-al')).to.equal("12 345 678,9012");
		});

		it("in te (te) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('te')).to.equal("12,345,678.9012");
		});

		it("in chr-us (chr_US) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('chr-us')).to.equal("12,345,678.9012");
		});

		it("in yo-bj (yo_BJ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('yo-bj')).to.equal("12,345,678.9012");
		});

		it("in fr-vu (fr_VU) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-vu')).to.equal("12 345 678,9012");
		});

		it("in pa (pa) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('pa')).to.equal("1,23,45,678.9012");
		});

		it("in tg (tg) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('tg')).to.equal("12,345,678.9012");
		});

		it("in ks (ks_Arab) => ۱٬۲۳٬۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('ks', 'Arab')).to.equal("۱٬۲۳٬۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in kea (kea) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('kea')).to.equal("12.345.678,9012");
		});

		it("in te-in (te_IN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('te-in')).to.equal("12,345,678.9012");
		});

		it("in th (th) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('th')).to.equal("12,345,678.9012");
		});

		it("in fr-re (fr_RE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-re')).to.equal("12 345 678,9012");
		});

		it("in ur-in (ur_IN) => ۱,۲۳,۴۵,۶۷۸.۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('ur-in')).to.equal("۱,۲۳,۴۵,۶۷۸.۹۰۱۲");
		});

		it("in yo-ng (yo_NG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('yo-ng')).to.equal("12,345,678.9012");
		});

		it("in ti (ti) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ti')).to.equal("12,345,678.9012");
		});

		it("in guz-ke (guz_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('guz-ke')).to.equal("12,345,678.9012");
		});

		it("in tk (tk) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('tk')).to.equal("12 345 678,9012");
		});

		it("in kl-gl (kl_GL) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('kl-gl')).to.equal("12.345.678,9012");
		});

		it("in ksf-cm (ksf_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ksf-cm')).to.equal("12 345 678,9012");
		});

		it("in mua-cm (mua_CM) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('mua-cm')).to.equal("12.345.678,9012");
		});

		it("in lag-tz (lag_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('lag-tz')).to.equal("12,345,678.9012");
		});

		it("in fr-tn (fr_TN) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-tn')).to.equal("12 345 678,9012");
		});

		it("in es-pa (es_PA) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-pa')).to.equal("12,345,678.9012");
		});

		it("in pl-pl (pl_PL) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pl-pl')).to.equal("12 345 678,9012");
		});

		it("in to (to) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('to')).to.equal("12,345,678.9012");
		});

		it("in hi-in (hi_IN) => १,२३,४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('hi-in')).to.equal("१,२३,४५,६७८.९०१२");
		});

		it("in dje-ne (dje_NE) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('dje-ne')).to.equal("12 345 678.9012");
		});

		it("in es-gq (es_GQ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-gq')).to.equal("12.345.678,9012");
		});

		it("in kok-in (kok_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kok-in')).to.equal("1,23,45,678.9012");
		});

		it("in pl (pl) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pl')).to.equal("12 345 678,9012");
		});

		it("in tr (tr) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('tr')).to.equal("12.345.678,9012");
		});

		it("in bem (bem) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bem')).to.equal("12,345,678.9012");
		});

		it("in ha (ha) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ha')).to.equal("12,345,678.9012");
		});

		it("in ckb (ckb) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ckb')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in lg (lg) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('lg')).to.equal("12,345,678.9012");
		});

		it("in fr-gn (fr_GN) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-gn')).to.equal("12 345 678,9012");
		});

		it("in en-pw (en_PW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-pw')).to.equal("12,345,678.9012");
		});

		it("in en-no (en_NO) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-no')).to.equal("12 345 678,9012");
		});

		it("in nyn-ug (nyn_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('nyn-ug')).to.equal("12,345,678.9012");
		});

		it("in sr-rs (sr_Latn_RS) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-rs', 'Latn')).to.equal("12.345.678,9012");
		});

		it("in pa (pa_Guru) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('pa')).to.equal("1,23,45,678.9012");
		});

		it("in he (he) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('he')).to.equal("12,345,678.9012");
		});

		it("in swc-cd (swc_CD) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('swc-cd')).to.equal("12.345.678,9012");
		});

		it("in ug (ug_Arab) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ug', 'Arab')).to.equal("12,345,678.9012");
		});

		it("in lu-cd (lu_CD) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('lu-cd')).to.equal("12.345.678,9012");
		});

		it("in mgo-cm (mgo_CM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mgo-cm')).to.equal("12,345,678.9012");
		});

		it("in sn-zw (sn_ZW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sn-zw')).to.equal("12,345,678.9012");
		});

		it("in en-bs (en_BS) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-bs')).to.equal("12,345,678.9012");
		});

		it("in ps-af (ps_AF) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('ps-af')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in da (da) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('da')).to.equal("12.345.678,9012");
		});

		it("in ms-sg (ms_Latn_SG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ms-sg')).to.equal("12,345,678.9012");
		});

		it("in ps (ps) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('ps')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in ln (ln) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ln')).to.equal("12.345.678,9012");
		});

		it("in pt (pt) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt')).to.equal("12.345.678,9012");
		});

		it("in iu (iu_Cans) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('iu', 'Cans')).to.equal("12,345,678.9012");
		});

		it("in hi (hi) => १,२३,४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('hi')).to.equal("१,२३,४५,६७८.९०१२");
		});

		it("in lo (lo) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('lo')).to.equal("12.345.678,9012");
		});

		it("in ebu (ebu) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ebu')).to.equal("12,345,678.9012");
		});

		it("in de (de) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('de')).to.equal("12.345.678,9012");
		});

		it("in gu-in (gu_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('gu-in')).to.equal("1,23,45,678.9012");
		});

		it("in seh (seh) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('seh')).to.equal("12.345.678,9012");
		});

		it("in en-cx (en_CX) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-cx')).to.equal("12,345,678.9012");
		});

		it("in en-zm (en_ZM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-zm')).to.equal("12,345,678.9012");
		});

		it("in tzm-ma (tzm_Latn_MA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('tzm-ma')).to.equal("12 345 678,9012");
		});

		it("in fr-ht (fr_HT) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ht')).to.equal("12 345 678,9012");
		});

		it("in fr-gp (fr_GP) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-gp')).to.equal("12 345 678,9012");
		});

		it("in lt (lt) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('lt')).to.equal("12 345 678,9012");
		});

		it("in lu (lu) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('lu')).to.equal("12.345.678,9012");
		});

		it("in ln-cd (ln_CD) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ln-cd')).to.equal("12.345.678,9012");
		});

		it("in vai (vai_Latn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vai', 'Latn')).to.equal("12,345,678.9012");
		});

		it("in el-gr (el_GR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('el-gr')).to.equal("12.345.678,9012");
		});

		it("in lv (lv) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('lv')).to.equal("12 345 678,9012");
		});

		it("in en-ke (en_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ke')).to.equal("12,345,678.9012");
		});

		it("in sbp (sbp) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sbp')).to.equal("12,345,678.9012");
		});

		it("in hr (hr) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('hr')).to.equal("12.345.678,9012");
		});

		it("in en-cy (en_CY) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-cy')).to.equal("12.345.678,9012");
		});

		it("in es-gt (es_GT) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-gt')).to.equal("12,345,678.9012");
		});

		it("in twq-ne (twq_NE) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('twq-ne')).to.equal("12 345 678.9012");
		});

		it("in zh-hk (zh_Hant_HK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-hk')).to.equal("12,345,678.9012");
		});

		it("in kln-ke (kln_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kln-ke')).to.equal("12,345,678.9012");
		});

		it("in fr-gq (fr_GQ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-gq')).to.equal("12 345 678,9012");
		});

		it("in chr (chr) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('chr')).to.equal("12,345,678.9012");
		});

		it("in hu (hu) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('hu')).to.equal("12 345 678,9012");
		});

		it("in es-uy (es_UY) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-uy')).to.equal("12.345.678,9012");
		});

		it("in fr-ca (fr_CA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ca')).to.equal("12 345 678,9012");
		});

		it("in en-nr (en_NR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-nr')).to.equal("12,345,678.9012");
		});

		it("in mer (mer) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mer')).to.equal("12,345,678.9012");
		});

		it("in shi (shi) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('shi')).to.equal("12 345 678,9012");
		});

		it("in es-pe (es_PE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-pe')).to.equal("12,345,678.9012");
		});

		it("in fr-sn (fr_SN) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-sn')).to.equal("12 345 678,9012");
		});

		it("in bez (bez) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bez')).to.equal("12,345,678.9012");
		});

		it("in sw-tz (sw_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sw-tz')).to.equal("12,345,678.9012");
		});

		it("in kkj (kkj) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('kkj')).to.equal("12.345.678,9012");
		});

		it("in hy (hy) => 12345678,9012", function() {
			expect((12345678.9012).stringFromNumber('hy')).to.equal("12345678,9012");
		});

		it("in kk-kz (kk_Cyrl_KZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('kk-kz')).to.equal("12 345 678,9012");
		});

		it("in en-cz (en_CZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-cz')).to.equal("12 345 678,9012");
		});

		it("in teo-ke (teo_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('teo-ke')).to.equal("12,345,678.9012");
		});

		it("in teo (teo) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('teo')).to.equal("12,345,678.9012");
		});

		it("in dz-bt (dz_BT) => ༡,༢༣,༤༥,༦༧༨.༩༠༡༢", function() {
			expect((12345678.9012).stringFromNumber('dz-bt')).to.equal("༡,༢༣,༤༥,༦༧༨.༩༠༡༢");
		});

		it("in ar-jo (ar_JO) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-jo')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in mer-ke (mer_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mer-ke')).to.equal("12,345,678.9012");
		});

		it("in khq (khq) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('khq')).to.equal("12 345 678.9012");
		});

		it("in ln-cf (ln_CF) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ln-cf')).to.equal("12.345.678,9012");
		});

		it("in nn-no (nn_NO) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nn-no')).to.equal("12 345 678,9012");
		});

		it("in en-mo (en_MO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mo')).to.equal("12,345,678.9012");
		});

		it("in ar-td (ar_TD) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-td')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in dz (dz) => ༡,༢༣,༤༥,༦༧༨.༩༠༡༢", function() {
			expect((12345678.9012).stringFromNumber('dz')).to.equal("༡,༢༣,༤༥,༦༧༨.༩༠༡༢");
		});

		it("in ses (ses) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('ses')).to.equal("12 345 678.9012");
		});

		it("in en-bw (en_BW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-bw')).to.equal("12,345,678.9012");
		});

		it("in en-as (en_AS) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-as')).to.equal("12,345,678.9012");
		});

		it("in ar-il (ar_IL) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-il')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in ms-bn (ms_Latn_BN) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ms-bn')).to.equal("12.345.678,9012");
		});

		it("in bo-cn (bo_CN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bo-cn')).to.equal("12,345,678.9012");
		});

		it("in nnh (nnh) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nnh')).to.equal("12.345.678,9012");
		});

		it("in teo-ug (teo_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('teo-ug')).to.equal("12,345,678.9012");
		});

		it("in hy-am (hy_AM) => 12345678,9012", function() {
			expect((12345678.9012).stringFromNumber('hy-am')).to.equal("12345678,9012");
		});

		it("in ln-cg (ln_CG) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ln-cg')).to.equal("12.345.678,9012");
		});

		it("in sr-ba (sr_Latn_BA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-ba', 'Latn')).to.equal("12.345.678,9012");
		});

		it("in en-mp (en_MP) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mp')).to.equal("12,345,678.9012");
		});

		it("in ksb-tz (ksb_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ksb-tz')).to.equal("12,345,678.9012");
		});

		it("in ar-sa (ar_SA) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-sa')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in ar-ly (ar_LY) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ar-ly')).to.equal("12.345.678,9012");
		});

		it("in en-at (en_AT) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-at')).to.equal("12.345.678,9012");
		});

		it("in so-ke (so_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('so-ke')).to.equal("12,345,678.9012");
		});

		it("in fr-cd (fr_CD) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-cd')).to.equal("12 345 678,9012");
		});

		it("in af-na (af_NA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('af-na')).to.equal("12 345 678,9012");
		});

		it("in en-nu (en_NU) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-nu')).to.equal("12,345,678.9012");
		});

		it("in es-ph (es_PH) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-ph')).to.equal("12.345.678,9012");
		});

		it("in en-ki (en_KI) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ki')).to.equal("12,345,678.9012");
		});

		it("in en-je (en_JE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-je')).to.equal("12,345,678.9012");
		});

		it("in lkt (lkt) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('lkt')).to.equal("12,345,678.9012");
		});

		it("in en-au (en_AU) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-au')).to.equal("12,345,678.9012");
		});

		it("in fa-ir (fa_IR) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('fa-ir')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in uz-uz (uz_Latn_UZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uz-uz', 'Latn')).to.equal("12 345 678,9012");
		});

		it("in ky (ky_Cyrl) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ky')).to.equal("12 345 678,9012");
		});

		it("in zh-cn (zh_Hans_CN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-cn')).to.equal("12,345,678.9012");
		});

		it("in ewo-cm (ewo_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ewo-cm')).to.equal("12 345 678,9012");
		});

		it("in fr-pf (fr_PF) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-pf')).to.equal("12 345 678,9012");
		});

		it("in ca-it (ca_IT) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ca-it')).to.equal("12.345.678,9012");
		});

		it("in en-bz (en_BZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-bz')).to.equal("12,345,678.9012");
		});

		it("in ar-kw (ar_KW) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-kw')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in pt-gw (pt_GW) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-gw')).to.equal("12 345 678,9012");
		});

		it("in fr-fr (fr_FR) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-fr')).to.equal("12 345 678,9012");
		});

		it("in am-et (am_ET) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('am-et')).to.equal("12,345,678.9012");
		});

		it("in en-vc (en_VC) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-vc')).to.equal("12,345,678.9012");
		});

		it("in fr-dj (fr_DJ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-dj')).to.equal("12 345 678,9012");
		});

		it("in fr-cf (fr_CF) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-cf')).to.equal("12 345 678,9012");
		});

		it("in es-sv (es_SV) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-sv')).to.equal("12,345,678.9012");
		});

		it("in en-ms (en_MS) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ms')).to.equal("12,345,678.9012");
		});

		it("in pt-st (pt_ST) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-st')).to.equal("12 345 678,9012");
		});

		it("in ar-sd (ar_SD) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-sd')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in luy-ke (luy_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('luy-ke')).to.equal("12,345,678.9012");
		});

		it("in swc (swc) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('swc')).to.equal("12.345.678,9012");
		});

		it("in de-li (de_LI) => 12'345'678.9012", function() {
			expect((12345678.9012).stringFromNumber('de-li')).to.equal("12'345'678.9012");
		});

		it("in fr-cg (fr_CG) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-cg')).to.equal("12 345 678,9012");
		});

		it("in zh-sg (zh_Hans_SG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-sg')).to.equal("12,345,678.9012");
		});

		it("in en-mt (en_MT) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mt')).to.equal("12,345,678.9012");
		});

		it("in ewo (ewo) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ewo')).to.equal("12 345 678,9012");
		});

		it("in af-za (af_ZA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('af-za')).to.equal("12 345 678,9012");
		});

		it("in om-ke (om_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('om-ke')).to.equal("12,345,678.9012");
		});

		it("in nl-sr (nl_SR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-sr')).to.equal("12.345.678,9012");
		});

		it("in es-es (es_ES) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-es')).to.equal("12.345.678,9012");
		});

		it("in es-do (es_DO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-do')).to.equal("12,345,678.9012");
		});

		it("in ar-iq (ar_IQ) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-iq')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in fr-ch (fr_CH) => 12'345'678.9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ch')).to.equal("12'345'678.9012");
		});

		it("in nnh-cm (nnh_CM) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nnh-cm')).to.equal("12.345.678,9012");
		});

		it("in es-419 (es_419) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-419')).to.equal("12,345,678.9012");
		});

		it("in en-mu (en_MU) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mu')).to.equal("12,345,678.9012");
		});

		it("in en-us-posix (en_US_POSIX) => 12345678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-us-posix')).to.equal("12345678.9012");
		});

		it("in yav-cm (yav_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('yav-cm')).to.equal("12 345 678,9012");
		});

		it("in luo-ke (luo_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('luo-ke')).to.equal("12,345,678.9012");
		});

		it("in dua-cm (dua_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('dua-cm')).to.equal("12 345 678,9012");
		});

		it("in et-ee (et_EE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('et-ee')).to.equal("12 345 678,9012");
		});

		it("in en-ie (en_IE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ie')).to.equal("12,345,678.9012");
		});

		it("in ak-gh (ak_GH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ak-gh')).to.equal("12,345,678.9012");
		});

		it("in rwk (rwk) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('rwk')).to.equal("12,345,678.9012");
		});

		it("in es-cl (es_CL) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-cl')).to.equal("12.345.678,9012");
		});

		it("in kea-cv (kea_CV) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('kea-cv')).to.equal("12.345.678,9012");
		});

		it("in fr-ci (fr_CI) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ci')).to.equal("12 345 678,9012");
		});

		it("in fr-be (fr_BE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-be')).to.equal("12.345.678,9012");
		});

		it("in en-nz (en_NZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-nz')).to.equal("12,345,678.9012");
		});

		it("in ky-kg (ky_Cyrl_KG) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ky-kg')).to.equal("12 345 678,9012");
		});

		it("in en-lr (en_LR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-lr')).to.equal("12,345,678.9012");
		});

		it("in en-kn (en_KN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-kn')).to.equal("12,345,678.9012");
		});

		it("in nb-sj (nb_SJ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nb-sj')).to.equal("12 345 678,9012");
		});

		it("in sg (sg) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sg')).to.equal("12.345.678,9012");
		});

		it("in sr-rs (sr_Cyrl_RS) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-rs')).to.equal("12.345.678,9012");
		});

		it("in ru-ru (ru_RU) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru-ru')).to.equal("12 345 678,9012");
		});

		it("in en-zw (en_ZW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-zw')).to.equal("12,345,678.9012");
		});

		it("in sv-ax (sv_AX) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sv-ax')).to.equal("12 345 678,9012");
		});

		it("in si (si) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('si')).to.equal("12,345,678.9012");
		});

		it("in ga-ie (ga_IE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ga-ie')).to.equal("12,345,678.9012");
		});

		it("in en-vg (en_VG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-vg')).to.equal("12,345,678.9012");
		});

		it("in sk (sk) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sk')).to.equal("12 345 678,9012");
		});

		it("in agq-cm (agq_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('agq-cm')).to.equal("12 345 678,9012");
		});

		it("in fr-bf (fr_BF) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-bf')).to.equal("12 345 678,9012");
		});

		it("in naq-na (naq_NA) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('naq-na')).to.equal("12,345,678.9012");
		});

		it("in sl (sl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sl')).to.equal("12.345.678,9012");
		});

		it("in en-mw (en_MW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-mw')).to.equal("12,345,678.9012");
		});

		it("in mr-in (mr_IN) => १२,३४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('mr-in')).to.equal("१२,३४५,६७८.९०१२");
		});

		it("in az (az_Latn) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('az')).to.equal("12.345.678,9012");
		});

		it("in en-ls (en_LS) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ls')).to.equal("12,345,678.9012");
		});

		it("in de-at (de_AT) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('de-at')).to.equal("12.345.678,9012");
		});

		it("in ka (ka) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ka')).to.equal("12 345 678,9012");
		});

		it("in sn (sn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sn')).to.equal("12,345,678.9012");
		});

		it("in sr-me (sr_Latn_ME) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-me', 'Latn')).to.equal("12.345.678,9012");
		});

		it("in fr-nc (fr_NC) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-nc')).to.equal("12 345 678,9012");
		});

		it("in so (so) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('so')).to.equal("12,345,678.9012");
		});

		it("in is-is (is_IS) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('is-is')).to.equal("12.345.678,9012");
		});

		it("in twq (twq) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('twq')).to.equal("12 345 678.9012");
		});

		it("in ig-ng (ig_NG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ig-ng')).to.equal("12,345,678.9012");
		});

		it("in sq (sq) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sq')).to.equal("12 345 678,9012");
		});

		it("in fo-fo (fo_FO) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('fo-fo')).to.equal("12.345.678,9012");
		});

		it("in sr (sr) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr')).to.equal("12.345.678,9012");
		});

		it("in tzm (tzm) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('tzm')).to.equal("12 345 678,9012");
		});

		it("in ga (ga) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ga')).to.equal("12,345,678.9012");
		});

		it("in om (om) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('om')).to.equal("12,345,678.9012");
		});

		it("in en-lt (en_LT) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-lt')).to.equal("12 345 678,9012");
		});

		it("in bas-cm (bas_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('bas-cm')).to.equal("12 345 678,9012");
		});

		it("in ki (ki) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ki')).to.equal("12,345,678.9012");
		});

		it("in nl-be (nl_BE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-be')).to.equal("12.345.678,9012");
		});

		it("in ar-qa (ar_QA) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-qa')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in sv (sv) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sv')).to.equal("12 345 678,9012");
		});

		it("in kk (kk) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('kk')).to.equal("12 345 678,9012");
		});

		it("in sw (sw) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sw')).to.equal("12,345,678.9012");
		});

		it("in es-co (es_CO) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-co')).to.equal("12.345.678,9012");
		});

		it("in az-az (az_Latn_AZ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('az-az')).to.equal("12.345.678,9012");
		});

		it("in rn-bi (rn_BI) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('rn-bi')).to.equal("12.345.678,9012");
		});

		it("in or (or) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('or')).to.equal("1,23,45,678.9012");
		});

		it("in kl (kl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('kl')).to.equal("12.345.678,9012");
		});

		it("in ca (ca) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ca')).to.equal("12.345.678,9012");
		});

		it("in en-vi (en_VI) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-vi')).to.equal("12,345,678.9012");
		});

		it("in km (km) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('km')).to.equal("12.345.678,9012");
		});

		it("in kn (kn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kn')).to.equal("12,345,678.9012");
		});

		it("in en-lu (en_LU) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-lu')).to.equal("12.345.678,9012");
		});

		it("in fr-sy (fr_SY) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-sy')).to.equal("12 345 678,9012");
		});

		it("in ar-tn (ar_TN) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ar-tn')).to.equal("12.345.678,9012");
		});

		it("in en-jm (en_JM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-jm')).to.equal("12,345,678.9012");
		});

		it("in fr-pm (fr_PM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-pm')).to.equal("12 345 678,9012");
		});

		it("in ko (ko) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ko')).to.equal("12,345,678.9012");
		});

		it("in fr-ne (fr_NE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ne')).to.equal("12 345 678,9012");
		});

		it("in fr-ma (fr_MA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ma')).to.equal("12 345 678,9012");
		});

		it("in gl (gl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('gl')).to.equal("12.345.678,9012");
		});

		it("in ru-md (ru_MD) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru-md')).to.equal("12 345 678,9012");
		});

		it("in saq-ke (saq_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('saq-ke')).to.equal("12,345,678.9012");
		});

		it("in ks (ks) => ۱٬۲۳٬۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('ks')).to.equal("۱٬۲۳٬۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in fr-cm (fr_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-cm')).to.equal("12 345 678,9012");
		});

		it("in gv-im (gv_IM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('gv-im')).to.equal("12,345,678.9012");
		});

		it("in fr-bi (fr_BI) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-bi')).to.equal("12 345 678,9012");
		});

		it("in en-lv (en_LV) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-lv')).to.equal("12 345 678,9012");
		});

		it("in ks-in (ks_Arab_IN) => ۱٬۲۳٬۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('ks-in', 'Arab')).to.equal("۱٬۲۳٬۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in es-ni (es_NI) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-ni')).to.equal("12,345,678.9012");
		});

		it("in en-gb (en_GB) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gb')).to.equal("12,345,678.9012");
		});

		it("in kw (kw) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kw')).to.equal("12,345,678.9012");
		});

		it("in nl-sx (nl_SX) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-sx')).to.equal("12.345.678,9012");
		});

		it("in dav-ke (dav_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('dav-ke')).to.equal("12,345,678.9012");
		});

		it("in tr-cy (tr_CY) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('tr-cy')).to.equal("12.345.678,9012");
		});

		it("in ky (ky) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ky')).to.equal("12 345 678,9012");
		});

		it("in en-ug (en_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ug')).to.equal("12,345,678.9012");
		});

		it("in tzm (tzm_Latn) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('tzm')).to.equal("12 345 678,9012");
		});

		it("in en-tc (en_TC) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-tc')).to.equal("12,345,678.9012");
		});

		it("in nus-sd (nus_SD) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('nus-sd')).to.equal("12,345,678.9012");
		});

		it("in ar-eg (ar_EG) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-eg')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in fr-bj (fr_BJ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-bj')).to.equal("12 345 678,9012");
		});

		it("in gu (gu) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('gu')).to.equal("1,23,45,678.9012");
		});

		it("in es-pr (es_PR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-pr')).to.equal("12,345,678.9012");
		});

		it("in fr-rw (fr_RW) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-rw')).to.equal("12 345 678,9012");
		});

		it("in sr-ba (sr_Cyrl_BA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-ba')).to.equal("12.345.678,9012");
		});

		it("in gv (gv) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('gv')).to.equal("12,345,678.9012");
		});

		it("in fr-mc (fr_MC) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-mc')).to.equal("12 345 678,9012");
		});

		it("in cs (cs) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('cs')).to.equal("12 345 678,9012");
		});

		it("in bez-tz (bez_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bez-tz')).to.equal("12,345,678.9012");
		});

		it("in es-cr (es_CR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-cr')).to.equal("12.345.678,9012");
		});

		it("in asa-tz (asa_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('asa-tz')).to.equal("12,345,678.9012");
		});

		it("in ar-eh (ar_EH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ar-eh')).to.equal("12,345,678.9012");
		});

		it("in ms-bn (ms_Arab_BN) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ms-bn', 'Arab')).to.equal("12.345.678,9012");
		});

		it("in mn (mn_Cyrl) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mn')).to.equal("12,345,678.9012");
		});

		it("in sbp-tz (sbp_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sbp-tz')).to.equal("12,345,678.9012");
		});

		it("in ha-ne (ha_Latn_NE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ha-ne')).to.equal("12,345,678.9012");
		});

		it("in lt-lt (lt_LT) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('lt-lt')).to.equal("12 345 678,9012");
		});

		it("in mfe (mfe) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('mfe')).to.equal("12 345 678.9012");
		});

		it("in en-gd (en_GD) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gd')).to.equal("12,345,678.9012");
		});

		it("in cy (cy) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('cy')).to.equal("12,345,678.9012");
		});

		it("in ca-fr (ca_FR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ca-fr')).to.equal("12.345.678,9012");
		});

		it("in es-bo (es_BO) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-bo')).to.equal("12.345.678,9012");
		});

		it("in fr-bl (fr_BL) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-bl')).to.equal("12 345 678,9012");
		});

		it("in bn-in (bn_IN) => ১,২৩,৪৫,৬৭৮.৯০১২", function() {
			expect((12345678.9012).stringFromNumber('bn-in')).to.equal("১,২৩,৪৫,৬৭৮.৯০১২");
		});

		it("in uz-uz (uz_Cyrl_UZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uz-uz')).to.equal("12 345 678,9012");
		});

		it("in az (az_Cyrl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('az', 'Cyrl')).to.equal("12.345.678,9012");
		});

		it("in en-im (en_IM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-im')).to.equal("12,345,678.9012");
		});

		it("in sw-ke (sw_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sw-ke')).to.equal("12,345,678.9012");
		});

		it("in en-sb (en_SB) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sb')).to.equal("12,345,678.9012");
		});

		it("in ur-pk (ur_PK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ur-pk')).to.equal("12,345,678.9012");
		});

		it("in pa (pa_Arab) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('pa', 'Arab')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in haw-us (haw_US) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('haw-us')).to.equal("12,345,678.9012");
		});

		it("in ar-so (ar_SO) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-so')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-in (en_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-in')).to.equal("1,23,45,678.9012");
		});

		it("in ha (ha_Latn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ha')).to.equal("12,345,678.9012");
		});

		it("in fil (fil) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('fil')).to.equal("12,345,678.9012");
		});

		it("in fr-mf (fr_MF) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-mf')).to.equal("12 345 678,9012");
		});

		it("in en-ws (en_WS) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ws')).to.equal("12,345,678.9012");
		});

		it("in es-cu (es_CU) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-cu')).to.equal("12,345,678.9012");
		});

		it("in ja-jp (ja_JP) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ja-jp')).to.equal("12,345,678.9012");
		});

		it("in en-sc (en_SC) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sc')).to.equal("12,345,678.9012");
		});

		it("in en-io (en_IO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-io')).to.equal("12,345,678.9012");
		});

		it("in pt-pt (pt_PT) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-pt')).to.equal("12 345 678,9012");
		});

		it("in en-hk (en_HK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-hk')).to.equal("12,345,678.9012");
		});

		it("in en-gg (en_GG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gg')).to.equal("12,345,678.9012");
		});

		it("in fr-mg (fr_MG) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-mg')).to.equal("12 345 678,9012");
		});

		it("in de-lu (de_LU) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('de-lu')).to.equal("12.345.678,9012");
		});

		it("in ms-my (ms_Latn_MY) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ms-my')).to.equal("12,345,678.9012");
		});

		it("in tg (tg_Cyrl) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('tg')).to.equal("12,345,678.9012");
		});

		it("in en-sd (en_SD) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sd')).to.equal("12,345,678.9012");
		});

		it("in shi (shi_Tfng) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('shi', 'Tfng')).to.equal("12 345 678,9012");
		});

		it("in ln-ao (ln_AO) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ln-ao')).to.equal("12.345.678,9012");
		});

		it("in ug-cn (ug_Arab_CN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ug-cn', 'Arab')).to.equal("12,345,678.9012");
		});

		it("in as-in (as_IN) => ১,২৩,৪৫,৬৭৮.৯০১২", function() {
			expect((12345678.9012).stringFromNumber('as-in')).to.equal("১,২৩,৪৫,৬৭৮.৯০১২");
		});

		it("in en-gh (en_GH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gh')).to.equal("12,345,678.9012");
		});

		it("in ro-ro (ro_RO) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ro-ro')).to.equal("12.345.678,9012");
		});

		it("in jgo-cm (jgo_CM) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('jgo-cm')).to.equal("12.345.678,9012");
		});

		it("in dua (dua) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('dua')).to.equal("12 345 678,9012");
		});

		it("in en-um (en_UM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-um')).to.equal("12,345,678.9012");
		});

		it("in en-se (en_SE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-se')).to.equal("12 345 678,9012");
		});

		it("in kn-in (kn_IN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kn-in')).to.equal("12,345,678.9012");
		});

		it("in en-ky (en_KY) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ky')).to.equal("12,345,678.9012");
		});

		it("in vun-tz (vun_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vun-tz')).to.equal("12,345,678.9012");
		});

		it("in kln (kln) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kln')).to.equal("12,345,678.9012");
		});

		it("in en-gi (en_GI) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gi')).to.equal("12,345,678.9012");
		});

		it("in ca-es (ca_ES) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ca-es')).to.equal("12.345.678,9012");
		});

		it("in rof (rof) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('rof')).to.equal("12,345,678.9012");
		});

		it("in pt-cv (pt_CV) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-cv')).to.equal("12 345 678,9012");
		});

		it("in kok (kok) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kok')).to.equal("1,23,45,678.9012");
		});

		it("in pt-br (pt_BR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-br')).to.equal("12.345.678,9012");
		});

		it("in ar-dj (ar_DJ) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-dj')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in zh (zh) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh')).to.equal("12,345,678.9012");
		});

		it("in fi-fi (fi_FI) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fi-fi')).to.equal("12 345 678,9012");
		});

		it("in tg-tj (tg_Cyrl_TJ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('tg-tj')).to.equal("12,345,678.9012");
		});

		it("in es-py (es_PY) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-py')).to.equal("12.345.678,9012");
		});

		it("in ar-ss (ar_SS) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-ss')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in mua (mua) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('mua')).to.equal("12.345.678,9012");
		});

		it("in sr-me (sr_Cyrl_ME) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-me')).to.equal("12.345.678,9012");
		});

		it("in vai-lr (vai_Vaii_LR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vai-lr')).to.equal("12,345,678.9012");
		});

		it("in en-001 (en_001) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-001')).to.equal("12,345,678.9012");
		});

		it("in xog-ug (xog_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('xog-ug')).to.equal("12,345,678.9012");
		});

		it("in en-tk (en_TK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-tk')).to.equal("12,345,678.9012");
		});

		it("in si-lk (si_LK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('si-lk')).to.equal("12,345,678.9012");
		});

		it("in en-sg (en_SG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sg')).to.equal("12,345,678.9012");
		});

		it("in nl-nl (nl_NL) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-nl')).to.equal("12.345.678,9012");
		});

		it("in vi (vi) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('vi')).to.equal("12.345.678,9012");
		});

		it("in sv-se (sv_SE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sv-se')).to.equal("12 345 678,9012");
		});

		it("in pt-ao (pt_AO) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-ao')).to.equal("12 345 678,9012");
		});

		it("in fr-dz (fr_DZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-dz')).to.equal("12 345 678,9012");
		});

		it("in ca-ad (ca_AD) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ca-ad')).to.equal("12.345.678,9012");
		});

		it("in xog (xog) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('xog')).to.equal("12,345,678.9012");
		});

		it("in en-is (en_IS) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-is')).to.equal("12.345.678,9012");
		});

		it("in nb (nb) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nb')).to.equal("12 345 678,9012");
		});

		it("in seh-mz (seh_MZ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('seh-mz')).to.equal("12.345.678,9012");
		});

		it("in es-ar (es_AR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-ar')).to.equal("12.345.678,9012");
		});

		it("in sk-sk (sk_SK) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sk-sk')).to.equal("12 345 678,9012");
		});

		it("in en-sh (en_SH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sh')).to.equal("12,345,678.9012");
		});

		it("in ti-er (ti_ER) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ti-er')).to.equal("12,345,678.9012");
		});

		it("in nd (nd) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('nd')).to.equal("12,345,678.9012");
		});

		it("in az-az (az_Cyrl_AZ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('az-az', 'Cyrl')).to.equal("12.345.678,9012");
		});

		it("in zu (zu) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zu')).to.equal("12,345,678.9012");
		});

		it("in ne (ne) => १२,३४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('ne')).to.equal("१२,३४५,६७८.९०१२");
		});

		it("in nd-zw (nd_ZW) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('nd-zw')).to.equal("12,345,678.9012");
		});

		it("in el-cy (el_CY) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('el-cy')).to.equal("12.345.678,9012");
		});

		it("in en-it (en_IT) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-it')).to.equal("12.345.678,9012");
		});

		it("in nl-bq (nl_BQ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-bq')).to.equal("12.345.678,9012");
		});

		it("in da-gl (da_GL) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('da-gl')).to.equal("12.345.678,9012");
		});

		it("in ja (ja) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ja')).to.equal("12,345,678.9012");
		});

		it("in rm (rm) => 12’345’678.9012", function() {
			expect((12345678.9012).stringFromNumber('rm')).to.equal("12’345’678.9012");
		});

		it("in fr-ml (fr_ML) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ml')).to.equal("12 345 678,9012");
		});

		it("in rn (rn) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('rn')).to.equal("12.345.678,9012");
		});

		it("in en-vu (en_VU) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-vu')).to.equal("12,345,678.9012");
		});

		it("in rof-tz (rof_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('rof-tz')).to.equal("12,345,678.9012");
		});

		it("in ro (ro) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ro')).to.equal("12.345.678,9012");
		});

		it("in ebu-ke (ebu_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ebu-ke')).to.equal("12,345,678.9012");
		});

		it("in ru-kg (ru_KG) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru-kg')).to.equal("12 345 678,9012");
		});

		it("in en-si (en_SI) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-si')).to.equal("12.345.678,9012");
		});

		it("in sg-cf (sg_CF) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sg-cf')).to.equal("12.345.678,9012");
		});

		it("in mfe-mu (mfe_MU) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('mfe-mu')).to.equal("12 345 678.9012");
		});

		it("in nl (nl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl')).to.equal("12.345.678,9012");
		});

		it("in brx (brx) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('brx')).to.equal("1,23,45,678.9012");
		});

		it("in bs (bs_Latn) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('bs')).to.equal("12.345.678,9012");
		});

		it("in fa (fa) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('fa')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in zgh-ma (zgh_MA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('zgh-ma')).to.equal("12 345 678,9012");
		});

		it("in en-gm (en_GM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gm')).to.equal("12,345,678.9012");
		});

		it("in shi (shi_Latn) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('shi')).to.equal("12 345 678,9012");
		});

		it("in en-fi (en_FI) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-fi')).to.equal("12 345 678,9012");
		});

		it("in nn (nn) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nn')).to.equal("12 345 678,9012");
		});

		it("in en-ee (en_EE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-ee')).to.equal("12 345 678,9012");
		});

		it("in ru (ru) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru')).to.equal("12 345 678,9012");
		});

		it("in kam-ke (kam_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kam-ke')).to.equal("12,345,678.9012");
		});

		it("in vai (vai_Vaii) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vai')).to.equal("12,345,678.9012");
		});

		it("in ar-er (ar_ER) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-er')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in ti-et (ti_ET) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ti-et')).to.equal("12,345,678.9012");
		});

		it("in rw (rw) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('rw')).to.equal("12.345.678,9012");
		});

		it("in ff (ff) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ff')).to.equal("12 345 678,9012");
		});

		it("in luo (luo) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('luo')).to.equal("12,345,678.9012");
		});

		it("in fa-af (fa_AF) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('fa-af')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in ha-ng (ha_Latn_NG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ha-ng')).to.equal("12,345,678.9012");
		});

		it("in nl-cw (nl_CW) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-cw')).to.equal("12.345.678,9012");
		});

		it("in en-hr (en_HR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-hr')).to.equal("12.345.678,9012");
		});

		it("in en-fj (en_FJ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-fj')).to.equal("12,345,678.9012");
		});

		it("in fi (fi) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fi')).to.equal("12 345 678,9012");
		});

		it("in pt-mo (pt_MO) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-mo')).to.equal("12 345 678,9012");
		});

		it("in be (be) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('be')).to.equal("12 345 678,9012");
		});

		it("in en-us (en_US) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-us')).to.equal("12,345,678.9012");
		});

		it("in en-to (en_TO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-to')).to.equal("12,345,678.9012");
		});

		it("in en-sk (en_SK) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-sk')).to.equal("12 345 678,9012");
		});

		it("in bg (bg) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('bg')).to.equal("12 345 678,9012");
		});

		it("in ru-by (ru_BY) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru-by')).to.equal("12 345 678,9012");
		});

		it("in it-it (it_IT) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('it-it')).to.equal("12.345.678,9012");
		});

		it("in ml-in (ml_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ml-in')).to.equal("1,23,45,678.9012");
		});

		it("in gsw-ch (gsw_CH) => 12’345’678.9012", function() {
			expect((12345678.9012).stringFromNumber('gsw-ch')).to.equal("12’345’678.9012");
		});

		it("in fo (fo) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('fo')).to.equal("12.345.678,9012");
		});

		it("in sv-fi (sv_FI) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sv-fi')).to.equal("12 345 678,9012");
		});

		it("in en-fk (en_FK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-fk')).to.equal("12,345,678.9012");
		});

		it("in nus (nus) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('nus')).to.equal("12,345,678.9012");
		});

		it("in ta-lk (ta_LK) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ta-lk')).to.equal("1,23,45,678.9012");
		});

		it("in vun (vun) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vun')).to.equal("12,345,678.9012");
		});

		it("in sr (sr_Latn) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr', 'Latn')).to.equal("12.345.678,9012");
		});

		it("in fr (fr) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr')).to.equal("12 345 678,9012");
		});

		it("in en-sl (en_SL) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sl')).to.equal("12,345,678.9012");
		});

		it("in bm (bm) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bm')).to.equal("12,345,678.9012");
		});

		it("in ar-bh (ar_BH) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-bh')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in guz (guz) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('guz')).to.equal("12,345,678.9012");
		});

		it("in bn (bn) => ১,২৩,৪৫,৬৭৮.৯০১২", function() {
			expect((12345678.9012).stringFromNumber('bn')).to.equal("১,২৩,৪৫,৬৭৮.৯০১২");
		});

		it("in bo (bo) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bo')).to.equal("12,345,678.9012");
		});

		it("in ar-sy (ar_SY) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-sy')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in lo-la (lo_LA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('lo-la')).to.equal("12.345.678,9012");
		});

		it("in ne-np (ne_NP) => १२,३४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('ne-np')).to.equal("१२,३४५,६७८.९०१२");
		});

		it("in uz (uz_Latn) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uz', 'Latn')).to.equal("12 345 678,9012");
		});

		it("in be-by (be_BY) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('be-by')).to.equal("12 345 678,9012");
		});

		it("in es-ic (es_IC) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-ic')).to.equal("12.345.678,9012");
		});

		it("in sr-xk (sr_Latn_XK) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-xk', 'Latn')).to.equal("12.345.678,9012");
		});

		it("in ar-ma (ar_MA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ar-ma')).to.equal("12.345.678,9012");
		});

		it("in pa-in (pa_Guru_IN) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('pa-in')).to.equal("1,23,45,678.9012");
		});

		it("in br (br) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('br')).to.equal("12 345 678,9012");
		});

		it("in luy (luy) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('luy')).to.equal("12,345,678.9012");
		});

		it("in kde-tz (kde_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kde-tz')).to.equal("12,345,678.9012");
		});

		it("in bs (bs) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('bs')).to.equal("12.345.678,9012");
		});

		it("in hu-hu (hu_HU) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('hu-hu')).to.equal("12 345 678,9012");
		});

		it("in ar-ae (ar_AE) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-ae')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-hu (en_HU) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-hu')).to.equal("12 345 678,9012");
		});

		it("in zh (zh_Hans) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh', 'Hans')).to.equal("12,345,678.9012");
		});

		it("in en-fm (en_FM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-fm')).to.equal("12,345,678.9012");
		});

		it("in sq-al (sq_AL) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sq-al')).to.equal("12 345 678,9012");
		});

		it("in ko-kp (ko_KP) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ko-kp')).to.equal("12,345,678.9012");
		});

		it("in en-150 (en_150) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-150')).to.equal("12.345.678,9012");
		});

		it("in en-de (en_DE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-de')).to.equal("12.345.678,9012");
		});

		it("in fr-mq (fr_MQ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-mq')).to.equal("12 345 678,9012");
		});

		it("in en-ca (en_CA) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ca')).to.equal("12,345,678.9012");
		});

		it("in en-tr (en_TR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-tr')).to.equal("12.345.678,9012");
		});

		it("in ro-md (ro_MD) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ro-md')).to.equal("12.345.678,9012");
		});

		it("in es-ve (es_VE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es-ve')).to.equal("12.345.678,9012");
		});

		it("in fr-wf (fr_WF) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-wf')).to.equal("12 345 678,9012");
		});

		it("in mt-mt (mt_MT) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mt-mt')).to.equal("12,345,678.9012");
		});

		it("in kab (kab) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('kab')).to.equal("12 345 678,9012");
		});

		it("in nmg-cm (nmg_CM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nmg-cm')).to.equal("12 345 678,9012");
		});

		it("in ru-ua (ru_UA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ru-ua')).to.equal("12 345 678,9012");
		});

		it("in fr-mr (fr_MR) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-mr')).to.equal("12 345 678,9012");
		});

		it("in tk-tm (tk_Latn_TM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('tk-tm')).to.equal("12 345 678,9012");
		});

		it("in zh-mo (zh_Hans_MO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-mo', 'Hans')).to.equal("12,345,678.9012");
		});

		it("in mn-mn (mn_Cyrl_MN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mn-mn')).to.equal("12,345,678.9012");
		});

		it("in bs (bs_Cyrl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('bs', 'Cyrl')).to.equal("12.345.678,9012");
		});

		it("in sw-ug (sw_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('sw-ug')).to.equal("12,345,678.9012");
		});

		it("in ko-kr (ko_KR) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ko-kr')).to.equal("12,345,678.9012");
		});

		it("in en-dg (en_DG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-dg')).to.equal("12,345,678.9012");
		});

		it("in bo-in (bo_IN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bo-in')).to.equal("12,345,678.9012");
		});

		it("in en-cc (en_CC) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-cc')).to.equal("12,345,678.9012");
		});

		it("in shi-ma (shi_Tfng_MA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('shi-ma', 'Tfng')).to.equal("12 345 678,9012");
		});

		it("in lag (lag) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('lag')).to.equal("12,345,678.9012");
		});

		it("in it-sm (it_SM) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('it-sm')).to.equal("12.345.678,9012");
		});

		it("in en-tt (en_TT) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-tt')).to.equal("12,345,678.9012");
		});

		it("in ms-my (ms_Arab_MY) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ms-my', 'Arab')).to.equal("12,345,678.9012");
		});

		it("in sq-mk (sq_MK) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sq-mk')).to.equal("12 345 678,9012");
		});

		it("in ms (ms_Latn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ms')).to.equal("12,345,678.9012");
		});

		it("in bem-zm (bem_ZM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bem-zm')).to.equal("12,345,678.9012");
		});

		it("in kde (kde) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kde')).to.equal("12,345,678.9012");
		});

		it("in ar-om (ar_OM) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-om')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in cgg (cgg) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('cgg')).to.equal("12,345,678.9012");
		});

		it("in bas (bas) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('bas')).to.equal("12 345 678,9012");
		});

		it("in kam (kam) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('kam')).to.equal("12,345,678.9012");
		});

		it("in zh (zh_Hant) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh', 'Hant')).to.equal("12,345,678.9012");
		});

		it("in es-mx (es_MX) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('es-mx')).to.equal("12,345,678.9012");
		});

		it("in en-gu (en_GU) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gu')).to.equal("12,345,678.9012");
		});

		it("in fr-mu (fr_MU) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-mu')).to.equal("12 345 678,9012");
		});

		it("in fr-km (fr_KM) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-km')).to.equal("12 345 678,9012");
		});

		it("in ar-lb (ar_LB) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-lb')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-ba (en_BA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-ba')).to.equal("12.345.678,9012");
		});

		it("in en-tv (en_TV) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-tv')).to.equal("12,345,678.9012");
		});

		it("in sr (sr_Cyrl) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr')).to.equal("12.345.678,9012");
		});

		it("in dje (dje) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('dje')).to.equal("12 345 678.9012");
		});

		it("in kab-dz (kab_DZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('kab-dz')).to.equal("12 345 678,9012");
		});

		it("in fil-ph (fil_PH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('fil-ph')).to.equal("12,345,678.9012");
		});

		it("in vai (vai) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('vai')).to.equal("12,345,678.9012");
		});

		it("in hr-hr (hr_HR) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('hr-hr')).to.equal("12.345.678,9012");
		});

		it("in bs-ba (bs_Latn_BA) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('bs-ba')).to.equal("12.345.678,9012");
		});

		it("in nl-aw (nl_AW) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('nl-aw')).to.equal("12.345.678,9012");
		});

		it("in dav (dav) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('dav')).to.equal("12,345,678.9012");
		});

		it("in so-so (so_SO) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('so-so')).to.equal("12,345,678.9012");
		});

		it("in ar-ps (ar_PS) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-ps')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in en-fr (en_FR) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-fr')).to.equal("12 345 678,9012");
		});

		it("in uz (uz_Cyrl) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uz')).to.equal("12 345 678,9012");
		});

		it("in ff-sn (ff_SN) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ff-sn')).to.equal("12 345 678,9012");
		});

		it("in en-bb (en_BB) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-bb')).to.equal("12,345,678.9012");
		});

		it("in ki-ke (ki_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ki-ke')).to.equal("12,345,678.9012");
		});

		it("in naq (naq) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('naq')).to.equal("12,345,678.9012");
		});

		it("in en-ss (en_SS) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ss')).to.equal("12,345,678.9012");
		});

		it("in mg-mg (mg_MG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mg-mg')).to.equal("12,345,678.9012");
		});

		it("in mas-ke (mas_KE) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mas-ke')).to.equal("12,345,678.9012");
		});

		it("in en-ro (en_RO) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-ro')).to.equal("12.345.678,9012");
		});

		it("in en-pg (en_PG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-pg')).to.equal("12,345,678.9012");
		});

		it("in mgh (mgh) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('mgh')).to.equal("12.345.678,9012");
		});

		it("in dyo-sn (dyo_SN) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('dyo-sn')).to.equal("12 345 678,9012");
		});

		it("in mas (mas) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mas')).to.equal("12,345,678.9012");
		});

		it("in agq (agq) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('agq')).to.equal("12 345 678,9012");
		});

		it("in bn-bd (bn_BD) => ১,২৩,৪৫,৬৭৮.৯০১২", function() {
			expect((12345678.9012).stringFromNumber('bn-bd')).to.equal("১,২৩,৪৫,৬৭৮.৯০১২");
		});

		it("in haw (haw) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('haw')).to.equal("12,345,678.9012");
		});

		it("in nb-no (nb_NO) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nb-no')).to.equal("12 345 678,9012");
		});

		it("in da-dk (da_DK) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('da-dk')).to.equal("12.345.678,9012");
		});

		it("in en-dk (en_DK) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-dk')).to.equal("12.345.678,9012");
		});

		it("in saq (saq) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('saq')).to.equal("12,345,678.9012");
		});

		it("in ug (ug) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ug')).to.equal("12,345,678.9012");
		});

		it("in cy-gb (cy_GB) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('cy-gb')).to.equal("12,345,678.9012");
		});

		it("in fr-yt (fr_YT) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-yt')).to.equal("12 345 678,9012");
		});

		it("in jmc (jmc) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('jmc')).to.equal("12,345,678.9012");
		});

		it("in ses-ml (ses_ML) => 12 345 678.9012", function() {
			expect((12345678.9012).stringFromNumber('ses-ml')).to.equal("12 345 678.9012");
		});

		it("in en-ph (en_PH) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ph')).to.equal("12,345,678.9012");
		});

		it("in de-de (de_DE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('de-de')).to.equal("12.345.678,9012");
		});

		it("in ar-ye (ar_YE) => ١٢٬٣٤٥٬٦٧٨٫٩٠١٢", function() {
			expect((12345678.9012).stringFromNumber('ar-ye')).to.equal("١٢٬٣٤٥٬٦٧٨٫٩٠١٢");
		});

		it("in bm-ml (bm_ML) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('bm-ml')).to.equal("12,345,678.9012");
		});

		it("in yo (yo) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('yo')).to.equal("12,345,678.9012");
		});

		it("in lkt-us (lkt_US) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('lkt-us')).to.equal("12,345,678.9012");
		});

		it("in uz-af (uz_Arab_AF) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('uz-af', 'Arab')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in jgo (jgo) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('jgo')).to.equal("12.345.678,9012");
		});

		it("in uk (uk) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uk')).to.equal("12 345 678,9012");
		});

		it("in sl-si (sl_SI) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sl-si')).to.equal("12.345.678,9012");
		});

		it("in en-ch (en_CH) => 12'345'678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ch')).to.equal("12'345'678.9012");
		});

		it("in asa (asa) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('asa')).to.equal("12,345,678.9012");
		});

		it("in lg-ug (lg_UG) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('lg-ug')).to.equal("12,345,678.9012");
		});

		it("in mgo (mgo) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mgo')).to.equal("12,345,678.9012");
		});

		it("in id-id (id_ID) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('id-id')).to.equal("12.345.678,9012");
		});

		it("in en-na (en_NA) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-na')).to.equal("12,345,678.9012");
		});

		it("in en-gy (en_GY) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-gy')).to.equal("12,345,678.9012");
		});

		it("in zgh (zgh) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('zgh')).to.equal("12 345 678,9012");
		});

		it("in pt-mz (pt_MZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('pt-mz')).to.equal("12 345 678,9012");
		});

		it("in fr-lu (fr_LU) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-lu')).to.equal("12.345.678,9012");
		});

		it("in kk (kk_Cyrl) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('kk')).to.equal("12 345 678,9012");
		});

		it("in mas-tz (mas_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mas-tz')).to.equal("12,345,678.9012");
		});

		it("in ur (ur) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ur')).to.equal("12,345,678.9012");
		});

		it("in en-dm (en_DM) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-dm')).to.equal("12,345,678.9012");
		});

		it("in ta-my (ta_MY) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ta-my')).to.equal("12,345,678.9012");
		});

		it("in en-be (en_BE) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-be')).to.equal("12.345.678,9012");
		});

		it("in mg (mg) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mg')).to.equal("12,345,678.9012");
		});

		it("in fr-ga (fr_GA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-ga')).to.equal("12 345 678,9012");
		});

		it("in ka-ge (ka_GE) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ka-ge')).to.equal("12 345 678,9012");
		});

		it("in nmg (nmg) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('nmg')).to.equal("12 345 678,9012");
		});

		it("in en-tz (en_TZ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-tz')).to.equal("12,345,678.9012");
		});

		it("in eu-es (eu_ES) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('eu-es')).to.equal("12.345.678,9012");
		});

		it("in ar-dz (ar_DZ) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('ar-dz')).to.equal("12.345.678,9012");
		});

		it("in id (id) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('id')).to.equal("12.345.678,9012");
		});

		it("in so-dj (so_DJ) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('so-dj')).to.equal("12,345,678.9012");
		});

		it("in yav (yav) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('yav')).to.equal("12 345 678,9012");
		});

		it("in mk (mk) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('mk')).to.equal("12.345.678,9012");
		});

		it("in pa-pk (pa_Arab_PK) => ۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲", function() {
			expect((12345678.9012).stringFromNumber('pa-pk', 'Arab')).to.equal("۱۲٬۳۴۵٬۶۷۸٫۹۰۱۲");
		});

		it("in ml (ml) => 1,23,45,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ml')).to.equal("1,23,45,678.9012");
		});

		it("in en-er (en_ER) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-er')).to.equal("12,345,678.9012");
		});

		it("in ig (ig) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ig')).to.equal("12,345,678.9012");
		});

		it("in mn (mn) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mn')).to.equal("12,345,678.9012");
		});

		it("in ksb (ksb) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ksb')).to.equal("12,345,678.9012");
		});

		it("in uz (uz) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uz')).to.equal("12 345 678,9012");
		});

		it("in vi-vn (vi_VN) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('vi-vn')).to.equal("12.345.678,9012");
		});

		it("in ii (ii) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ii')).to.equal("12,345,678.9012");
		});

		it("in en-pk (en_PK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-pk')).to.equal("12,345,678.9012");
		});

		it("in ee (ee) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ee')).to.equal("12,345,678.9012");
		});

		it("in mr (mr) => १२,३४५,६७८.९०१२", function() {
			expect((12345678.9012).stringFromNumber('mr')).to.equal("१२,३४५,६७८.९०१२");
		});

		it("in ms (ms) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ms')).to.equal("12,345,678.9012");
		});

		it("in en-es (en_ES) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-es')).to.equal("12.345.678,9012");
		});

		it("in sq-xk (sq_XK) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('sq-xk')).to.equal("12 345 678,9012");
		});

		it("in it-ch (it_CH) => 12'345'678.9012", function() {
			expect((12345678.9012).stringFromNumber('it-ch')).to.equal("12'345'678.9012");
		});

		it("in mt (mt) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('mt')).to.equal("12,345,678.9012");
		});

		it("in en-ck (en_CK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-ck')).to.equal("12,345,678.9012");
		});

		it("in br-fr (br_FR) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('br-fr')).to.equal("12 345 678,9012");
		});

		it("in sr-xk (sr_Cyrl_XK) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('sr-xk')).to.equal("12.345.678,9012");
		});

		it("in ksf (ksf) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('ksf')).to.equal("12 345 678,9012");
		});

		it("in en-sx (en_SX) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en-sx')).to.equal("12,345,678.9012");
		});

		it("in bg-bg (bg_BG) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('bg-bg')).to.equal("12 345 678,9012");
		});

		it("in en-pl (en_PL) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-pl')).to.equal("12 345 678,9012");
		});

		it("in af (af) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('af')).to.equal("12 345 678,9012");
		});

		it("in el (el) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('el')).to.equal("12.345.678,9012");
		});

		it("in cs-cz (cs_CZ) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('cs-cz')).to.equal("12 345 678,9012");
		});

		it("in fr-td (fr_TD) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('fr-td')).to.equal("12 345 678,9012");
		});

		it("in zh-hk (zh_Hans_HK) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('zh-hk', 'Hans')).to.equal("12,345,678.9012");
		});

		it("in is (is) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('is')).to.equal("12.345.678,9012");
		});

		it("in my (my) => ၁၂,၃၄၅,၆၇၈.၉၀၁၂", function() {
			expect((12345678.9012).stringFromNumber('my')).to.equal("၁၂,၃၄၅,၆၇၈.၉၀၁၂");
		});

		it("in en (en) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('en')).to.equal("12,345,678.9012");
		});

		it("in it (it) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('it')).to.equal("12.345.678,9012");
		});

		it("in ii-cn (ii_CN) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ii-cn')).to.equal("12,345,678.9012");
		});

		it("in eo (eo) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('eo')).to.equal("12 345 678,9012");
		});

		it("in iu (iu) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('iu')).to.equal("12,345,678.9012");
		});

		it("in en-za (en_ZA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-za')).to.equal("12 345 678,9012");
		});

		it("in en-ad (en_AD) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-ad')).to.equal("12.345.678,9012");
		});

		it("in ak (ak) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('ak')).to.equal("12,345,678.9012");
		});

		it("in en-ru (en_RU) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('en-ru')).to.equal("12 345 678,9012");
		});

		it("in kkj-cm (kkj_CM) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('kkj-cm')).to.equal("12.345.678,9012");
		});

		it("in am (am) => 12,345,678.9012", function() {
			expect((12345678.9012).stringFromNumber('am')).to.equal("12,345,678.9012");
		});

		it("in es (es) => 12.345.678,9012", function() {
			expect((12345678.9012).stringFromNumber('es')).to.equal("12.345.678,9012");
		});

		it("in et (et) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('et')).to.equal("12 345 678,9012");
		});

		it("in uk-ua (uk_UA) => 12 345 678,9012", function() {
			expect((12345678.9012).stringFromNumber('uk-ua')).to.equal("12 345 678,9012");
		});

	});
});