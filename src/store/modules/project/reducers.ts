import { combineReducers } from 'redux';
import * as types from './types';

const initialState = {
  currentProject: null,
};

function currentProject(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case types.SET_CURRENT_PROJECT:
      return { ...state, currentProject: action.payload.currentProject };
    default:
      return state;
  }
}

export default combineReducers({ currentProject });
