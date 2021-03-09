import * as type from './types';

export function getMemes() {
  return {
    type: type.GET_MEMES_REQUESTED, 
  }
};  
