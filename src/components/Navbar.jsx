import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="h-14 bg-indigo-600 flex items-center justify-between">
        <div className="ml-10 text-white">
          <span>YouSuggest</span>
        </div>

        <nav className="mr-10 text-white">
          <ul className="flex gap-10 list-none">
            <li><Link to="/"><SearchIcon /></Link></li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
