"use client";
import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import Logo from "./Logo";
import PagesMenu from "./PagesMenu";
import SocialsMenu from "./SocialsMenu";
import MenuButton from "./MenuButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
        <PagesMenu styles={styles} showMenu={showMenu} />
        <Logo styles={styles} />
        <SocialsMenu styles={styles} />
      </div>
    </header>
  );
};

export default Header;