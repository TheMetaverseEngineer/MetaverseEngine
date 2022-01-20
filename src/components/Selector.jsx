const Selector = ({ options, selectedItem, handleSelect }) => {
  return (
    <div className="selector overflow-y-scroll bg-[#878787] max-h-full h-full">
      <ul className="py-3">
        {options?.length
          ? options.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`hover:bg-neutral-300 w-full px-5 py-0.5 text-left ${
                    selectedItem === item && "bg-neutral-300"
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item.name}
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Selector;
