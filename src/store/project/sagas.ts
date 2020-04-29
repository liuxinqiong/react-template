import { takeLatest, put, call, fork } from 'redux-saga/effects';

import ProjectApi from '@/api/project';
import * as types from './types';

export interface GetProjectAction {
  type: typeof types.GET_PROJECT_REQUEST;
  payload: string;
}

function* getProject(action: GetProjectAction) {
  const currentProject = yield call(ProjectApi.getProjectById, action.payload);
  yield put({
    type: types.SET_CURRENT_PROJECT,
    payload: currentProject,
  });
}

function* watchGetProjectRequest() {
  yield takeLatest(types.GET_PROJECT_REQUEST, getProject);
}

export default [fork(watchGetProjectRequest)];
