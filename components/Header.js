import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header
      className={
        "flex justify-between flex-col sm:flex-row m-5 items-center h-auto"
      }
    >
      <div className={"flex flex-grow justify-evenly max-w-2xl"}>
        <HeaderItems Icon={HomeIcon} title="HOME" />
        <HeaderItems Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItems Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItems Icon={CollectionIcon} title="COLLECTOIN" />
        <HeaderItems Icon={SearchIcon} title="SEARCH" />
        <HeaderItems Icon={UserIcon} title="ACCOUNT" />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
<<<<<<< HEAD
        alt='logo'
=======
>>>>>>> 82e46c11347a117223c5f73eeb3ad4f5655fcaf4
      />
    </header>
  );
}

export default Header;
