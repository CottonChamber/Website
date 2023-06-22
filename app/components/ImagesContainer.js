import React from "react";
import styles from "../styles/Landing.module.scss";
import Image from "next/image";

const ImagesContainer = () => {
  return (
    <div className={styles.images_container}>
      <ImageItem
        src="/landing/intro-image-1.jpg"
        alt="Cotton Chamber White T-Shirt"
      />
      <ImageItem
        src="/landing/intro-image-2.jpg"
        alt="Cotton Chamber Jeans"
      />
      <ImageItem
        src="/landing/intro-image-3.jpg"
        alt="Cotton Chamber White T-Shirt"
      />
      <ImageItem
        src="/landing/intro-image-4.jpg"
        alt="Cotton Chamber Jeans"
      />
    </div>
  );
};

const ImageItem = ({ src, alt }) => {
  return (
    <div className={styles.image}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1100px) 24.9%, (max-width: 1100px) 24.9%, 24.9%"
        draggable={false}
      />
    </div>
  );
};

export default ImagesContainer;
