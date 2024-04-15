export function calculateGainLossPercentage(priceBase: number, priceCalculate: number) {

    return ((priceCalculate * 100) / priceBase) - 100;
}