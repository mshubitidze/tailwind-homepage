import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }
  return (
    <nav className="flex items-center flex-row justify-between my-8 md:my-12">
      <a href="/">
        <img src="./images/logo.svg"></img>
      </a>
      <div className="flex flex-row gap-12 text-gray-500 text-xl">
        <a className="hidden lg:block hover:text-blueGray" href="">
          Home
        </a>
        <a className="hidden lg:block hover:text-blueGray" href="">
          New
        </a>
        <a className="hidden lg:block hover:text-blueGray" href="">
          Popular
        </a>
        <a className="hidden lg:block hover:text-blueGray" href="">
          Trending
        </a>
        <a className="hidden lg:block hover:text-blueGray" href="">
          Categories
        </a>
      </div>
      <div onClick={toggleMenu} className="lg:hidden cursor-pointer block">
        {!menu ? (
          <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
              <path d="M0 0h40v3H0z" />
            </g>
          </svg>
        ) : (
          <>
            <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
              <g fill="#00001A" fill-rule="evenodd">
                <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
              </g>
            </svg>
            <div className="bg-white border-2 border-blueGray gap-2 text-blueGray px-10 py-6 text-lg flex flex-col absolute -translate-x-[8.6rem] translate-y-4">
              <a className="hover:text-blueGray" href="">
                Home
              </a>
              <div className="h-[0.5px] bg-blueGray"></div>
              <a className="hover:text-blueGray" href="">
                New
              </a>
              <div className="h-[0.5px] bg-blueGray"></div>
              <a className="hover:text-blueGray" href="">
                Popular
              </a>
              <div className="h-[0.5px] bg-blueGray"></div>
              <a className="hover:text-blueGray" href="">
                Trending
              </a>
              <div className="h-[0.5px] bg-blueGray"></div>
              <a className="hover:text-blueGray" href="">
                Categories
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
