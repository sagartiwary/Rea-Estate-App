import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200">
      <div className="flex items-center justify-around p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-slate-500">Sagar</span>
            <span className="text-slate-300">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="text"
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
            placeholder="Search...."
          />
          <FaSearch />
        </form>
        <ul className="flex items-center gap-3">
          <Link to="/">
            <li className="hidden sm:inline-block text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline-block text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="text-slate-700 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
