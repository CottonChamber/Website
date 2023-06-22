import React from "react";
import styles from "../styles/SuccessMessage.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const SuccessMessage = ({ message, setShowSuccessMessage }) => {
  return (
    <div
      className={styles.message_container}
      onClick={() => setShowSuccessMessage(false)}
    >
      <div className={styles.message}>
        <AiOutlineCheck />
        <p>{message}</p>

        <div
          className={styles.close_button}
          onClick={() => setShowSuccessMessage(false)}
        >
          <RiCloseLine />
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;