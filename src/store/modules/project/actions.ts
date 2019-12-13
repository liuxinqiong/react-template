import * as types from './types';

export function getProject(projectId: string) {
  return {
    type: types.GET_PROJECT_REQUEST,
    payload: projectId,
  };
}
