import { FlagDataI } from "@app/_types/utils/highChartsUtil";
import { MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { maskData } from "lib-components-react/lib/utils/dataUtils/maskDataUtil";

const dataseriesDailyValueName = "dataseriesDailyValue";
const dataseriesFairValueName = "dataseriesFairValue";
const dataSeriesValueFormat = { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2 } };
const dataSeriesCurrencyValueFormat = { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSymbolCurrency: true, addSeparateComma: true } };

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
        let textPriceUnity = [];

        textFlag.push("<b>Broker:</b> " + transaction.brokerDescription);
        textFlag.push("<b>Total shares:</b> " + transaction.totalShares);
        textFlag.push("<b>Currency:</b> " + transaction.typeCurrencyDescription);
        textPriceUnity.push('<div style="float: left; width: 70px;">' + "<b>Buy price unity:</b></div><div>" + maskData(transaction.priceBuy, dataSeriesCurrencyValueFormat) + '</div>');
        
        if (transaction.priceSell !== undefined && transaction.priceSell !== null)
            textPriceUnity.push('<div style="float: left; width: 70px;">' + "<b>Sell price unity:</b></div><div>" + maskData(transaction.priceSell, dataSeriesCurrencyValueFormat) + '</div>');
        
        textFlag.push(textPriceUnity.join(""));
        textFlag.push("");

        textFlag.push("<b>------ TRANSACTION BUYS ------</b> ");
        textFlag.push("<b>Total buy:</b>&nbsp;&nbsp;" + maskData(transaction.priceTotalBuy, dataSeriesCurrencyValueFormat));

        if (transaction.priceSell !== undefined && transaction.priceSell !== null) {
            textFlag.push("");
            textFlag.push("<b>------ TRANSACTION SELLS ------</b> ");
            textFlag.push("<b>Sell date:</b>&nbsp;&nbsp;" + maskData(transaction.dateSell, { maskType: MaskDataTypeEnum.DATE, maskDataProps: { format: "YYYY-MM-DD" } }));
            textFlag.push("<b>Total Sell:</b>&nbsp;&nbsp;" + maskData(transaction.priceTotalSell, dataSeriesCurrencyValueFormat));
        }


        flagsChart.push({ x: transaction.dateBuy, title: "B", text: textFlag.join("<br>") });
    });

    return { type: 'flags', data: flagsChart, onSeries: dataseriesDailyValueName, shape: 'squarepin', width: 16 };
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

export const createChart = (chartTitle: string | undefined, seriesDailyValue: [number, number][], seriesFairValue: [number, number][], chartFlags: FlagDataI[], rangeSelector?: number, extraOptions?: any) => {

    return {
        title: {
            text: chartTitle,
        },
        tooltip: {
            hideDelay: 100,
            useHTML: true,
            formatter: function (this: any): string {

                let tooltipData: string[][] = [];
                let textData: string [] = [];

                let dateData = "<div style='paddingBottom: 2px;'>Date: " + maskData(this.x, { maskType: MaskDataTypeEnum.DATE, 
                    maskDataProps: { format: "YYYY-MM-DD" } }) + "</div>";

                // Check if 'points' exists (shared tooltip scenario) and iterate over it
                if (this.points) {
                    this.points.forEach((point: any) => {
                        tooltipData.push([point.series.name + ": ", maskData(point.y, dataSeriesValueFormat)]);
                    });
            
                    // For flag series, add specific point options text if available
                    if (this.points.some((p: any) => p.series.type === "flags")) {

                        this.points.forEach((point: any) => {
                            if (point.series.type === "flags" && point.point.options?.text) {

                                tooltip += point.point.options.text + "<br>";
                                textData.push(point.point.options.text);

                            }
                        });
                    }
                } else {
            
                    tooltipData.push(["Daily value: ", maskData(this.y, dataSeriesValueFormat)]);
            
                    // For flags, add the specific text
                    if (this.series.type === "flags" && this.point.options?.text) {
                        textData.push(this.point.options.text);
                    }
                }

                let tooltip = `<div style="text-align: left; width: 100%; padding-right: 5px;">` + dateData + `</div>` + `<div style="">`;
                tooltipData.forEach((item) => {
                    tooltip += `<div style="float: left; width: 50px;">${item[0]}</div><div style="">${item[1]}</div>`;
                });
                tooltip += `</div>`;

                if(textData.length > 0)
                    tooltip += `<br><br><div>` + textData.join("<br>") + `</div>`;
            
                return tooltip;
            },
            shared: true,
            crosshairs: true
        },
        rangeSelector: {
            selected: rangeSelector ?? 1,
        },
        series: [{
            data: seriesDailyValue,
            id: dataseriesDailyValueName,
            name: 'Daily value',
        },
        {
            data: seriesFairValue,
            id: dataseriesFairValueName,
            color: 'orange',
            lineWidth: 3,
            name: 'Fair value',
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

export const buildChartSeriesDailyValue = (chartData: { close: number, date: number }[]) => {

    return chartData.map((issueHistoricalData) => {
        return [issueHistoricalData.date, issueHistoricalData.close];
    });
}

export const buildChartSeriesFairValue = (chartData: { fairValue: number, date: number }[]) => {

    return chartData.map((issueHistoricalData) => {
        return [issueHistoricalData.date, issueHistoricalData.fairValue];
    });
}