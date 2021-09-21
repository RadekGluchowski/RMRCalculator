export const PersonalData = {
    AgeYoung: {
        type: "10 - 18",
        calculateValueMale: {
            times: 17.5,
            staticAdd: 651
        },
        calculateValueFemale: {
            times: 12.2,
            staticAdd: 746
        },
    },
    AgeMiddle: {
        type: "18 - 30",
        calculateValueMale: {
            times: 15.3,
            staticAdd: 679
        },
        calculateValueFemale: {
            times: 14.7,
            staticAdd: 496
        },
    },
    AgeOld: {
        type: "31 - 60+",
        calculateValueMale: {
            times: 11.6,
            staticAdd: 879
        },
        calculateValueFemale: {
            times: 8.7,
            staticAdd: 829
        },
    },
    SexMale: "Male",
    SexFemale: "Female",
    PersonTypeLowActive: {
        type: "lowActive",
        value: 1.4
    },
    PersonTypeMediumActive: {
        type: "mediumActive",
        value: 1.7
    },
    PersonTypeHightActive: {
        type: "hightActive",
        value: 2
    }
}