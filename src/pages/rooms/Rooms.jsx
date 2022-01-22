import Header from "../../components/Header";
import Selector from "../../components/Selector";
import SearchRooms from "../../components/SearchRooms";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Accordion from "../../components/Accordion";
import { selectCategory } from "../categories/categoriesSlice";
import { selectRoom } from "./roomsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import {Link} from "react-router-dom";

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
    <div style={{borderRadius: "0 0 15px 15px"}} className="card-content flex flex-col sm:flex-row pt-7 px-2.5 pb-0 sm:p-7 bg-gray-100 gap-7">
      <Box
        bgcolor="#3C3C3C"
        maxWidth={{ sm: 300 }}
        className="left-side p-2.5 sm:p-5 -mx-2.5 sm:mx-0 sm:rounded shrink order-2 sm:order-none"
      >
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
            className="outline-none resize-none w-full px-2 py-1 rounded mb-2"
          />
          <div className="flex flex-col xs:flex-row gap-3">
            <input
              name="input"
              className="outline-none w-full px-2 py-1 rounded"
            />
            <input
              type="submit"
              className="text-white uppercase bg-primary px-3 py-1 cursor-pointer"
              style={{ boxShadow: "-3px 5px 10px 0 #333" }}
              value="Sumbit"
            />
          </div>
        </form>
        <p className="text-xs text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          ducimus.
        </p>
      </Box>
      <div className="right-side flex flex-col flex-grow gap-5">
        <SearchRooms />
        <Box
          maxHeight={{ lg: 350 }}
          className="flex flex-col lg:flex-row gap-3 lg:gap-5"
        >
          <div style={{ flex: "1 0 0" }} className="flex flex-col relative">
            {largeScreen ? (
              <>
                <div className="mb-1">Categories:</div>
                <Selector
                  options={categories}
                  selectedItem={selectedCategory}
                  handleSelect={handleSelectCategory}
                />
                <div className="absolute top-full right-0">
                  {selectedCategory.name}
                </div>
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
          <div style={{ flex: "1 0 0" }} className="flex flex-col">
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
        </Box>
        <div className="flex flex-col sm:flex-row sm:self-end gap-4 sm:gap-6">
          <Link
            style={{ boxShadow: "0 4px 10px 0 gray" }}
            className="sm:w-24 text-center py-3 bg-white uppercase font-semibold rounded"
            to="/login"
          >
            Join
          </Link>
          <button
            style={{ boxShadow: "0 4px 10px 0 gray" }}
            type="button"
            className="sm:w-24 py-3 bg-primary uppercase font-semibold rounded"
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
      <div
        style={{ maxWidth: 900, boxShadow: "0 0 15px 0px gray", borderRadius: 15 }}
        className="card flex flex-col w-full"
      >
        <Header />
        <CardContent />
      </div>
    </div>
  );
};

export default Rooms;
