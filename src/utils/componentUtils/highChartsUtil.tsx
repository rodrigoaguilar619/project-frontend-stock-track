import { MaskDataTypeEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import { maskData } from "lib-components-frontend-ts/lib/utils/dataUtils/maskDataUtil";

export interface FlagDataI {
    date: number;
    totalShares: number;
    price: number;
}

const buildPlotData = (value: number, color: string, text: string) => {
    return {
        value: value,
        color: color,
        dashStyle: 'shortdash',
        width: 1,
        zIndex: 5,
        label: {
            text: "<b>" + text + "</b>"
        }
    }
}

export const buildFlagsChartFromTransaction = (transactionsList: FlagDataI[]) => {

    let flagsChart: any = [];

    transactionsList.forEach((transaction: FlagDataI) => {

        let textFlag = [];

        textFlag.push("<b>------ TRANSACTION BUYS ------</b> ");
        textFlag.push("<b>Total shares:</b> " + transaction.totalShares);
        textFlag.push("<b>Buy price:</b>&nbsp;" + maskData(transaction.price, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } }));
        textFlag.push("<b>Total buy:</b>&nbsp;&nbsp;" + maskData((transaction.price * transaction.totalShares), { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } }));

        flagsChart.push({ x: transaction.date, title: "B", text: textFlag.join("<br>") });
    });

    return { type: 'flags', data: flagsChart, onSeries: 'dataseries', shape: 'squarepin', width: 16 };
}

export function buildTrackBuySellPrice(buyPrice: number | undefined, sellPrice: number | undefined, fairValue: number | undefined) {

    let plotList = [];

    if (buyPrice !== undefined)
        plotList.push(buildPlotData(buyPrice, 'green', 'Price to buy ' + buyPrice));
    if (sellPrice !== undefined)
        plotList.push(buildPlotData(sellPrice, 'blue', 'Price to sell ' + buyPrice));
    if (fairValue !== undefined)
        plotList.push(buildPlotData(fairValue, 'orange', 'Fair value ' + fairValue));

    return {
        yAxis: {
            plotLines: plotList,
        }
    }
}

export const createChart = (chartTitle: string | undefined, series: [number, number][], chartFlags: FlagDataI[], rangeSelector?: number, extraOptions?: any) => {

    return {
        title: {
            text: chartTitle,
        },
        tooltip: {
            hideDelay: 100,
            formatter: function (this: any): any[] {


                let data = ["date: " + maskData(this.x, { maskType: MaskDataTypeEnum.DATE, maskDataProps: { format: "YYYY-MM-DD" } })
                    + "<br>" + "value: " + maskData(this.y, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2 } })];

                if (this.series.type == "flags") {
                    return data.concat("<br><br>" + [this.point.options.text]);
                }

                return data;
            },
            split: true,
        },
        rangeSelector: {
            selected: rangeSelector ?? 1,
        },
        series: [{
            data: series,
            id: 'dataseries'
        },
        { ...buildFlagsChartFromTransaction(chartFlags) },
        ], chart: {
            /*events: {
            load: function () {
              principalComponent.storeChartRef(principalComponent.refChart);
            }
          }*/
        },
        ...extraOptions
    }
}

export const buildChartSeries = (chartData: { close: number, date: number }[]) => {

    return chartData.map((issueHistoricalData) => {
        return [issueHistoricalData.date, issueHistoricalData.close];
    });
}