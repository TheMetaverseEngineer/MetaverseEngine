import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../pages/categories/categoriesSlice";
import { selectRoom } from "../pages/rooms/roomsSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import noData from "../images/no_data.png";

const SearchRooms = ({ placeholder = "Lorem ipsum", id = "search" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value: rooms } = useSelector((state) => state.rooms);
  const { value: categories } = useSelector((state) => state.categories);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(rooms);

  const handleSearch = (e) => {
    const regex = new RegExp(e.target.value, "i");
    const filteredRooms = rooms.filter((room) => regex.test(room.name));
    setOptions(filteredRooms);
  };

  const handleSelect = (room) => {
    const category = categories.find(
      (category) => category.id === room.category_id
    );
    dispatch(selectCategory(category));
    dispatch(selectRoom(room));
    navigate("/rooms");
  };

  return (
    <div className="search-rooms flex sm:items-center gap-2 flex-wrap flex-col sm:flex-row">
      <label
        htmlFor={id}
        className="font-black text-2xl italic whitespace-nowrap self-start"
      >
        {placeholder}:
      </label>
      <div className="flex grow relative">
        <input
          autoComplete="off"
          placeholder={placeholder}
          id={id}
          type="text"
          className="shadow-[1px_0_6px_0_#737373_inset] w-full outline-none px-3 py-1.5 grow"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onInput={handleSearch}
        />
        <div className="bg-neutral-300 flex items-center shadow-[-1px_0_6px_0_#737373_inset] px-3 py-1 text-gray-600 shrink">
          <i className="fas fa-search" />
        </div>
        <div
          className={`absolute inset-x-0 overflow-y-auto top-full bg-white shadow-2xl z-50 ${
            open ? "py-2 max-h-[150px]" : "h-0"
          }`}
        >
          <ul>
            {options?.length ? (
              options.map((option, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="py-0.5 px-3 hover:bg-neutral-300 w-full text-left"
                    onMouseDown={() => handleSelect(option)}
                  >
                    {option.name}
                  </button>
                </li>
              ))
            ) : (
              <div className="px-3 select-none">NO DATA</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchRooms;
