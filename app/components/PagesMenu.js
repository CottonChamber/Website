import React, { useEffect, useRef } from "react";
import Link from "next/link";

const PagesMenu = ({ styles, showMenu, closeMenu }) => {
  const menu = useRef();

  useEffect(() => {
    if (showMenu) {
      menu.current.style.animation = "openMenu .2s ease forwards";
    } else {
      if (menu.current.style.animation) {
        menu.current.style.animation = "closeMenu .2s ease forwards";
      }
    }
  }, [showMenu]);

  return (
    <ul className={styles.pages_menu} ref={menu}>
      <li>
        <Link href="/" onClick={closeMenu}>Home</Link>
      </li>
      <li>
        <Link href="/services" onClick={closeMenu}>Services</Link>
      </li>
      <li>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </li>
    </ul>
  );
};

export default PagesMenu;