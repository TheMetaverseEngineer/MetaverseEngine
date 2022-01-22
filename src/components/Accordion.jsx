import Selector from "./Selector";
import { useState } from "react";
import {Box} from "@mui/material";

const Accordion = ({ title, options, selectedItem, handleSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button
        type="button"
        className={`bg-gray-300 py-2 px-4 flex items-center justify-between ${
          !options.length ? "pointer-events-none" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
        title={selectedItem.label}
      >
        <span className="truncate">
          {title}: {selectedItem.name}
        </span>
        <i className={`fas ${open ? "fa-minus" : "fa-plus"}`} />
      </button>
      <Box
        className="duration-500"
        maxHeight={open ? 200 : 0}
        height={open ? '100%' : 0}
        sx={{transition: "max-height 500ms ease-out, height 500ms ease-out"}}
      >
        <Selector
          options={options}
          selectedItem={selectedItem}
          handleSelect={handleSelect}
        />
      </Box>
    </div>
  );
};

export default Accordion;
