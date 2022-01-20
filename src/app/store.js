import { configureStore } from "@reduxjs/toolkit";
import roomsSlice from '../pages/rooms/roomsSlice';
import categoriesSlice from "../pages/categories/categoriesSlice";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    rooms: roomsSlice,
  },
});
