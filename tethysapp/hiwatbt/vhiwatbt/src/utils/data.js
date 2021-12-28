let allYears = [];
let initialYear;
for (initialYear = 2000; initialYear <= new Date().getFullYear(); initialYear++) {
    allYears.unshift({
        value: initialYear,
        label: initialYear
    });
}

export const dataSelect = {
    basin: [{
        value: "Amudarya",
        basin: "optGroup",
        label: "Amudarya"
    }, {
        value: "Amudarya_1",
        basin: null,
        label: "   Amudarya_1"
    }, {
        value: "Amudarya_2",
        basin: null,
        label: "   Amudarya_2"
    }, {value: "Amudarya_4", basin: null, label: "   Amudarya_4"}, {
        value: "Amudarya_5",
        basin: null,
        label: "   Amudarya_5"
    }, {value: "Amudarya_6", basin: null, label: "   Amudarya_6"}, {
        value: "Amudarya_7",
        basin: null,
        label: "   Amudarya_7"
    }, {value: "Amudarya_8", basin: null, label: "   Amudarya_8"}, {
        value: "Amudarya Main Trunk",
        basin: null,
        label: "   Amudarya Main Trunk"
    }, {value: "Brahmaputra", basin: "optGroup", label: "Brahmaputra"}, {
        value: "Amo Chu",
        basin: null,
        label: "   Amo Chu"
    }, {value: "Brahmaputra@", basin: null, label: "   Brahmaputra"}, {
        value: "Dihang",
        basin: null,
        label: "   Dihang"
    }, {value: "Kameng", basin: null, label: "   Kameng"}, {
        value: "Manas",
        basin: null,
        label: "   Manas"
    }, {value: "Pelkhu1", basin: null, label: "   Pelkhu1"}, {
        value: "Punatsang Chu",
        basin: null,
        label: "   Punatsang Chu"
    }, {value: " Subansiri", basin: null, label: "   Subansiri"}, {
        value: "Tista",
        basin: null,
        label: "   Tista"
    }, {value: "Yarlung Zangbo", basin: null, label: "   Yarlung Zangbo"}, {
        value: "Eastern Asian",
        basin: "optGroup",
        label: "Eastern Asian"
    }, {value: "Eastern Asian", basin: null, label: "   Eastern Asian"}, {
        value: "Ganga",
        basin: "optGroup",
        label: "Ganga"
    }, {value: "Gandaki", basin: null, label: "   Gandaki"}, {
        value: "Ghaghara",
        basin: null,
        label: "   Ghaghara"
    }, {value: "Karnali", basin: null, label: "   Karnali"}, {
        value: "Koshi",
        basin: null,
        label: "   Koshi"
    }, {value: "Pelkhu", basin: null, label: "   Pelkhu"}, {
        value: "Trunk Ganga",
        basin: null,
        label: "   Trunk Ganga"
    }, {value: "Upper Ganga", basin: null, label: "   Upper Ganga"}, {
        value: "Yamuna",
        basin: null,
        label: "   Yamuna"
    }, {value: "Indus", basin: "optGroup", label: "Indus"}, {
        value: "Kabul",
        basin: null,
        label: "   Kabul"
    }, {value: "Panjnad", basin: null, label: "   Panjnad"}, {
        value: "Trunk Indus",
        basin: null,
        label: "   Trunk Indus"
    }, {value: "Upper Indus", basin: null, label: "   Upper Indus"}, {
        value: "Irrawaddy",
        basin: "optGroup",
        label: "Irrawaddy"
    }, {value: "Irrawaddy_1", basin: null, label: "   Irrawaddy_1"}, {
        value: "Irrawaddy_2",
        basin: null,
        label: "   Irrawaddy_2"
    }, {value: "Irrawaddy_4", basin: null, label: "   Irrawaddy_4"}, {
        value: "Irrawaddy Main Trunk",
        basin: null,
        label: "   Irrawaddy Main Trunk"
    }, {value: "Mekong", basin: "optGroup", label: "Mekong"}, {
        value: "Angqu",
        basin: null,
        label: "   Angqu"
    }, {value: "Mekong_5", basin: null, label: "   Mekong_5"}, {
        value: "Mekong_6",
        basin: null,
        label: "   Mekong_6"
    }, {value: "Mekong Main Trunk", basin: null, label: "   Mekong Main Trunk"}, {
        value: "Middle Reaches",
        basin: null,
        label: "   Middle Reaches"
    }, {value: "Ziqu", basin: null, label: "   Ziqu"}, {
        value: "Qinghai-Tibetan",
        basin: "optGroup",
        label: "Qinghai Tibetan"
    }, {value: "Qinghai-Tibetan", basin: null, label: "   Qinghai Tibetan"}, {
        value: "Salween",
        basin: "optGroup",
        label: "Salween"
    }, {
        value: "Middle and Lower Reaches",
        basin: null,
        label: "   Middle and Lower Reaches"
    }, {value: "Middle Reaches", basin: null, label: "   Middle Reaches"}, {
        value: "Naqu River",
        basin: null,
        label: "   Naqu River"
    }, {value: "Yuqu jiang River", basin: null, label: "   Yuqu jiang River"}, {
        value: "Tarim",
        basin: "optGroup",
        label: "Tarim"
    }, {value: "Tarim_10", basin: null, label: "   Tarim_10"}, {
        value: "Tarim_2",
        basin: null,
        label: "   Tarim_2"
    }, {value: "Tarim_6", basin: null, label: "   Tarim_6"}, {
        value: "Tarim_9",
        basin: null,
        label: "   Tarim_9"
    }, {value: "Yangtze", basin: "optGroup", label: "Yangtze"}, {
        value: "Jialing",
        basin: null,
        label: "   Jialing"
    }, {value: "Jinsha", basin: null, label: "   Jinsha"}, {
        value: "Minjang",
        basin: null,
        label: "   Minjang"
    }, {value: "Yalong", basin: null, label: "   Yalong"}, {
        value: "Yangtze Main Trunk",
        basin: null,
        label: "   Yangtze Main Trunk"
    }, {value: "Yellow River", basin: "optGroup", label: "YellowRiver"}, {
        value: "Datong",
        basin: null,
        label: "   Datong"
    }, {value: "Upper Reaches", basin: null, label: "   Upper Reaches"}, {
        value: "Yellow_3",
        basin: null,
        label: "   Yellow_3"
    }, {value: "Yellow_4", basin: null, label: "   Yellow_4"}, {
        value: "Yellow Main Trunk",
        basin: null,
        label: "   Yellow Main Trunk"
    }],
    indices: [{value: "Tair_f_tavg", label: "Air temperature"}, {
        value: "Rainf_f_tavg",
        label: "Rainfall flux"
    }, {value: "SoilMoist_inst", label: "Soil moisture content"}, {
        value: "Evap_tavg",
        label: "Total evapotranspiration"
    }],
    periodicity: [
        {
            value: "dekad",
            label: "Dekad (10 day)"
        },
        {value: "monthly", label: "Monthly"},
        {
            value: "quartly",
            label: "Quartly"
        }
    ],
    periodicityOutlook: [{value: "monthly", label: "Monthly Anomaly"}],
    year: allYears,
    ensemble: [{value: "mean", label: "Mean"}, {value: "ens0", label: "1"}, {
        value: "ens1",
        label: "2"
    }, {value: "ens2", label: "3"}, {value: "ens3", label: "4"}, {
        value: "ens4",
        label: "5"
    }, {value: "ens5", label: "6"}, {value: "ens6", label: "7"}]
};

