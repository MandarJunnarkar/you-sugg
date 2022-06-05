import React from "react";
import { Link } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ProfileCard = ({ data }) => {
  return (
    <>
      <Link to="/suggestions">
      <div className="bg-white h-72 w-64 rounded flex flex-col items-center gap-5">
        <div className="mt-5 w-40 h-40 rounded-full">
          <img
            className="rounded-full"
            src={require(`../images/carryminati.jpg`)}
            alt=""
          />
        </div>
        <div className="bg-gray-100 w-full h-full rounded-b text-center text-lg">
          <h1>Carryminati</h1>
          <div className="w-full">
            <StarOutlineIcon />
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default ProfileCard;
