interface StockDataI {
    issueName: string,
    currentPriceDate?: number,
    currentPrice?: number,
    previousCloseDate?: number,
    previousClosePrice?: number,
    fairValue?: number,
    trackBuyPrice?: number
    trackSellPrice?: number
}

interface ChartStockResumeComponentPropsI {
    stockChartData: number[][],
    stockData: StockDataI,
    stockTransactionBuys: FlagDataI[]
}