import React from "react";
import { Link } from "react-router-dom";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const Sidebar = () => {
  return (
    <>
      <div className="w-56 h-max min-h-screen bg-white pb-3 hidden md:block">
        <nav className="ml-2 flex flex-col gap-4">
          <ul className="ml-3 mt-6 flex flex-col gap-6">
            <li><Link to="/"><WorkspacePremiumIcon />Popular</Link></li>
            <li><StarOutlineIcon />Favourites</li>
            <li><TouchAppIcon />Subscribed</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
