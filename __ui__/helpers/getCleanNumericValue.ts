export function getCleanNumericValue(priceText: string): number {
    const cleanPriceStr = priceText.replace(/[^\d.]/g, '');
    const price = parseFloat(cleanPriceStr);
    return price;
}
