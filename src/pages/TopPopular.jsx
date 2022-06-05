import ProfileCard from "../components/ProfileCard";
import SearchIcon from '@mui/icons-material/Search';


const TopPopular = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center mt-5">
        <div className="flex w-1/2 px-10">
          <input type="text" placeholder="Search for a youtuber..." className="outline-none bg-inherit w-full border-b-2 border-black" />
        <SearchIcon className="hover:text-indigo-600"/>
        </div>

        <div className="flex w-full justify-between mt-5">
          <h1 className="ml-10 text-xl text-black">Popular Youtubers</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-10 mt-10 gap-5">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default TopPopular;
