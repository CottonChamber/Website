import React from "react";
import styles from "../styles/Landing.module.scss";
import Image from "next/image";
import items from "../data/whyToItems";

const WhyTo = () => {
  return (
    <div className={styles.why_to_container}>
      <div className={styles.content}>
        <h2>Why Work With us?</h2>
        <div className={styles.divider}></div>
        <Items />
      </div>

      <div className={styles.why_to_bg_triangle}></div>
    </div>
  );
};

const Items = () => {
  return (
    <div className={styles.why_to_items}>
      {items.map((item) => (
        <Item
          key={item.image}
          src={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

const Item = ({ src, title, description }) => {
  return (
    <div className={styles.item}>
      <div className={styles.layout}>
        <div className={styles.border}>
          <div className={styles.circle}>
            <Image
              src={src}
              alt="Cotton Chamber Clothing"
              sizes="(min-width: 1100px) 100px, (min-width: 769px) and (max-width: 1099px) 75px, (max-width: 768px) 67.5px"
              fill
            />
          </div>
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.item_text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyTo;