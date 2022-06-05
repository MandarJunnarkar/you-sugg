import React from "react";
import Suggest from "../components/Suggest";
import SuggestionCard from "../components/SuggestionCard";

const Suggestions = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full mt-5">
          <h1 className="text-xl ml-5">#Suggestions</h1>
        </div>

        <div className="px-10">
            <Suggest />
        </div>

        <div className="grid grid-cols-1 px-10">
            <SuggestionCard />
        </div>
      </div>
    </>
  );
};

export default Suggestions;
