import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Selector from "../../components/Selector";
import SearchRooms from "../../components/SearchRooms";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Accordion from "../../components/Accordion";
import { selectCategory } from "../categories/categoriesSlice";
import { selectRoom } from "./roomsSlice";
import { useSelector, useDispatch } from "react-redux";

const CardContent = () => {
  const largeScreen = useMediaQuery("(min-width: 1024px)");
  const dispatch = useDispatch();
  const { value: categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const { value: rooms, selectedRoom } = useSelector((state) => state.rooms);
  const filteredRooms = rooms.filter(
    (room) => room.category_id === selectedCategory.id
  );

  const handleSelectCategory = (payload) => {
    dispatch(selectCategory(payload));
    dispatch(selectRoom({}));
  };

  const handleSelectRoom = (payload) => {
    dispatch(selectRoom(payload));
  };

  return (
    <div className="card-content flex flex-col sm:flex-row pt-7 px-2.5 pb-0 sm:p-7 bg-neutral-100 gap-7 sm:rounded-b-lg">
      <div className="left-side bg-[#3C3C3C] p-2.5 sm:p-5 -mx-2.5 sm:mx-0 sm:max-w-[300px] sm:rounded shrink order-2 sm:order-none">
        <h2 className="text-4xl text-white font-black italic mb-3">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className="text-white mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          doloribus explicabo harum itaque laborum maiores nihil quas quo
          tenetur, veniam.
        </p>
        <form className="bg-primary p-5 mb-3">
          <textarea
            name="text"
            className="outline-none resize-none w-full px-2 py-1 rounded mb-1"
          />
          <div className="flex flex-col xs:flex-row gap-3">
            <input
              name="input"
              className="outline-none w-full px-2 py-1 rounded"
            />
            <input
              type="submit"
              className="text-white uppercase bg-primary px-3 py-1 shadow-[-3px_5px_10px_0_#333] cursor-pointer"
            />
          </div>
        </form>
        <p className="text-xs text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          ducimus.
        </p>
      </div>
      <div className="right-side flex flex-col grow gap-5">
        <SearchRooms />
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:max-h-[350px]">
          <div className="flex flex-col flex-[1_0_0] relative">
            {largeScreen ? (
              <>
                <div className="mb-1">Categories:</div>
                <Selector
                  options={categories}
                  selectedItem={selectedCategory}
                  handleSelect={handleSelectCategory}
                />
                <div className="absolute top-full right-0">{selectedCategory.name}</div>
              </>
            ) : (
              <Accordion
                title="Categories"
                options={categories}
                selectedItem={selectedCategory}
                handleSelect={handleSelectCategory}
              />
            )}
          </div>
          <div className="flex flex-col flex-[1_0_0]">
            {largeScreen ? (
              <>
                <div className="mb-1">Rooms:</div>
                <Selector
                  options={filteredRooms}
                  selectedItem={selectedRoom}
                  handleSelect={handleSelectRoom}
                />
              </>
            ) : (
              <Accordion
                title="Rooms"
                options={filteredRooms}
                selectedItem={selectedRoom}
                handleSelect={handleSelectRoom}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:self-end gap-4 sm:gap-6">
          <button
            type="button"
            className="sm:w-24 py-3 bg-white uppercase font-semibold shadow-[0_4px_10px_0px_gray]"
          >
            Join
          </button>
          <button
            type="button"
            className="sm:w-24 py-3 bg-primary uppercase font-semibold shadow-[0_4px_10px_0px_gray]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="wrapper flex min-h-screen sm:justify-center sm:items-center sm:px-5 sm:py-10">
      <div className="card flex flex-col max-w-[900px] w-full shadow-[0_0_15px_0px_gray] rounded-lg">
        <Header />
        <CardContent />
      </div>
    </div>
  );
};

export default Rooms;
