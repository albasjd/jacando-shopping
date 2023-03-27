import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useActiveMenu, useOpenCart } from "../../store/appStore";
import { useCurrentColor, useScreenSize } from "../../store/themeStore";
import { NavButton } from "./NavButton";

const Navbar = () => {
  const screenSize = useScreenSize(state => state.screenSize);
  const setScreenSize = useScreenSize(state => state.setScreenSize);
  const activeMenu = useActiveMenu(state => state.activeMenu);
  const setActiveMenu = useActiveMenu(state => state.setActiveMenu);
  const toggleOpen = useOpenCart(state => state.toggleOpen);
  const currentColor = useCurrentColor((state) => state.currentColor);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize! <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        onClick={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          onClick={toggleOpen}
          color={currentColor}
          icon={<FiShoppingCart />}
        />

        <>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img
              className="rounded-full w-8 h-8"
              src="https://i.pravatar.cc/300"
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">João</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </>
      </div>
    </div>
  );
};

export default Navbar;