export let MajorBasinExtent = {
    "Qinghai-Tibetan": "8716166.55240555 3460237.59031712,10370355.4781674 4365558.84872455",
    "Eastern Asian": "10035305.3359013 4121394.33579713,11260640.4277549 4767429.6545047",
    "Irrawaddy": "10405483.9193243 1770573.48703204,11006799.585301 3346730.00041462",
    "Indus": "7364925.55221556 2717484.72206939,9108583.29635218 4451120.76606664",
    "Yellow River": "10674481.7701 3784239.41169954,13254082.4048025 5138155.80028328",
    "Tarim": "8131939.55634964 4114219.50962564,10142586.5219298 5365713.97323084",
    "Ganga": "8168973.50765971 2454149.45641094,10093526.1092771 3692288.22360145",
    "Salween": "10160852.3055946 1680452.07033673,11157339.7376909 3864453.92512378",
    "Brahmaputra": "9130078.30033457 2746086.53559318,10884263.399676 3669074.52743424",
    "Amudarya": "6496405.51620978 4093908.74720239,8366012.32684021 5494102.31609583",
    "Yangtze": "10079371.5015526 2825535.03717084,13652916.9144526 4556780.18734191",
    "Mekong": "10448438.9816864 955756.450337888,12103048.3979452 4005395.00191453"
};

