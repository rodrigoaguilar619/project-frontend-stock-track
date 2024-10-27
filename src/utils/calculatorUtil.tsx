export function calculateGainLossPercentage(priceBase: number, priceCalculate: number) {

    return ((priceCalculate - priceBase) / priceBase) * 100;
}