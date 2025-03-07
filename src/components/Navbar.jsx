import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQty, setOpenCard } from "../app/cardSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQty = useSelector(selectTotalQty);

  const onCardToggle = () => {
    dispatch(
      setOpenCard({
        cardState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? `absolute top-7 left-0 right-0 opacity-100 z-[200]`
            : `fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme`
        }
      >
        <nav className="nike-container flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>

          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCardToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 w-4 h-4 text-[0.75rem] leading-tight font-medium rounded-full flex items-center
                    justify-center cursor-pointer hover:scale-110 transition-all duration-300
                     ${
                       navState
                         ? "bg-slate-900 text-slate-100 shadow-slate-900"
                         : "bg-slate-100 text-slate-900 shadow-slate-100"
                     }`}
                >
                  {totalQty}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