export let BasinExtent = {
    "Amo Chu": "9881169.21909974 2991272.69233293,9995972.53980659 3241361.10268702",
    "Amudarya_1": "7726671.12813488 4355741.61887491,8366012.32684021 4774000.49092789",
    "Amudarya_2": "7714414.83281423 4224320.27697865,7974763.86893292 4502152.72131747",
    "Amudarya_3": "7595825.72917644 4454033.06189009,8204879.51543202 4845763.35782293",
    "Amudarya_4": "7696354.38165889 4483649.20336825,7846909.87657154 4688321.73733522",
    "Amudarya_5": "7423628.40846 4104942.34579949,7847588.80436424 4454787.80765265",
    "Amudarya_6": "7428878.10859286 4220209.25272494,7612050.82892422 4487678.12533059",
    "Amudarya_7": "7322082.90558539 4093908.74720239,7547951.66585152 4508238.52614085",
    "Amudarya_8": "6939114.08193586 4195767.35022566,7417681.81998951 4806937.46985911",
    "Amudarya_9": "6941132.47214372 4601603.52710507,7869512.94126755 4939054.31449036",
    "Amudarya Main Trunk": "6496405.51620978 4334257.14920537,7799347.20924802 5494102.31609583",
    "Angqu": "10480646.1782319 3569742.04625145,10853835.967026 3874911.66032724",
    "Brahmaputra": "9878321.51508716 2746086.53559318,10816380.5173303 3256416.06425509",
    "Datong": "10888501.2790825 4306145.06753691,11508694.290647 4626167.6807239",
    "Delta": "9806186.34960145 2454149.45641094,10093526.1092771 2806756.39902638",
    "Dihang": "10602769.5897747 3193145.65982538,10884263.399676 3446218.09055286",
    "Eastern Asian": "10035305.3359013 4121394.33579713,11260640.4277549 4767429.6545047",
    "Gandaki": "9226081.72801626 2952842.10400935,9551073.60262885 3417861.36894304",
    "Ghaghara": "8938923.76786366 2965162.04344816,9424261.99533398 3321304.45879529",
    "Irrawaddy_1": "10651506.6890673 2495830.6138367,11006799.585301 3346730.00041462",
    "Irrawaddy_2": "10405483.9193243 2448217.43036992,10829987.1539385 3169615.0550773",
    "Irrawaddy_3": "10559744.8843363 2501956.17895547,10687590.0625803 2811302.94216187",
    "Irrawaddy_4": "10628679.1932606 2307178.75081631,10947338.3724362 2727459.519323",
    "Irrawaddy Main Trunk": "10416734.9267078 1770573.48703204,10788945.0359786 2546286.62659404",
    "Jialing": "11413655.6422054 3412879.9419147,12133852.8318182 4100133.31150119",
    "Jinsha": "10079371.5015526 2904270.01674782,11343044.0947998 4273850.21279341",
    "Kabul": "7518824.3583581 3938983.52983453,8225294.07877471 4426845.55176148",
    "Kameng": "10237552.6170487 3077373.56633873,10394481.2335485 3246414.67616973",
    "Karnali": "8846703.07084201 3205732.74491139,9315123.7071455 3591180.82910185",
    "Koshi": "9354914.86956743 2916828.93579685,9901689.23078947 3393172.96519887",
    "Manas": "10041073.7836927 3023537.98010191,10293813.6671349 3324690.45046244",
    "Mekong_5": "10842989.1064179 3503116.13626586,10967197.4366852 3660759.18217887",
    "Mekong_6": "11070105.4115189 2838682.83771874,11181317.1738779 3096799.99864464",
    "Mekong Main Trunk": "10817749.8955474 3167268.15704018,11042157.9725936 3669933.01258214",
    "Middle and Lower Reaches": "10516943.001389 1680452.07033673,11157339.7376909 3654738.27331671",
    "Middle Reaches": "10844618.0472054 955756.450337888,12103048.3979452 3584812.75159577",
    "Middle-Reaches": "10535710.5349445 3527566.81400904,10813315.3863978 3783370.40834287",
    "Minjang": "11089517.8692535 3279292.62971062,11781832.1357532 3982107.90342406",
    "Naqu River": "10160852.3055946 3606270.94132021,10568462.1033145 3864453.92512378",
    "Panjnad": "7871266.54153836 3388975.12501592,9042843.47464865 4188614.02834789",
    "Pelkhu": "9505870.30379719 3297166.70384881,9581491.7285374 3387387.43207668",
    "Pelkhu1": "9496843.84086374 3352696.17789813,9528313.81468205 3399269.15183761",
    "Punatsang Chu": "9918171.53519643 2994327.76080719,10060555.0342239 3280284.42574827",
    "Qinghai-Tibetan": "8716166.55240555 3460237.59031712,10370355.4781674 4365558.84872455",
    "Subansiri": "10192375.785422 3114524.07597388,10554503.0027548 3365594.88218773",
    "Tarim_1": "8131939.55634964 4602569.21393986,8722281.93798243 4962871.48479917",
    "Tarim_10": "9511118.22737798 4328100.29737799,9934411.1347031 5005413.81492188",
    "Tarim_11": "9233456.81539593 5050204.46795377,9832900.04341804 5365713.97323084",
    "Tarim_2": "8288368.89766785 4225616.37268319,8727446.67704364 4827988.42847094",
    "Tarim_3": "8508224.77027768 4845909.28496996,8975774.4797135 5029412.87480634",
    "Tarim_4": "8358678.22407089 4906785.81071928,8999420.1781622 5230377.07183206",
    "Tarim_5": "8606458.3040583 4383077.11721368,9003319.89337436 4933682.86843317",
    "Tarim_6": "8616390.17931437 4114219.50962564,9118364.52864022 4936345.23693592",
    "Tarim_7": "8961989.59999342 4965058.00060796,9204666.25528894 5169406.18884814",
    "Tarim_8": "8933420.34887102 5041288.14770717,9378739.62190829 5259292.46839039",
    "Tarim_9": "9029990.00669937 4189107.82828259,9711614.88540472 5047073.31176347",
    "Tarim Main Trunk": "8409548.70922022 4509965.26960831,10142586.5219298 5242170.59088756",
    "Tista": "9794937.47825364 2935639.95871028,9983584.64535901 3262177.94585567",
    "Trunk Ganga": "8902873.54909446 2588492.01197166,9997514.72713529 3365258.82787465",
    "Trunk Indus": "7364925.55221556 2717484.72206939,8615209.16366538 4076396.57778803",
    "Upper Ganga": "8638291.59629726 2927788.22421211,9136029.1608466 3692288.22360145",
    "Upper Indus": "8037752.92734194 3645935.44714312,9108583.29635218 4451120.76606664",
    "Upper Reaches": "10674481.7701 3784239.41169954,11516386.810348 4450690.99243058",
    "Yalong": "10778637.2417074 3073894.98772599,11433218.4203672 4057652.13564955",
    "Yamuna": "8168973.50765971 2565992.2684435,9115638.37560811 3687493.66673626",
    "Yangtze_10": "12657803.8637679 2825535.03717084,13201789.1966804 3510478.02462085",
    "Yangtze_4": "11614388.1114125 3017929.92591581,12173006.5564217 3533416.42837374",
    "Yangtze_5": "12087597.7142863 3428091.09843039,12413042.5671859 3614753.07203582",
    "Yangtze_6": "11940828.3825708 2974348.04922749,12568974.086878 3523653.25158567",
    "Yangtze_7": "11809560.2454001 3474190.45836159,12694189.5681185 4053953.7679768",
    "Yangtze_8": "12300367.1866215 2886189.08082124,12718691.9702725 3355111.23020563",
    "Yangtze_9": "12531892.5248676 3566511.80820952,12735335.6470152 3806265.32232313",
    "Yangtze Main Trunk": "11236330.4240005 2855063.90988123,13652916.9144526 4556780.18734191",
    "Yarlung Zangbo": "9130078.30033457 3219110.22247528,10809122.3970925 3669074.52743424",
    "Yellow_3": "11574361.7283858 3988116.00399558,12278236.2802744 4496198.182239",
    "Yellow_4": "11205382.9375513 4460960.14501799,11894471.6715002 5028109.50892143",
    "Yellow_5": "12516619.4456991 4266463.84844203,12763789.7043071 4523227.16491116",
    "Yellow_6": "12460718.8572978 4151306.31163446,12626253.8619354 4435095.22140406",
    "Yellow_7": "11928632.7277515 4445104.28328501,12308747.3821763 4856661.44365572",
    "Yellow Main Trunk": "11310103.4458552 3982816.18952207,13254082.4048025 5138155.80028328",
    "Yuqu jiang River": "10739622.4469774 3301353.67678442,10986407.8821518 3631350.67331767",
    "Ziqu": "10448438.9816864 3650028.25556958,10905377.485667 4005395.00191453"
};
export var mbasin = ["Amudarya", "Brahmaputra", "Eastern Asian", "Ganga", "Indus", "Irrawaddy", "Mekong", "Qinghai-Tibetan", "Salween", "Tarim", "Yangtze", "Yellow River"];

