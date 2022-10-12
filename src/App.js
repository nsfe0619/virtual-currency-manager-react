import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./page/Home";
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import ThreePage from "./page/ThreePage";
import FourPage from "./page/FourPage";
import FivePage from "./page/FivePage";
import SixPage from "./page/SixPage";
import SevenPage from "./page/SevenPage";
import EightPage from "./page/EightPage";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
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
            <li>
              <Link
                to="/FourPage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                FourPage
              </Link>
            </li>
            <li>
              <Link
                to="/FivePage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                FivePage
              </Link>
            </li>
            <li>
              <Link
                to="/SixPage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                SixPage
              </Link>
            </li>
            <li>
              <Link
                to="/SevenPage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                SevenPage
              </Link>
            </li>
            <li>
              <Link
                to="/EightPage"
                className="border p-3 hover:bg-indigo-600 duration-500"
              >
                EightPage
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThreePage" element={<ThreePage />} />
          <Route path="/FourPage" element={<FourPage />} />
          <Route path="/FivePage" element={<FivePage />} />
          <Route path="/SixPage" element={<SixPage />} />
          <Route path="/SevenPage" element={<SevenPage />} />
          <Route path="/EightPage" element={<EightPage />} />
        </Routes>
      </HashRouter>
    </div>
    </Provider>
  );
};

export default App;
