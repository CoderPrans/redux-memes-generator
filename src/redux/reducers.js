import * as type from './types';
import {combineReducers} from 'redux';

const initialState = {
  memes: [],
  loading: false,
  error: null,
  page: 1,
  editing: null
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

function pagination(state = initialState, action) {
  switch(action.type) {
    case type.INC_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case type.DEC_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
}

function editor(state = initialState, action) {
  switch(action.type) {
    case type.EDIT_MEME:
      return {
        ...state,
        editing: action.payload
      }
    case type.CLOSE_EDITOR:
      return {
        ...state,
        editing: null
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({memes, pagination, editor});

export default rootReducer;
