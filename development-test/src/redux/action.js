import { PHOTOS, SEARCH_PHOTO, DETAIL_PHOTO } from "./constant";

export const photos = () => {
  return {
    type: PHOTOS,
  };
};

export const searchPhoto = (data) => {
  return {
    type: SEARCH_PHOTO,
    data,
  };
};

export const detailPhoto = (data) => {
  return {
    type: DETAIL_PHOTO,
    data,
  };
};
