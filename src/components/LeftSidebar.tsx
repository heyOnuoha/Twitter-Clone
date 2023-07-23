import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsTwitter, BsBookmark, BsBell, BsThreeDots } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: HiEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];
const LeftSidebar = () => {
  return (
    <section className="max-w-[20%] w-full flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-5 my-4 px-4">
        {NAVIGATION_ITEMS.map(item => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-center space-x-4 w-fit rounded-3xl p-2 px-6"
            href={`$/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== 'Twitter' && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full bg-primary py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex justify-between items-center space-x-2 m-4 p-4 bg-transparent text-center hover:bg-white/10 transition duration-200">
        <div className="flex  items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm flex flex-col">
            <div className="font-semibold"> Club Of Coders</div>
            <div className="text-xs">@clubofcoderscom</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
