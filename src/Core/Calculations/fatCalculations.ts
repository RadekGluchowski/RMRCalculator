export const fatInGrams = (totalKcal: number, fatPercentOfTotalKcal: number): number => {
    return Math.round(fatPercentOfTotalKcal / 100 * totalKcal / 9)
}

export const fatPercentOfTotalKcal = (proteinsPercentOfTotalKcal: number): number => {
    return 40 - proteinsPercentOfTotalKcal
}