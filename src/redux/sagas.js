import {all, call, put, takeEvery} from 'redux-saga/effects';

const apiUrl = 'https://api.imgflip.com/get_memes';
const postUrl = 'https://api.imgflip.com/caption_image';

function getApi() {
  console.log('getting api')
  return fetch(apiUrl)
    .then(res => res.json())
    .catch(err => {throw err});
}

function postApi(formdata) {
  return fetch(postUrl, {
    method: 'POST',
    body: formdata
  }).then(res => res.json())
    .catch(err => {throw err});
} 

function* fetchMemes(action) {
  try {
    const memes = yield call(getApi);
    yield put({type: 'GET_MEMES_SUCCESS', memes: memes});
  } catch (e) {
    yield put({type: 'GET_MEMES_FAILED', message: e.message});
  }
}

function* memeSaga() {
  yield takeEvery('GET_MEMES_REQUESTED', fetchMemes);
}

function* postCaption(action) {
  try {
    const result = yield call(postApi, action.payload);
    yield put({type: 'SUBMIT_CAPTION_SUCCESS', response: result});
  } catch (e) {
    yield put({type: 'SUBMIT_CAPTION_FAILURE', response: e.message});
  }
}

function* captionSaga() {
  yield takeEvery('SUBMIT_CAPTION', postCaption);
}

export default function* rootSaga() {
  yield all([
    memeSaga(),
    captionSaga()
  ])
}


