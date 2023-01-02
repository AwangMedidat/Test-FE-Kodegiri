import { PHOTOS, SEARCH_PHOTO, DETAIL_PHOTO } from "./constant";

export const photos = () => {
  return {
    type: PHOTOS,
  };
};

export const searchPhoto = (data) => {
  console.warn("action is called", data);
  return {
    type: SEARCH_PHOTO,
    data,
  };
};

export const detailPhoto = (data) => {
  console.warn("action detail is called", data);
  return {
    type: DETAIL_PHOTO,
    data,
  };
};
