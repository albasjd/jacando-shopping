import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/all";

import { ProductsCategory } from "../../types/ProductsCategory";
import { useActiveMenu } from "../../store/appStore";
import { useCurrentColor, useScreenSize } from "../../store/themeStore";

import JacandoLogo from "./JacandoLogo";

export default function Sidebar() {
  const screenSize = useScreenSize((state) => state.screenSize);
  const activeMenu = useActiveMenu(state => state.activeMenu);
  const setActiveMenu = useActiveMenu(state => state.setActiveMenu);
  const currentColor = useCurrentColor((state) => state.currentColor);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize! <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <JacandoLogo />
            </Link>
            <>
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </>
          </div>

          <div className="mt-10 ">
            <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
              Products
            </p>
            {ProductsCategory.map((item) => (
              <NavLink
                key={item.name}
                to={`/${item.link}`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {item.icon}
                <span className="capitalize ">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
