import { Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/all";

import Sidebar from "./components/Navigation/Sidebar";
import Navbar from "./components/Navigation/Navbar";
import {
  useCurrentColor,
  useCurrentMode,
  useThemeSettings,
} from "./store/themeStore";
import { useActiveMenu } from "./store/appStore";
import ThemeSettings from "./components/ThemeSettings";
import Home from "./pages/Home";
import { ProductsCategory } from "./types/ProductsCategory";
import { NotFound } from "./pages/NotFound/NotFound";
import Products from "./pages/Products";

import "./App.css";
import CartModal from "./pages/CartModal";

function App() {
  const currentColor = useCurrentColor((state) => state.currentColor);
  const currentMode = useCurrentMode((state) => state.currentMode);
  const themeSettings = useThemeSettings((state) => state.themeSettings);
  const setThemeSettings = useThemeSettings((state) => state.setThemeSettings);
  const activeMenu = useActiveMenu((state) => state.activeMenu);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* cart modal */}
        <CartModal />

        {/* change settings button */}
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </>
        </div>

        {/* sidebar */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          {/* navbar */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          {/* main content */}
          <main>
            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Home />} />

              {ProductsCategory.map((category) => (
                <Route
                  key={category.link}
                  path={category.link}
                  element={<Products category={category.name.toLowerCase()} />}
                />
              ))}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
