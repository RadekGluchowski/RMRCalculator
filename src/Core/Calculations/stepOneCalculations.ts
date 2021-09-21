import { StepOneInterface } from "../../Interfaces/stepOneUserData.interface";
import { PersonalData } from "../PersonalData/PersonalData";

export const stepOneCalculation = (payload: StepOneInterface) => {
    let results = 0;
    const ageData = [PersonalData.AgeYoung, PersonalData.AgeMiddle, PersonalData.AgeOld]
        .filter(ageRange => ageRange.type === payload.age)

    if (payload.sex === PersonalData.SexMale) {
        results = payload.weight * ageData[0].calculateValueMale.times + ageData[0].calculateValueMale.staticAdd
    } else {
        results = payload.weight * ageData[0].calculateValueFemale.times + ageData[0].calculateValueFemale.staticAdd
    }

    switch (payload.personType) {
        case PersonalData.PersonTypeLowActive.type:
            return results *= PersonalData.PersonTypeLowActive.value
        case PersonalData.PersonTypeMediumActive.type:
            return results *= PersonalData.PersonTypeMediumActive.value
        case PersonalData.PersonTypeHightActive.type:
            return results *= PersonalData.PersonTypeHightActive.value
    }

    return Math.round(results)
}