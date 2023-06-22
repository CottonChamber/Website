import React from "react";
import styles from "../styles/Landing.module.scss";
import items from "../data/servicesItems";
import Link from "next/link";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.content}>
        <h2>Quality Services You Can Count On!</h2>
        <div className={styles.divider}></div>
        <Items />
        <button className="primary_button">
          <Link href="/services">Read More</Link>
        </button>
      </div>

      <div className={styles.services_bg_triangle}></div>
    </div>
  );
};

const Items = () => {
  return (
    <div className={styles.services_items}>
      {items.map((item, i) => (
        <Item key={item.image} id={i + 1} title={item.title} />
      ))}
    </div>
  );
};

const Item = ({ id, title }) => {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <p>{id}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Services;