export var WMSLAYERS = {
    "Tair_f_tavg": "Air Temperature",
    "Rainf_f_tavg": "Rainfall flux",
    "SoilMoist_inst": "Soil moisture content",
    "Evap_tavg": "Total evapotranspiration"
};
export var WMSSLD = {
    "Tair_f_tavg": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><se:Name>Tair_f_tavg</se:Name><UserStyle><se:Name>Thesholded colour scheme</se:Name><se:CoverageStyle><se:Rule><se:RasterSymbolizer><se:Opacity>1.0</se:Opacity><se:ColorMap><se:Categorize fallbackValue="#00000000"><se:LookupValue>Rasterdata</se:LookupValue><se:Value>#00000000</se:Value><se:Threshold>-5</se:Threshold><se:Value>#9999FF</se:Value><se:Threshold>-4.5</se:Threshold><se:Value>#99A7FF</se:Value><se:Threshold>-4</se:Threshold><se:Value>#9CB6FF</se:Value><se:Threshold>-3.5</se:Threshold><se:Value>#9CC2FF</se:Value><se:Threshold>-3</se:Threshold><se:Value>#9CD1FF</se:Value><se:Threshold>-2.5</se:Threshold><se:Value>#9CDEFF</se:Value><se:Threshold>-2</se:Threshold><se:Value>#9CEDFF</se:Value><se:Threshold>-1.5</se:Threshold><se:Value>#99FCFF</se:Value><se:Threshold>-1</se:Threshold><se:Value>#A6FFF6</se:Value><se:Threshold>-0.5</se:Threshold><se:Value>#B5FFE6</se:Value><se:Threshold>0</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0.5</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>1</se:Threshold><se:Value>#FFFFBE</se:Value><se:Threshold>1.5</se:Threshold><se:Value>#FFEBAF</se:Value><se:Threshold>2</se:Threshold><se:Value>#FFD37F</se:Value><se:Threshold>2.5</se:Threshold><se:Value>#E69800</se:Value><se:Threshold>3</se:Threshold><se:Value>#FF7F7F</se:Value><se:Threshold>3.5</se:Threshold><se:Value>#E64C00</se:Value><se:Threshold>4</se:Threshold><se:Value>#A83800</se:Value><se:Threshold>4.5</se:Threshold><se:Value>#732600</se:Value><se:Threshold>5</se:Threshold><se:Value>#00000000</se:Value></se:Categorize></se:ColorMap></se:RasterSymbolizer></se:Rule></se:CoverageStyle></UserStyle></NamedLayer></StyledLayerDescriptor>',
    "Rainf_f_tavg": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><se:Name>Rainf_f_tavg</se:Name><UserStyle><se:Name>Thesholded colour scheme</se:Name><se:CoverageStyle><se:Rule><se:RasterSymbolizer><se:Opacity>1.0</se:Opacity><se:ColorMap><se:Categorize fallbackValue="#00000000"><se:LookupValue>Rasterdata</se:LookupValue><se:Value>#00000000</se:Value><se:Threshold>-2.5</se:Threshold><se:Value>#C2523C</se:Value><se:Threshold>-2</se:Threshold><se:Value>#FFAA01</se:Value><se:Threshold>-1.5</se:Threshold><se:Value>#FFD380</se:Value><se:Threshold>-1</se:Threshold><se:Value>#FEFF73</se:Value><se:Threshold>-0.5</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0.5</se:Threshold><se:Value>#E9FFBE</se:Value><se:Threshold>1</se:Threshold><se:Value>#7BED01</se:Value><se:Threshold>1.5</se:Threshold><se:Value>#21DD00</se:Value><se:Threshold>2</se:Threshold><se:Value>#0ACC2E</se:Value><se:Threshold>2.5</se:Threshold><se:Value>#17B568</se:Value><se:Threshold>3</se:Threshold><se:Value>#1E9B89</se:Value><se:Threshold>3.5</se:Threshold><se:Value>#1A828F</se:Value><se:Threshold>4</se:Threshold><se:Value>#135784</se:Value><se:Threshold>4.5</se:Threshold><se:Value>#00000000</se:Value></se:Categorize></se:ColorMap></se:RasterSymbolizer></se:Rule></se:CoverageStyle></UserStyle></NamedLayer></StyledLayerDescriptor>',
    "SoilMoist_inst": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><se:Name>SoilMoist_inst</se:Name><UserStyle><se:Name>Thesholded colour scheme</se:Name><se:CoverageStyle><se:Rule><se:RasterSymbolizer><se:Opacity>1.0</se:Opacity><se:ColorMap><se:Categorize fallbackValue="#00000000"><se:LookupValue>Rasterdata</se:LookupValue><se:Value>#00000000</se:Value><se:Threshold>-2.5</se:Threshold><se:Value>#C2523C</se:Value><se:Threshold>-2</se:Threshold><se:Value>#FFAA01</se:Value><se:Threshold>-1.5</se:Threshold><se:Value>#FFD380</se:Value><se:Threshold>-1</se:Threshold><se:Value>#FEFF73</se:Value><se:Threshold>-0.5</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0.5</se:Threshold><se:Value>#E9FFBE</se:Value><se:Threshold>1</se:Threshold><se:Value>#7BED01</se:Value><se:Threshold>1.5</se:Threshold><se:Value>#21DD00</se:Value><se:Threshold>2</se:Threshold><se:Value>#0ACC2E</se:Value><se:Threshold>2.5</se:Threshold><se:Value>#17B568</se:Value><se:Threshold>3</se:Threshold><se:Value>#1E9B89</se:Value><se:Threshold>3.5</se:Threshold><se:Value>#1A828F</se:Value><se:Threshold>4</se:Threshold><se:Value>#135784</se:Value><se:Threshold>4.5</se:Threshold><se:Value>#00000000</se:Value></se:Categorize></se:ColorMap></se:RasterSymbolizer></se:Rule></se:CoverageStyle></UserStyle></NamedLayer></StyledLayerDescriptor>',
    "Evap_tavg": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><se:Name>Evap_tavg</se:Name><UserStyle><se:Name>Thesholded colour scheme</se:Name><se:CoverageStyle><se:Rule><se:RasterSymbolizer><se:Opacity>1.0</se:Opacity><se:ColorMap><se:Categorize fallbackValue="#00000000"><se:LookupValue>Rasterdata</se:LookupValue><se:Value>#00000000</se:Value><se:Threshold>-2.5</se:Threshold><se:Value>#C2523C</se:Value><se:Threshold>-2</se:Threshold><se:Value>#FFAA01</se:Value><se:Threshold>-1.5</se:Threshold><se:Value>#FFD380</se:Value><se:Threshold>-1</se:Threshold><se:Value>#FEFF73</se:Value><se:Threshold>-0.5</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0</se:Threshold><se:Value>#E1E1E1</se:Value><se:Threshold>0.5</se:Threshold><se:Value>#E9FFBE</se:Value><se:Threshold>1</se:Threshold><se:Value>#7BED01</se:Value><se:Threshold>1.5</se:Threshold><se:Value>#21DD00</se:Value><se:Threshold>2</se:Threshold><se:Value>#0ACC2E</se:Value><se:Threshold>2.5</se:Threshold><se:Value>#17B568</se:Value><se:Threshold>3</se:Threshold><se:Value>#1E9B89</se:Value><se:Threshold>3.5</se:Threshold><se:Value>#1A828F</se:Value><se:Threshold>4</se:Threshold><se:Value>#135784</se:Value><se:Threshold>4.5</se:Threshold><se:Value>#00000000</se:Value></se:Categorize></se:ColorMap></se:RasterSymbolizer></se:Rule></se:CoverageStyle></UserStyle></NamedLayer></StyledLayerDescriptor>',
};
export var WMSSLDCurrent = {
    "Tair_f_tavg": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd"                       xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"                       xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink"                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <NamedLayer>        <se:Name>Tair_f_tavg</se:Name>        <UserStyle>            <se:Name>Thesholded colour scheme</se:Name>            <se:CoverageStyle>                <se:Rule>                    <se:RasterSymbolizer>                        <se:Opacity>1.0</se:Opacity>                        <se:ColorMap>                            <se:Categorize fallbackValue="#00000000">                                <se:LookupValue>Rasterdata</se:LookupValue>                                <se:Value>#0c2c84</se:Value><se:Threshold>273</se:Threshold><se:Value>#1d91c0</se:Value><se:Threshold>278</se:Threshold><se:Value>#7fcdbb</se:Value><se:Threshold>283</se:Threshold><se:Value>#c7e9b4</se:Value><se:Threshold>288</se:Threshold><se:Value>#ffeda0</se:Value><se:Threshold>293</se:Threshold><se:Value>#fc4e2a</se:Value><se:Threshold>298</se:Threshold><se:Value>#fc4e2a</se:Value><se:Threshold>303</se:Threshold><se:Value>#b10026</se:Value>                            </se:Categorize>                        </se:ColorMap>                    </se:RasterSymbolizer>                </se:Rule>            </se:CoverageStyle>        </UserStyle>    </NamedLayer></StyledLayerDescriptor>',
    "Rainf_f_tavg": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd"                       xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"                       xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink"                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <NamedLayer>        <se:Name>Rainf_f_tavg</se:Name>        <UserStyle>            <se:Name>Thesholded colour scheme</se:Name>            <se:CoverageStyle>                <se:Rule>                    <se:RasterSymbolizer>                        <se:Opacity>1.0</se:Opacity>                        <se:ColorMap>                            <se:Categorize fallbackValue="#00000000">                                <se:LookupValue>Rasterdata</se:LookupValue>                                <se:Value>#b10026</se:Value><se:Threshold>5</se:Threshold><se:Value>#fc4e2a</se:Value><se:Threshold>10</se:Threshold><se:Value>#feb24c</se:Value><se:Threshold>15</se:Threshold><se:Value>#ffeda0</se:Value><se:Threshold>20</se:Threshold><se:Value>#c7e9b4</se:Value><se:Threshold>25</se:Threshold><se:Value>#7fcdbb</se:Value><se:Threshold>30</se:Threshold><se:Value>#1d91c0</se:Value><se:Threshold>35</se:Threshold><se:Value>#0c2c84</se:Value>                            </se:Categorize>                        </se:ColorMap>                    </se:RasterSymbolizer>                </se:Rule>            </se:CoverageStyle>        </UserStyle>    </NamedLayer></StyledLayerDescriptor>',
    "SoilMoist_inst": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer>     <se:Name>SoilMoist_inst</se:Name>     <UserStyle>     <se:Name>Thesholded colour scheme</se:Name>     <se:CoverageStyle>     <se:Rule>     <se:RasterSymbolizer>     <se:Opacity>1.0</se:Opacity>     <se:ColorMap>     <se:Categorize fallbackValue="#00000000">     <se:LookupValue>Rasterdata</se:LookupValue>     <se:Value>#b10026</se:Value>     <se:Threshold>5</se:Threshold>     <se:Value>#fc4e2a</se:Value>     <se:Threshold>50</se:Threshold>     <se:Value>#feb24c</se:Value>     <se:Threshold>100</se:Threshold>     <se:Value>#ffeda0</se:Value>     <se:Threshold>150</se:Threshold>     <se:Value>#c7e9b4</se:Value>     <se:Threshold>200</se:Threshold>     <se:Value>#7fcdbb</se:Value>     <se:Threshold>300</se:Threshold>     <se:Value>#1d91c0</se:Value>     <se:Threshold>400</se:Threshold>     <se:Value>#0c2c84</se:Value> </se:Categorize> </se:ColorMap> </se:RasterSymbolizer> </se:Rule> </se:CoverageStyle> </UserStyle> </NamedLayer></StyledLayerDescriptor>',
    "Evap_tavg": '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd"                       xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"                       xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink"                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <NamedLayer>        <se:Name>Evap_tavg</se:Name>        <UserStyle>            <se:Name>Thesholded colour scheme</se:Name>            <se:CoverageStyle>                <se:Rule>                    <se:RasterSymbolizer>                        <se:Opacity>1.0</se:Opacity>                        <se:ColorMap>                            <se:Categorize fallbackValue="#00000000">                                <se:LookupValue>Rasterdata</se:LookupValue>                                <se:Value>#b10026</se:Value><se:Threshold>0.5</se:Threshold><se:Value>#fc4e2a</se:Value><se:Threshold>1</se:Threshold><se:Value>#feb24c</se:Value><se:Threshold>2</se:Threshold><se:Value>#ffeda0</se:Value><se:Threshold>3</se:Threshold><se:Value>#c7e9b4</se:Value><se:Threshold>4</se:Threshold><se:Value>#7fcdbb</se:Value><se:Threshold>5</se:Threshold><se:Value>#1d91c0</se:Value><se:Threshold>6</se:Threshold><se:Value>#0c2c84</se:Value>                            </se:Categorize>                        </se:ColorMap>                    </se:RasterSymbolizer>                </se:Rule>            </se:CoverageStyle>        </UserStyle>    </NamedLayer></StyledLayerDescriptor>',
};

