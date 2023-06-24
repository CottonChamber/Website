"use client";
import React, { useState } from "react";
import styles from "../styles/Services.module.scss";
import influencers from "../data/influencers";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"; //Boxicons

const ImagesSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = influencers.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.slider}>
      <BiLeftArrow onClick={prevSlide} className={styles.left_button} />

      {influencers.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.active_slide : styles.slide}
            key={index}
          >
            {index === current && (
              <div className={styles.image}>
                <Image
                  src={slide.image}
                  alt="Cotton Chamber Influencer Collaboration Service"
                  loading="lazy"
                  sizes="(min-width: 1100px) 378px, (min-width: 769px) and (max-width: 1099px) 297px, (max-width: 768px) 270px, (max-width: 450px) 243px, (max-width: 390px) 232.2px, (max-width: 360px) 216px, (max-width: 330px) 205.2px"
                  fill
                />
                <p className={styles.name}>{slide.name}</p>
              </div>
            )}
          </div>
        );
      })}

      <BiRightArrow onClick={nextSlide} className={styles.right_button} />
    </div>
  );
};

export default ImagesSlider;