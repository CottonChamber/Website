"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/Landing.module.scss";
import Image from "next/image";

const HowTo = () => {
  return (
    <div className={styles.how_to_container}>
      <div className={styles.content}>
        <Text />
        <DressImage />
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <div className={styles.text}>
      <h2>How Do We Work?</h2>
      <div className={styles.divider}></div>
      <p>
        Getting custom clothing made with our manufacturing company is easy.
        Simply email us your designs and specifications and we'll provide a
        detailed quote.
      </p>
      <p>
        If you're happy with the quote, we'll create a sample for your approval
        before moving on to full-scale production.{" "}
      </p>
      <p>
        Our team is committed to using the highest quality materials and
        techniques to bring your vision to life.
      </p>
    </div>
  );
};

const DressImage = () => {
  const circleRef = useRef();

  const rotateOnScroll = () => {
    const scrollPosition = window.pageYOffset;

    if(circleRef.current){
        circleRef.current.style.transform = `rotateZ(${scrollPosition * 0.09}deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", rotateOnScroll);
  }, []);

  return (
    <div className={styles.dress_image}>
      <div className={styles.circle} ref={circleRef}>
        <Image
          src="/landing/how-to-bg-circle.svg"
          alt="Circled Pattern Background Image"
          sizes="(min-width: 1100px) 250px, (max-width: 1100px) 250px, 250px"
          fill
        />
      </div>

      <div className={styles.dress}>
        <Image
          src="/landing/dress.png"
          alt="Dress Manufactured By Cotton Chamber"
          sizes="(min-width: 1100px) 138.69px, (max-width: 1100px) 138.69px, 138.69px"
          fill
        />
      </div>
    </div>
  );
};

export default HowTo;
