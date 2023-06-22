import React from "react";
import styles from "../styles/Landing.module.scss";
import Link from "next/link";
import rows from "../data/tableRows";
import { AiOutlineCheck } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const HowAreWeDifferent = () => {
  return (
    <div className={styles.how_are_we_different}>
      <div className={styles.content}>
        <h2>how are we different from the others?!</h2>
        <div className={styles.divider}></div>
        <Table />
        <button className="primary_button">
          <Link href="/contact">Contact Sales</Link>
        </button>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className={styles.table}>
      {rows.map((row, i) =>
        i === 0 ? <TitlesRow row={row} key={i} /> : <Row row={row} key={i} />
      )}
    </div>
  );
};

const TitlesRow = ({ row }) => {
  return (
    <div className={styles.row}>
      {row.map((column, i) => (
        <TextColumn column={column} key={i} />
      ))}
    </div>
  );
};

const Row = ({ row }) => {
  return (
    <div className={styles.row}>
      {row.map((column, j) => {
        if (j === 0) {
          return <TextColumn column={column} key={j} />;
        } else {
          return <IconColumn column={column} key={j} />;
        }
      })}
    </div>
  );
};

const TextColumn = ({ column }) => {
  return (
    <div className={styles.column}>
      <p>{column}</p>
    </div>
  );
};

const IconColumn = ({ column }) => {
  return (
    <div className={styles.column}>
      {column === "yes" ? <AiOutlineCheck /> : <CgClose />}
    </div>
  );
};

export default HowAreWeDifferent;