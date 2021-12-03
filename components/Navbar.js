import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className="flex items-center flex-wrap bg-green-400 p-3 w-full">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              My Zodiac
            </span>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
