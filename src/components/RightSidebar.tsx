import { BsSearch } from 'react-icons/bs';
const RightSidebar = () => {
  return (
    <section className="max-w-[25%] w-full flex flex-col items-stretch h-screen right-0 p-6">
      <div className="flex rounded-full space-x-4 px-7 py-2 items-center bg-slate-700 p-3 sticky">
        <div className="text-gray-300">
          <BsSearch />
        </div>
        <input
          type="text"
          placeholder="Search Twitter"
          className="text-gray-300 bg-transparent outline-none border-none"
        />
      </div>
    </section>
  );
};

export default RightSidebar;
