import React, { useState } from "react";
import SideBar from "../sideBar/SideBar";
import css from "./Layout.module.css";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className={css.app}>
      <Header setIsOpen={setIsSidebarOpen} />
      <div className={css.layout}>
        <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className={css.content}>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Layout;
