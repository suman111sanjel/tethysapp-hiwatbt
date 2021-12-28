import Highcharts from 'highcharts';
let AllMonths = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}
var chartHelperObj = {};
chartHelperObj.DateTickInterval__monthly = 30 * 24 * 3600 * 1000; //Month
chartHelperObj.DateTickInterval__quartly = 30 * 24 * 3600 * 1000; //Month
chartHelperObj.DateTickInterval__dekad = 10 * 24 * 3600 * 1000; //10 days

chartHelperObj.DateFormatter__monthly = function () {
    return Highcharts.dateFormat('%Y-%b', this.value);
};
chartHelperObj.DateFormatter__quartly = function () {
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var dt = new Date(this.value);
    var str = dt.getFullYear().toString() + "-";
    str += monthNames[dt.getMonth()][0];
    dt.setDate(1);
    dt.setMonth(dt.getMonth() + 1);
    str += monthNames[dt.getMonth()][0];
    dt.setMonth(dt.getMonth() + 1);
    str += monthNames[dt.getMonth()][0];
    return str;
    // return Highcharts.dateFormat('%Y-%b', this.value)
};
chartHelperObj.DateFormatter__dekad = function () {
    var dt = new Date(this.value);
    if (dt.getDate() <= 10) {
        return Highcharts.dateFormat('%Y-%b-D1', this.value);
    } else if (dt.getDate() <= 20) {
        return Highcharts.dateFormat('%Y-%b-D2', this.value);
    } else {
        return Highcharts.dateFormat('%Y-%b-D3', this.value);
    }
};

chartHelperObj.TickPositioner__monthly = function () {
    return undefined;
};
chartHelperObj.TickPositioner__quartly = function () {
    return undefined;
};
chartHelperObj.TickPositioner__dekad = function (data) {
    let PositionList = [];
    data.forEach(function (val) {
        PositionList.push(val[0]);
    });
    let TickPositionerFunction = function () {
        return PositionList;
    };
    return TickPositionerFunction;
};

chartHelperObj.TooltipFormater__dekad = function () {
    let funn = function () {
        var dt = new Date(this.x);
        let customDate = '';
        if (dt.getDate() <= 10) {
            customDate = Highcharts.dateFormat('%Y-%b-D1', this.x);
        } else if (dt.getDate() <= 20) {
            customDate = Highcharts.dateFormat('%Y-%b-D2', this.x);
        } else {
            customDate = Highcharts.dateFormat('%Y-%b-D3', this.x);
        }
        let htmlStr = customDate + '<br/>';
        this.points.forEach((val) => {
            let aa = '<span style="color:' + val.color + '">●</span> ' + val.series.name + ': <b>' + val.y + val.series.tooltipOptions.valueSuffix + '</b><br/>';
            htmlStr = htmlStr + aa;
        });
        return htmlStr;
    }
    return funn;
};
chartHelperObj.TooltipFormater__monthly = function () {
    let funn = function () {
        let customDate = Highcharts.dateFormat('%Y-%b', this.x);
        let htmlStr = customDate + '<br/>';
        this.points.forEach((val) => {
            let aa = '<span style="color:' + val.color + '">●</span> ' + val.series.name + ': <b>' + val.y + val.series.tooltipOptions.valueSuffix + '</b><br/>';
            htmlStr = htmlStr + aa;
        });
        return htmlStr;
    }
    return funn;
};
chartHelperObj.TooltipFormater__quartly = function () {
    let funn = function () {
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dt = new Date(this.x);
        dt.setDate(1);
        // dt.setMonth(dt.getMonth() + 1);
        var str = dt.getFullYear().toString() + "-";
        str += monthNames[dt.getMonth()][0];
        dt.setDate(1);
        dt.setMonth(dt.getMonth() + 1);
        str += monthNames[dt.getMonth()][0];
        dt.setMonth(dt.getMonth() + 1);
        str += monthNames[dt.getMonth()][0];
        let customDate = str;
        let htmlStr = customDate + '<br/>';
        this.points.forEach((val) => {
            let aa = '<span style="color:' + val.color + '">●</span> ' + val.series.name + ': <b>' + val.y + val.series.tooltipOptions.valueSuffix + '</b><br/>';
            htmlStr = htmlStr + aa;
        });
        return htmlStr;
    };
    return funn;
};

var MapHelper = {};
MapHelper.dateisoFormatForLevelFormatter__monthly = function (isoDate) {
    let dateObj = Date.parseISO8601(isoDate);
    let FullYear = dateObj.getFullYear().toString();
    let FullMonth = dateObj.getMonth();
    return FullYear + '-' + AllMonths[FullMonth];
};

MapHelper.dateisoFormatForLevelFormatter__dekad = function (isoDate) {
    var dt = new Date(isoDate);
    if (dt.getDate() <= 10) {
        return Highcharts.dateFormat('%Y-%b-D1', dt)
    } else if (dt.getDate() <= 20) {
        return Highcharts.dateFormat('%Y-%b-D2', dt)
    } else {
        return Highcharts.dateFormat('%Y-%b-D3', dt)
    }
};

MapHelper.dateisoFormatForLevelFormatter__quartly = function (isoDate) {
        let dateObj = Date.parseISO8601(isoDate);
        let FullYear = dateObj.getFullYear().toString();
        let FullMonth = dateObj.getMonth();
        let threeMonths = '';
        if (FullMonth === 11) {
            threeMonths = AllMonths[FullMonth].slice(0, 1) + AllMonths[0].slice(0, 1) + AllMonths[1].slice(0, 1);
        } else if (FullMonth === 10) {
            threeMonths = AllMonths[FullMonth].slice(0, 1) + AllMonths[FullMonth + 1].slice(0, 1) + AllMonths[0].slice(0, 1);
        } else {
            threeMonths = AllMonths[FullMonth].slice(0, 1) + AllMonths[FullMonth + 1].slice(0, 1) + AllMonths[FullMonth + 2].slice(0, 1);
        }
        return FullYear + '-' + threeMonths;
    };


export function CollectHighchartRequiredInfo(dataPeriod, mean_data) {
    let tickInterval = chartHelperObj["DateTickInterval__" + dataPeriod];
    let Dateformater = chartHelperObj["DateFormatter__" + dataPeriod];
    let TickPositioner = chartHelperObj["TickPositioner__" + dataPeriod](mean_data);
    let TootTipFormatter = chartHelperObj["TooltipFormater__" + dataPeriod]();
    return {tickInterval, Dateformater, TickPositioner, TootTipFormatter};
}
export function CustomTimeDimensionalLayerDateLabel(dataPeriod){
    return MapHelper["dateisoFormatForLevelFormatter__"+dataPeriod];
}

export function CurrentDateFormat(){
        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}