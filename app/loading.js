import React from "react";
import styles from "./styles/Loading.module.scss";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Cotton Chamber Clothing Manufacturing Company Logo"
            fill
            sizes="(min-width: 1100px) 138px, (max-width: 1100px) 105px"
            draggable={false}
          />
        </div>
        <span className={styles.loader}></span>
      </div>
    </div>
  );
};

export default Loading;