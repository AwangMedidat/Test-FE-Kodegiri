import { PHOTOS, SEARCH_PHOTO, DETAIL_PHOTO, SET_PHOTOS } from "./constant";

export const photos = (data = [], action) => {
  switch (action.type) {
    // case PHOTOS:
    //   console.warn("reducer called", action);
    //   return [action.data];
    case SET_PHOTOS:
      console.warn("reducer called 1", action);
      return [...action.data];
    case SEARCH_PHOTO:
      console.warn("reducer called 2", action);
      return [action.data];
    case DETAIL_PHOTO:
      console.warn("reducer called 3", action);
      return { ...data };

    default:
      return data;
  }
};
