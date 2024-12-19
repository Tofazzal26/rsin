import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed z-50 w-full  top-0">
      <div className="bg-base-100 shadow-NavShadow ">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-gray-600"
              >
                <li>
                  <a>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-[#005397]" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a>
                    <NavLink
                      to="/ForBusiness"
                      className={({ isActive }) =>
                        isActive ? "text-[#005397]" : ""
                      }
                    >
                      For Business
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a>
                    <NavLink
                      to="/ForInvestors"
                      className={({ isActive }) =>
                        isActive ? "text-[#005397]" : ""
                      }
                    >
                      For Investors
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a>
                    <NavLink
                      to="/FinancingRates"
                      className={({ isActive }) =>
                        isActive ? "text-[#005397]" : ""
                      }
                    >
                      Financing Rates
                    </NavLink>
                  </a>
                </li>

                <li>
                  <details>
                    <summary>Others</summary>
                    <ul className="p-2">
                      <li>
                        <a>Service</a>
                      </li>
                      <li>
                        <a>About Us</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost">
              <NavLink to="/">
                {" "}
                <h2 className="text-[#005397] text-[20px] lg:text-[35px] tracking-[2px]">
                  RS<span className="text-[#36B0BE]">I</span>N
                </h2>
              </NavLink>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-gray-600">
              <li>
                <a>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-[#005397]" : ""
                    }
                  >
                    Home
                  </NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink
                    to="/ForBusiness"
                    className={({ isActive }) =>
                      isActive ? "text-[#005397]" : ""
                    }
                  >
                    For Business
                  </NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink
                    to="/ForInvestors"
                    className={({ isActive }) =>
                      isActive ? "text-[#005397]" : ""
                    }
                  >
                    For Investors
                  </NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink
                    to="/FinancingRates"
                    className={({ isActive }) =>
                      isActive ? "text-[#005397]" : ""
                    }
                  >
                    Financing Rates
                  </NavLink>
                </a>
              </li>

              <li>
                <details>
                  <summary>Others</summary>
                  <ul className="p-2">
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>About Us</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-4 md:gap-10">
              <button className=" rounded-full text-[#005397] text-sm font-semibold ">
                Login
              </button>
              <button className="bg-[#005397] rounded-full text-white px-3  lg:px-4 py-2 text-xs lg:text-sm font-semibold ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
