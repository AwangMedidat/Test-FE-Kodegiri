import { takeEvery, put } from "redux-saga/effects";
import client from "../axios";
import { PHOTOS, SET_PHOTOS } from "./constant";
const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID

function* getPhotos() {
  let { data } = yield client.get(
    `/photos/?client_id=${REACT_APP_CLIENT_ID}`
  );
  data = yield data;
  console.warn("get photos saga called", data);
  yield put({type: SET_PHOTOS,data})
}

function* saga() {
  yield takeEvery(PHOTOS, getPhotos);
}

export default saga;
