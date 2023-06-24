"use client";
import React, { useRef, useEffect } from "react";
import styles from "../styles/Services.module.scss";

const BeforeAfter = () => {
  const beforeRef = useRef(null);
  const resizeHandleRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
    document.addEventListener("touchmove", handleResize); 
    document.addEventListener("touchend", stopResize); 

    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResize);
      document.removeEventListener("touchmove", handleResize);
      document.removeEventListener("touchend", stopResize); 
    };
  }, []);

  const handleResize = (event) => {
    let clientX;

    if (event.touches && event.touches.length > 0) {
      const touch = event.touches[0];
      clientX = touch.clientX;
    } else {
      clientX = event.clientX;
    }

    if (resizeHandleRef.current && resizeHandleRef.current.isResizing) {
      const container = beforeRef.current;
      const newWidth = container.offsetWidth + (clientX - resizeHandleRef.current.clientX);
      container.style.width = newWidth + "px";
      resizeHandleRef.current.clientX = clientX;
    }
  };

  const startResize = (event) => {
    let clientX;

    if (event.touches && event.touches.length > 0) {
      const touch = event.touches[0];
      clientX = touch.clientX;
    } else {
      clientX = event.clientX;
    }

    resizeHandleRef.current.isResizing = true;
    resizeHandleRef.current.clientX = clientX;
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
              onTouchStart={startResize}
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