import { StepOneInterface } from "../../Interfaces/stepOneUserData.interface"

export const proteinsInGrams = (userData: StepOneInterface): number => {
    return Math.round(userData.weight * 1.6)
}

export const proteinsPercentOfTotalKcal = (totalKcal: number, userData: StepOneInterface): number => {
    return Math.round(((proteinsInGrams(userData) * 4) / totalKcal) * 100)
}
