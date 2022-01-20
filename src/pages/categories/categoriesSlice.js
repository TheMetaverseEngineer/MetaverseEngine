import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 0,
      name: "Region: America",
    },
    {
      id: 1,
      name: "Region: Africa",
    },
    {
      id: 2,
      name: "Region: Eurasia",
    },
    {
      id: 3,
      name: "Region: Australia",
    },
    {
      id: 4,
      name: "Region: Antarctica",
    },
    {
      id: 5,
      name: "Clothing",
    },
    {
      id: 6,
      name: "Clothing",
    },
    {
      id: 7,
      name: "Computers",
    },
    {
      id: 8,
      name: "Tools",
    },
    {
      id: 9,
      name: "Health",
    },
    {
      id: 10,
      name: "Books",
    },
    {
      id: 11,
      name: "Electronics",
    },
    {
      id: 12,
      name: "Shoes",
    },
    {
      id: 13,
      name: "Jewelery",
    },
    {
      id: 14,
      name: "Kids",
    },
    {
      id: 15,
      name: "Tools",
    },
    {
      id: 16,
      name: "Kids",
    },
    {
      id: 17,
      name: "Outdoors",
    },
    {
      id: 18,
      name: "Industrial",
    },
    {
      id: 19,
      name: "Outdoors",
    },
    {
      id: 20,
      name: "Jewelery",
    },
    {
      id: 21,
      name: "Industrial",
    },
    {
      id: 22,
      name: "Toys",
    },
    {
      id: 23,
      name: "Health",
    },
    {
      id: 24,
      name: "Shoes",
    },
    {
      id: 25,
      name: "Computers",
    },
    {
      id: 26,
      name: "Toys",
    },
    {
      id: 27,
      name: "Outdoors",
    },
    {
      id: 28,
      name: "Industrial",
    },
    {
      id: 29,
      name: "Automotive",
    },
    {
      id: 30,
      name: "Industrial",
    },
    {
      id: 31,
      name: "Automotive",
    },
    {
      id: 32,
      name: "Industrial",
    },
    {
      id: 33,
      name: "Games",
    },
    {
      id: 34,
      name: "Music",
    },
  ],
  selectedCategory: {},
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
