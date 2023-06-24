import React from "react";
import styles from "../styles/Services.module.scss";
import servicesItems from "../data/servicesItems";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.services_list}>
      {servicesItems.map((service) => (
        <Service
          key={service.image}
          src={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

const Service = ({ title, description, src }) => {
  return (
    <div className={styles.service}>
      <div className={styles.service_image}>
        <Image
          src={src}
          fill
          alt={`${title} Service By Cotton Chamber`}
          sizes="(min-width: 1100px) 500px, (min-width: 769px) and (max-width: 1099px) 400px, (max-width: 768px) 450px"
        />
      </div>
      <div className={styles.service_info}>
        <h3>{title}</h3>
        {description.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Services;