import { SEARCH_PHOTO, DETAIL_PHOTO, SET_PHOTOS } from "./constant";

export const photos = (data = [], action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return [...action.data];
    case SEARCH_PHOTO:
      return [action.data];
    case DETAIL_PHOTO:
      return { ...data };

    default:
      return data;
  }
};