export var legendImage = {
    "Tair_f_tavg": "FinalNewAirTemperature.jpg",
    "Rainf_f_tavg": "final_rain.jpg",
    "SoilMoist_inst": "soil.jpg",
    "Evap_tavg": "evaporation.jpg"
};


export var HIWAT_Extreme_Layer_List = [
    {
        id: 'gapaNapa_1hrppt',
        visible: false,
        title: 'Total accumulated Rainfall (mm)',
        zIndex: 100,
        layerCollectionDivClass: ".layerCollection",
        styles: 'HIWAT_Extreme:gapaNapa_1hrppt'
    },
    {
        id: 'gapaNapa_labels',
        visible: false,
        title: 'Gewog Labels',
        zIndex: 100,
        layerCollectionDivClass: ".layerCollection1",
        styles: 'HIWAT_Extreme:gapaNapa_labels'
    },
    {
        id: 'gapaNapa_lightning',
        visible: false,
        title: 'Maximum Prob. of Lightning (%)',
        zIndex: 100,
        layerCollectionDivClass: ".layerCollection",
        styles: 'HIWAT_Extreme:gapaNapa_lightning'
    },
    {
        id: 'gapaNapa_mHail',
        visible: false,
        title: 'Maximum Prob. of Hail Threat (%)',
        zIndex: 100,
        layerCollectionDivClass: ".layerCollection",
        styles: 'HIWAT_Extreme:gapaNapa_mHail'
    },
    {
        id: 'gapaNapa_suHail',
        visible: false,
        title: 'Maximum Prob. of Supercell Threat (%)',
        zIndex: 100,
        layerCollectionDivClass: ".layerCollection",
        styles: 'HIWAT_Extreme:gapaNapa_suHail'
    },
    {
        id: 'gapaNapa_transparent',
        visible: false, title: 'Gewog Boundary',
        zIndex: 100, layerCollectionDivClass: ".layerCollection1",
        styles: 'HIWAT_Extreme:gapaNapa_transparent'
    },];

