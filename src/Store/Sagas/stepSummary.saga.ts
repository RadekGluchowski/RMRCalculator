import { takeEvery, all, fork, put } from "redux-saga/effects";
import { ADD_STEP_TWO_USER_DATA, ADD_STEP_ONE_USER_DATA, calculateStepOneSummary, calculateStepTwoSummary } from '../Actions/steps.actions'
import { stepOneCalculation } from '../../Core/Calculations/stepOneCalculations'
import { stepTwoCalculation } from "../../Core/Calculations/stepTwoCalculation";

type CalculateSummaryAction = { type: string, payload: any }

function* calculateStepOneSummarySaga(action: CalculateSummaryAction) {
    yield put(calculateStepOneSummary( stepOneCalculation(action.payload) ));
}

function* calculateStepTwoSummarySaga(action: CalculateSummaryAction) {
    yield put(calculateStepTwoSummary(stepTwoCalculation(action.payload) ));
}

function* watchOnStepSummarySaga() {
    yield takeEvery([ADD_STEP_ONE_USER_DATA], calculateStepOneSummarySaga);
    yield takeEvery([ADD_STEP_TWO_USER_DATA], calculateStepTwoSummarySaga);
}

export default function* stepSummarySaga() {
    yield all([fork(watchOnStepSummarySaga)]);
}
