export const carbsInGrams = (totalKcal: number): number => {
    return Math.round(totalKcal * 0.6 / 4)
}