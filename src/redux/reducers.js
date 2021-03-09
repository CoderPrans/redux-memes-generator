import * as type from './types';
import {combineReducers} from 'redux';

const initialState = {
  memes: [],
  loading: false,
  error: null
};

function memes(state = initialState, action) {
  switch(action.type) {
    case type.GET_MEMES_REQUESTED:
      console.log('requested dispatched')
      return {
        ...state,
        loading: true,
      }
    case type.GET_MEMES_SUCCESS:
      return {
        ...state,
        loading: false,
        memes: action.memes
      }
    case type.GET_MEMES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({memes});

export default rootReducer;
