import React, { FC } from "react";

const Menu: FC = () => (
  <div className="flex justify-between shadow-md h-auto py-4 px-4 md:px-8 bg-green-400 items-center sticky top-0">
    <h2 className="font-sans text-lg md:text-2xl text-white font-extrabold tracking-wide">
      Punk Beers.{" "}
      <span className="hidden md:inline-block text-base font-extralight tracking-normal">
        For real punks.
      </span>
    </h2>
    <div className="w-28 md:w-36">
      <ul className="flex justify-between list-none text-white text-sm md:text-base">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Favourites</li>
      </ul>
    </div>
  </div>
);

export default Menu;
