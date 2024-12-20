import { FlagDataI } from "@app/_types/utils/highChartsUtil";
import { MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { maskData } from "lib-components-react/lib/utils/dataUtils/maskDataUtil";

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

        textFlag.push("<b>Broker:</b> " + transaction.brokerDescription);
        textFlag.push("<b>Total shares:</b> " + transaction.totalShares);
        textFlag.push("<b>Currency:</b> " + transaction.typeCurrencyDescription);
        textFlag.push("<b>Buy price unity:</b>&nbsp;&nbsp;" + maskData(transaction.priceBuy, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } }));
        
        if (transaction.priceSell !== undefined && transaction.priceSell !== null)
            textFlag.push("<b>Sell price unity:</b>&nbsp;" + maskData(transaction.priceSell, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } }));
            
        textFlag.push("");

        textFlag.push("<b>------ TRANSACTION BUYS ------</b> ");
        textFlag.push("<b>Total buy:</b>&nbsp;&nbsp;" + maskData(transaction.priceTotalBuy, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } }));

        if (transaction.priceSell !== undefined && transaction.priceSell !== null) {
            textFlag.push("");
            textFlag.push("<b>------ TRANSACTION SELLS ------</b> ");
            textFlag.push("<b>Sell date:</b>&nbsp;&nbsp;" + maskData(transaction.dateSell, { maskType: MaskDataTypeEnum.DATE, maskDataProps: { format: "YYYY-MM-DD" } }));
            textFlag.push("<b>Total Sell:</b>&nbsp;&nbsp;" + maskData(transaction.priceTotalSell, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } }));
        }


        flagsChart.push({ x: transaction.dateBuy, title: "B", text: textFlag.join("<br>") });
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