import { PHOTOS, SEARCH_PHOTO, DETAIL_PHOTO } from "./constant";
import client from "../axios";

export const photos = async () => {
  let { data } = await client.get(
    "/photos/?client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4"
  );
  data = await data.json();
  console.log(data, "<<<< jalan");
  return {
    type: PHOTOS,
    data,
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
