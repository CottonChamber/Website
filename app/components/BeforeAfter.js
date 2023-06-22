"use client";
import React, { useRef, useEffect } from "react";
import styles from "../styles/Services.module.scss";

const BeforeAfter = () => {
  const beforeRef = useRef(null);
  const resizeHandleRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);

    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResize);
    };
  }, []);

  const handleResize = (event) => {
    if (resizeHandleRef.current && resizeHandleRef.current.isResizing) {
      const container = beforeRef.current;
      const newWidth = container.offsetWidth + event.movementX;
      container.style.width = newWidth + "px";
    }
  };

  const startResize = () => {
    resizeHandleRef.current.isResizing = true;
  };

  const stopResize = () => {
    resizeHandleRef.current.isResizing = false;
  };

  return (
    <div className={styles.before_after}>
      <div className={styles.slider_wrapper}>
        <div className={styles.after}>
          <div className={styles.before} ref={beforeRef}>
            <div
              className={styles.resize_button}
              onMouseDown={startResize}
              ref={resizeHandleRef}
            />
          </div>
        </div>
      </div>

      <h3>Bring Creative Ideas To Life.</h3>
    </div>
  );
};

export default BeforeAfter;