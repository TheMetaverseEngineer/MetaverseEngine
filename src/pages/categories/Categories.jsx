import React, { useState } from "react";
import SearchRooms from "../../components/SearchRooms";
import Selector from "../../components/Selector";
import glob from "../../images/glob.png";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import { selectCategory } from "./categoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

const Categories = () => {
  const dispatch = useDispatch();
  const { value: categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const [showModal, setShowModal] = useState(false);

  const handleSelectRegion = (payload) => {
    dispatch(selectCategory(payload));
  };

  return (
    <>
      <div className="wrapper flex min-h-screen sm:justify-center sm:items-center sm:px-5">
        <div className="card flex flex-col max-w-screen-md w-full shadow-[0_0_15px_0px_gray] rounded-lg">
          <Header />
          <div className="card-content sm:max-h-[500px] sm:h-[500px] flex-auto flex flex-col sm:flex-row sm:pl-10 sm:pr-7 p-6 sm:py-10 bg-neutral-100 gap-5 sm:gap-10 sm:rounded-b-lg">
            <div className="left-side w-[220px] hidden sm:block">
              <Selector
                options={categories}
                selectedItem={selectedCategory}
                handleSelect={handleSelectRegion}
              />
            </div>
            <div className="right-side flex-1 flex flex-col justify-center gap-6">
              <SearchRooms />
              <div className="flex sm:hidden">
                <Accordion
                  title="Categories"
                  options={categories}
                  selectedItem={selectedCategory}
                  handleSelect={handleSelectRegion}
                />
              </div>
              <img src={glob} alt="Glob" className="h-0 grow self-center" />
              <div className="flex flex-col sm:flex-row self-stretch sm:self-end gap-4 sm:gap-6 flex-[0_0_auto]">
                <Link
                  className="sm:w-24 text-center py-3 bg-white uppercase font-semibold shadow-[0_4px_10px_0px_gray]"
                  to={`/rooms`}
                  onClick={(e) => {
                    if (!selectedCategory) {
                      e.preventDefault();
                      alert("Please select a region");
                    }
                  }}
                >
                  Join
                </Link>
                <button
                  type="button"
                  className="sm:w-24 cursor-pointer text-center py-3 bg-primary uppercase font-semibold shadow-[0_4px_10px_0px_gray]"
                  onClick={() => setShowModal(true)}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} setShow={setShowModal} />
    </>
  );
};

export default Categories;
