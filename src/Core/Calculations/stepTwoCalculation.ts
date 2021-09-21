import { StepTwoInterface } from "../../Interfaces/stepTwoUserData.interface";
import { ActivitiesData } from "../ActivitiesData/ActivitesData";


export const stepTwoCalculation = (payload: StepTwoInterface) => {
    let results = 0;
    payload.activities.forEach(activity => {
        for (const [, value] of Object.entries(ActivitiesData)) {
            if (activity.activityType === value.name) {
                results += activity.activityAmount * value.kcalPerHour
            }
        }

    })
    
    return Math.round(results / 7)
}