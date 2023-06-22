import React, { useEffect, useRef } from "react";
import styles from "../styles/Header.module.scss";

const MenuButton = ({ showMenu, setShowMenu }) => {
  const line1 = useRef();
  const line2 = useRef();

  useEffect(() => {
    if (showMenu) {
      line1.current.style.animation = "closeLine1 .25s ease forwards";
      line2.current.style.animation = "closeLine2 .25s ease forwards";
    } else {
      if(line1.current.style.animation){
        line1.current.style.animation = "openLine1 .25s ease forwards";
        line2.current.style.animation = "openLine2 .25s ease forwards";
      }
    }
  }, [showMenu]);

  return (
    <div className={styles.menu_button} onClick={() => setShowMenu(!showMenu)}>
      <div className={styles.line_1} ref={line1}></div>
      <div className={styles.line_2} ref={line2}></div>
    </div>
  );
};

export default MenuButton;