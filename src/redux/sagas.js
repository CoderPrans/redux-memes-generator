import {all, call, put, takeEvery} from 'redux-saga/effects';

const apiUrl = 'https://api.imgflip.com/get_memes';

function getApi() {
  console.log('getting api')
  return fetch(apiUrl)
    .then(res => res.json())
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

export default function* rootSaga() {
  yield all([
    memeSaga(),
  ])
}


