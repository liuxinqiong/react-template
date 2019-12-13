import { takeLatest, put } from 'redux-saga/effects';

import * as types from './types';

export interface GetProjectAction {
  type: typeof types.GET_PROJECT_REQUEST;
  payload: string;
}

function* getProject(action: GetProjectAction) {
  yield put({
    type: types.GET_PROJECT_REQUEST,
    payload: action.payload,
  });
}

function* watchGetProjectRequest() {
  yield takeLatest(types.GET_PROJECT_REQUEST, getProject);
}

export default [watchGetProjectRequest];
