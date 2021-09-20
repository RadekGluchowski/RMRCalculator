import { takeEvery, all, fork, put } from "redux-saga/effects";
import { ADD_STEP_TWO_USER_DATA, ADD_STEP_ONE_USER_DATA, calculateStepOneSummary, calculateStepTwoSummary } from '../Actions/steps.actions'

type CalculateSummaryAction = { type: string, payload: any }

function* calculateStepOneSummarySaga(action: CalculateSummaryAction) {
    let payload = action.payload
    yield put(calculateStepOneSummary({ payload }));
}

function* calculateStepTwoSummarySaga(action: CalculateSummaryAction) {
    let payload = action.payload
    yield put(calculateStepTwoSummary({ payload }));
}


function* watchOnStepSummarySaga() {
    yield takeEvery([ADD_STEP_ONE_USER_DATA], calculateStepOneSummarySaga);
    yield takeEvery([ADD_STEP_TWO_USER_DATA], calculateStepTwoSummarySaga);
}

export default function* stepSummarySaga() {
    yield all([fork(watchOnStepSummarySaga)]);
}
