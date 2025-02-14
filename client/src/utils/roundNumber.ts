export function roundNumber(value : number, decimalPlaces : number = 1) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(value * factor) / factor;
}