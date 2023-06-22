"use client";
import React from "react";
import styles from "../styles/Footer.module.scss";
import Logo from "./Logo";
import PagesMenu from "./PagesMenu";
import SocialsMenu from "./SocialsMenu";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo styles={styles} />
      <PagesMenu styles={styles} />
      <SocialsMenu styles={styles} />
      <p className={styles.note}>
        Payment system powered by PayPal, Visa, Mastercard or
        any debit / credit card
      </p>
      <ScrollUpButton />
    </footer>
  );
};

const ScrollUpButton = () => {
  return (
    <div
      className={styles.scroll_up_button}
      onClick={() => window.scrollTo(0, 0)}
    >
      <MdOutlineArrowForwardIos />
    </div>
  );
};

export default Footer;
