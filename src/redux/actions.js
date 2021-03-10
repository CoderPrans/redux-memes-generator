import * as type from './types';

export function getMemes() {
  return {
    type: type.GET_MEMES_REQUESTED, 
  }
};  

export function incPage(page) {
  return {
    type: type.INC_PAGE,
    payload: page + 1
  }
}

export function decPage(page) {
  return {
    type: type.DEC_PAGE,
    payload: page - 1
  }
}
