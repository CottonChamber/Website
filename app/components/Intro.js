import React from "react";
import styles from "../styles/Landing.module.scss";
import { AiOutlineScissor } from "react-icons/ai";
import Link from "next/link";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Text />
      <Buttons />
    </div>
  );
};

const Text = () => {
  return (
    <>
      <div className={styles.sub_heading}>
        <AiOutlineScissor />
        <h3>Crafting Style, Stitch by Stitch</h3>
        <AiOutlineScissor />
      </div>
      <h1>Cotton Chamber</h1>
      <p>
        Providing the highest quality in the industry, Cotton Chamber is
        recognized as a leading clothing manufacturer for top brands like
        Springfield, Levi's, American Eagle, and more.
      </p>
    </>
  );
};

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <button className="primary_button">
        <Link href="/services">Our Services</Link>
      </button>
      <button className="secondary_button">
        <Link href="/contact">Contact Sales</Link>
      </button>
    </div>
  );
};

export default Intro;