export function isInterestedLayer(toCheck) {
    let lenLayer = HIWAT_Extreme_Layer_List.filter(function (x) {
        return x.id == toCheck
    }).length;
    if (lenLayer) {
        return true;
    } else {
        return false;
    }
}


export var HIWAT_Latest_54_hour_data = [
    {id: 'enspmm-prec1h', visible: true, title: '1-hour accumulated Rainfall (mm)', layerName: 'enspmm-prec1h'},
    {
        id: 'ensprob-lfa-thresh0p07',
        visible: false,
        title: 'Prob. of Lightning (%)',
        layerName: 'ensprob-lfa-thresh0p07'
    },
    {
        id: 'ensprob-tcolg-thresh30',
        visible: false,
        title: 'Prob. of Hail Threat (%)',
        layerName: 'ensprob-tcolg-thresh30'
    },
    {
        id: 'ensprob-uphlcy25-thresh100',
        visible: false,
        title: 'Prob. of Supercell Threat (%)',
        layerName: 'ensprob-uphlcy25-thresh100'
    },];


export function GetPercentageSLD(LayerVariable) {
    let sld = `<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd"
                       xmlns="http://www.opengis.net/sld"
                       xmlns:ogc="http://www.opengis.net/ogc"
                       xmlns:se="http://www.opengis.net/se"
                       xmlns:xlink="http://www.w3.org/1999/xlink"
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xmlns:resc="http://www.resc.reading.ac.uk">
    <NamedLayer>
        <se:Name>${LayerVariable}</se:Name>
        <UserStyle>
            <se:Name>Thesholded colour scheme</se:Name>
            <se:CoverageStyle>
                <se:Rule>
                    <se:RasterSymbolizer>
                        <se:Opacity>1.0</se:Opacity>
                        <se:ColorMap>
                            <se:Categorize fallbackValue="#00000000">
                                <se:LookupValue>Rasterdata</se:LookupValue>
                                <se:Value>#0c2c8400</se:Value>
                                <se:Threshold>0</se:Threshold>
                                <se:Value>#ffffd4</se:Value>
                                <se:Threshold>10</se:Threshold>
                                <se:Value>#ffefb5</se:Value>
                                <se:Threshold>20</se:Threshold>
                                <se:Value>#ffde96</se:Value>
                                <se:Threshold>30</se:Threshold>
                                <se:Value>#fec46c</se:Value>
                                <se:Threshold>40</se:Threshold>
                                <se:Value>#fea73f</se:Value>
                                <se:Threshold>50</se:Threshold>
                                <se:Value>#f68c23</se:Value>
                                <se:Threshold>60</se:Threshold>
                                <se:Value>#e67217</se:Value>
                                <se:Threshold>70</se:Threshold>
                                <se:Value>#d25a0c</se:Value>
                                <se:Threshold>80</se:Threshold>
                                <se:Value>#b64708</se:Value>
                                <se:Threshold>90</se:Threshold>
                                <se:Value>#993404</se:Value>
                                <se:Threshold>100</se:Threshold>
                                <se:Value>#993404</se:Value>
                            </se:Categorize>
                        </se:ColorMap>
                    </se:RasterSymbolizer>
                </se:Rule>
            </se:CoverageStyle>
        </UserStyle>
    </NamedLayer>
</StyledLayerDescriptor>
`.replace(/(\r\n|\n|\r)/gm, "");
    return sld;
};
