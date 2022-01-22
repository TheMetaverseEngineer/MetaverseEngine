import React, { useState } from "react";
import SearchRooms from "../../components/SearchRooms";
import Selector from "../../components/Selector";
import glob from "../../images/glob.png";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import { selectCategory } from "./categoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Modal from "../../components/Modal";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useMoralis();
  const { value: categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const [showModal, setShowModal] = useState(false);

  const handleSelectCategory = (payload) => {
    dispatch(selectCategory(payload));
  };

  const handleJoinClick = () => {
    if (!isAuthenticated) setShowModal(true);
    else navigate("/rooms");
  };

  const handleCreateClick = () => {
    if (!isAuthenticated) setShowModal(true);
    else navigate("/rooms");
  };

  return (
    <>
      <div className="wrapper flex min-h-screen sm:justify-center sm:items-center sm:px-5">
        <Box
          className="card flex flex-col max-w-screen-md w-full"
          borderRadius={{ sm: "15px" }}
          boxShadow="0 0 15px 0px gray"
        >
          <Header />
          <Box
            style={{ borderRadius: "0 0 15px 15px" }}
            className="card-content flex-auto flex flex-col sm:flex-row sm:pl-10 sm:pr-7 p-6 sm:py-10 bg-gray-100 gap-5 sm:gap-10"
            maxHeight={{ sm: 500 }}
            height={{ sm: 500 }}
          >
            <div style={{ width: 220 }} className="left-side hidden sm:block">
              <Selector
                options={categories}
                selectedItem={selectedCategory}
                handleSelect={handleSelectCategory}
              />
            </div>
            <div className="right-side flex-1 flex flex-col justify-center gap-6">
              <SearchRooms />
              <div className="flex sm:hidden">
                <Accordion
                  title="Categories"
                  options={categories}
                  selectedItem={selectedCategory}
                  handleSelect={handleSelectCategory}
                />
              </div>
              <div className="h-0 flex-grow relative flex justify-center items-center">
                <img src={glob} alt="Glob" className="max-h-full" />
              </div>
              <div
                style={{ flex: "0 0 auto" }}
                className="flex flex-col sm:flex-row self-stretch sm:self-end gap-4 sm:gap-6"
              >
                <button
                  className="sm:w-24 text-center py-3 bg-white uppercase font-semibold rounded"
                  style={{ boxShadow: "0 4px 10px 0 gray" }}
                  onClick={handleJoinClick}
                >
                  Join
                </button>
                <button
                  type="button"
                  className="sm:w-24 cursor-pointer text-center py-3 bg-primary uppercase font-semibold rounded"
                  style={{ boxShadow: "0 4px 10px 0px gray" }}
                  onClick={handleCreateClick}
                >
                  Create
                </button>
              </div>
            </div>
          </Box>
        </Box>
      </div>
      <Modal show={showModal} setShow={setShowModal} />
    </>
  );
};

export default Categories;
