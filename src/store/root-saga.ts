import { all } from 'redux-saga/effects';
import projectSagas from './modules/project/sagas';

export default function* rootSaga() {
  yield all([...projectSagas]);
}
