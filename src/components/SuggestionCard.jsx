import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const SuggestionCard = () => {
  return (
    <>
      <div className="bg-white w-full h-auto rounded">
        <div className="m-2 flex h-1/4 justify-between">
          <div className="flex items-center">
            <div className="rounded-full w-10 h-10">
              <img
                className="rounded-full"
                src={require("../images/mythpat.jpg")}
                alt=""
              />
            </div>
            <div className="ml-5">
              <h1>Mythpat</h1>
            </div>
          </div>
          <div className="flex flex-col text-gray-600 gap-3 mx-3">
            <ThumbUpOutlinedIcon />
            <ThumbDownOutlinedIcon />
          </div>
        </div>

        <div className="w-full h-3/4">
          <div className="m-6 bg-indigo-100 rounded h-fit">
            <p className="p-3 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              recusandae ipsum illo nulla perspiciatis eveniet, aliquid ducimus
              accusantium ex? Veritatis fugit non voluptates explicabo eos sit
              sapiente delectus, inventore quos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionCard;
