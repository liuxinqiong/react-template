import produce from 'immer';

import * as types from './types';
import { ProjectDO } from '@/models/project';

type ProjectState = {
  currentProject: ProjectDO | null;
};

const initialState: ProjectState = {
  currentProject: null,
};

function currentProject(state = initialState, action: { type: string; payload: any }) {
  return produce(state, draft => {
    switch (action.type) {
      case types.SET_CURRENT_PROJECT:
        draft.currentProject = action.payload;
        break;
      default:
        break;
    }
  });
}

export default currentProject;
