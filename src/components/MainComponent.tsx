import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlinePhoto, HiOutlineGif } from 'react-icons/hi2';
import { FaListUl } from 'react-icons/fa';
import { PiSmiley } from 'react-icons/pi';
import { MdOutlineSchedule } from 'react-icons/md';
import BorderBottom from '@/components/BorderBottom';

const MainComponent = () => {
  return (
    <main className="flex max-w-[55%] w-full h-full flex-col min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-600 relative">
      <h1 className="text-2xl font-bold p-6">Home</h1>
      <BorderBottom />
      <div className="flex relative p-6 py-2 mt-5 items-start space-x-2">
        <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
        <div className="flex flex-col w-full">
          <input
            className="w-full h-[5rem] bg-transparent placeholder:absolute placeholder:top-0 placeholder:text-2xl placeholder:font-light"
            type="text"
            placeholder="What's Happening?!"
            disabled
          />
          <div className="w-full flex justify-between items-center space-y-1">
            <div className="flex space-x-4">
              <div className="text-2xl text-primary">
                <HiOutlinePhoto />
              </div>
              <div className="text-2xl text-primary">
                <HiOutlineGif />
              </div>
              <div className="text-2xl text-primary">
                <FaListUl />
              </div>
              <div className="text-2xl text-primary">
                <PiSmiley />
              </div>
              <div className="text-2xl text-primary">
                <MdOutlineSchedule />
              </div>
              <div className="text-2xl text-primary">
                <SlLocationPin />
              </div>
            </div>

            <button className="rounded-3xl bg-primary py-3 px-5 text-md font-bold text-center hover:bg-opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <BorderBottom />
    </main>
  );
};

export default MainComponent;
