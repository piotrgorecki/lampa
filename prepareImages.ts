import fs from "fs";
import https from "https";
import sharp from "sharp";

const FILES = [
    "https://www.ikea.com/pl/pl/images/products/holmoe-floor-lamp__0529949_PE646443_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/holmoe-floor-lamp__0880288_PE611364_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp__0663863_PE712536_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp__0879908_PE714870_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp__0879910_PE714871_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/not-floor-uplighter-reading-lamp__0606879_PE682600_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/not-floor-uplighter-reading-lamp__0880213_PE611339_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-led-floor-read-lamp-black__0751183_PE746947_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-led-floor-read-lamp-black__0751182_PE746948_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0606034_PE681992_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0879517_PE611365_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0387922_PE218567_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0387925_PE224141_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/hektar-floor-lamp-dark-grey__0606222_PE682137_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/hektar-floor-lamp-dark-grey__0879554_PE611360_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/hektar-floor-lamp-dark-grey__0178781_PE317816_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-floor-lamp__0684004_PE720967_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-floor-lamp__0880121_PE611359_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-floor-lamp__0387918_PE365493_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/melodi-pendant-lamp-white__0545277_PE655373_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/melodi-pendant-lamp-white__0880510_PE613964_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/melodi-pendant-lamp-white__0179109_PE269834_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lampan-table-lamp-white__0609346_PE684467_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lampan-table-lamp-white__0879285_PE632935_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lampan-table-lamp-white__0177096_PE245534_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lampan-table-lamp-white__0390700_PE214100_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lampan-table-lamp-white__0390702_PE219031_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lampan-table-lamp-white__0177097_PE205983_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/harte-led-work-lamp-white-silver-colour__0243818_PE383097_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/harte-led-work-lamp-white-silver-colour__0880609_PE614070_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/harte-led-work-lamp-white-silver-colour__0880615_PE614886_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-pendant-lamp-white__0707090_PE726098_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-pendant-lamp-white__0707089_PE726099_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-pendant-lamp-white__0913851_PH167228_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-pendant-lamp-white__0795145_PH165574_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/vaexjoe-pendant-lamp-aluminium-colour__0781704_PE760904_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/vaexjoe-pendant-lamp-aluminium-colour__0833065_PH168399_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/vaexjoe-pendant-lamp-aluminium-colour__0781703_PE760905_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/torared-pendant-lamp-shade-seagrass__0764668_PE753264_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/torared-pendant-lamp-shade-seagrass__0808633_PE770797_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/torared-pendant-lamp-shade-seagrass__0808634_PE770796_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ramsele-pendant-lamp-flower-white__0743946_PE743537_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ramsele-pendant-lamp-flower-white__0744037_PE743536_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ramsele-pendant-lamp-flower-white__0795411_PH164310_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ramsele-pendant-lamp-flower-white__0743945_PE743538_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ramsele-pendant-lamp-flower-white__0744034_PE743533_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/bjaeresjoe-ceiling-lamp-white__0707002_PE726044_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/krusning-pendant-lamp-shade__0880077_PE613110_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/krusning-pendant-lamp-shade__0397263_PH123238_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/sinnerlig-pendant-lamp__0607419_PE682969_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/sinnerlig-pendant-lamp__0673622_PE717348_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/brunsta-hemma-pendant-lamp__0669228_PE714904_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/brunsta-hemma-pendant-lamp__0880954_PE656656_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/sjoepenna-pendant-lamp-round__0880428_PE652966_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/knappa-pendant-lamp__0607415_PE682965_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/knappa-pendant-lamp__0881149_PE613944_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/knappa-pendant-lamp__0179081_PE168582_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/regolit-pendant-lamp-shade-white__0331379_PE522998_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/regolit-pendant-lamp-shade-white__0880026_PE613096_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/regolit-pendant-lamp-shade-white__0682833_PE720585_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ranarp-wall-clamp-spotlight__0606607_PE682410_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ranarp-wall-clamp-spotlight__0879096_PE618773_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/ranarp-wall-clamp-spotlight__0879103_PE619932_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/tertial-work-lamp__0880955_PE622665_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/skurup-pendant-lamp-black__0604110_PE681110_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/skurup-pendant-lamp-black__0744106_PH157523_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/skurup-pendant-lamp-black__0795134_PH165591_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/skurup-pendant-lamp-black__0795392_PH165523_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/skurup-pendant-lamp-black__0880617_PE681111_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/vaexjoe-pendant-lamp-aluminium-colour__0781704_PE760904_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/vaexjoe-pendant-lamp-aluminium-colour__0833065_PH168399_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/vaexjoe-pendant-lamp-aluminium-colour__0781703_PE760905_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/jansjoe-led-wall-clamp-spotlight-silver-colour__0684448_PE721187_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/jansjoe-led-wall-clamp-spotlight-silver-colour__0879519_PE619771_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/soedersvik-led-wall-lamp__0755935_PE748671_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/nymoe-lamp-shade-white-brass-colour__0879213_PE632563_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/nymoe-lamp-shade-white-brass-colour__0880616_PE714889_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/tvaers-table-lamp-white__0739123_PH158187_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/tvaers-table-lamp-white__0880974_PE635244_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/grimsas-pendant-lamp-white__0652448_PE707545_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/grimsas-pendant-lamp-white__0880690_PE707544_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-pendant-lamp-3-armed__0607398_PE682976_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp-ash-white__0663863_PE712536_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp-ash-white__0879908_PE714870_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp-ash-white__0879910_PE714871_S5.JPG",
];

const download = function(url: string, dest: string) {
    const file = fs.createWriteStream(dest);

    const transformer = sharp().resize(600);

    https.get(url, function(response) {
        response.pipe(transformer).pipe(file);

        file.on("finish", function() {
            file.close();
        });
    });
};

Promise.all([FILES.map((file, idx) => download(file, `./src/assets/images/lamps/lamp${idx}.jpg`))]);

FILES.forEach((_f, idx) => console.log(`import lamp${idx} from "assets/images/lamps/lamp${idx}.jpg";`));
FILES.forEach((_f, idx) => console.log(`lamp${idx},`));
