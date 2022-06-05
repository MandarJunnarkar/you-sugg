import ProfileCard from "../components/ProfileCard";

const TopPopular = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center mt-5">
        <div className="flex w-full justify-between">
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
