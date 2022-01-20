import Selector from "./Selector";
import { useState } from "react";

const Accordion = ({ title, options, selectedItem, handleSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button
        type="button"
        className={`bg-neutral-300 py-2 px-4 flex items-center justify-between ${
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
      <div
        className={`${
          open ? "max-h-[200px]" : "max-h-0"
        } transition-[max-height] duration-500`}
      >
        <Selector
          options={options}
          selectedItem={selectedItem}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default Accordion;
