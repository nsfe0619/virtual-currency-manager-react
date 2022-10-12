import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./page/Home";
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import ThreePage from "./page/ThreePage";

const App = () => {
  return (
    <div>
      <HashRouter>
        <nav className="px-5 flex items-center h-[60px] bg-indigo-500 text-white">
          <h1 className="mr-auto text-2xl">React TodoList</h1>
          <ul className="flex">
            <li className="mr-3">
              <Link
                to="/"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/FirstPage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                FirstPage
              </Link>
            </li>
            <li>
              <Link
                to="/SecondPage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                SecondPage
              </Link>
            </li>
            <li>
              <Link
                to="/ThreePage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                ThreePage
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThreePage" element={<ThreePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
