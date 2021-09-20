import { all, fork } from "redux-saga/effects";
import stepSummarySaga from "./stepSummary.saga";

export default function* rootSaga() {
  yield all([fork(stepSummarySaga)]);
}
