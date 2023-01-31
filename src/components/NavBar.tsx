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
          <div className="w-10">
            <img src="./images/icon-menu.svg" alt="menu" />
          </div>
        ) : (
          <>
            <div className="w-10 h-10">
              <img
                className="pb-4"
                src="./images/icon-menu-close.svg"
                alt="menu"
              />
            </div>
            <div className="bg-white border-2 border-blueGray gap-2 text-blueGray px-10 py-6 text-lg flex flex-col absolute -translate-x-36">
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
