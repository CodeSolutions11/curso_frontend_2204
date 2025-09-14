import React from "react";
import { Link, NavLink } from "react-router-dom";

/* ui - ux */

const Nav = () => {
  return (
    <nav className="flex justify-around items-center bg-gray-800">
      <h1 className="text-3xl font-bold"><Link to={"/"}>Logo</Link></h1>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded font-semibold"
                : "hover:bg-blue-700 px-3 py-2 rounded"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded font-semibold"
                : "hover:bg-blue-700 px-3 py-2 rounded"
            }
          >Services</NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded font-semibold"
                : "hover:bg-blue-700 px-3 py-2 rounded"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded font-semibold"
                : "hover:bg-blue-700 px-3 py-2 rounded"
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
