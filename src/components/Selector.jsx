const Selector = ({ options, selectedItem, handleSelect }) => {
  return (
    <div
      style={{ backgroundColor: "#878787" }}
      className="selector overflow-y-scroll max-h-full flex-grow"
    >
      <ul className="py-3">
        {options?.length
          ? options.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`hover:bg-gray-400 w-full px-5 py-0.5 text-left text-white ${
                    selectedItem === item && "bg-primary"
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
