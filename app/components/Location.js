import React from "react";
import styles from "../styles/Contact.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <h3>Location</h3>
      <p>
        Abdulaziz Hamad Al Saqer st, Kuwait City Burj Al tujjar, floor 7, office 6
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55655.10996570875!2d47.94551990358317!3d29.32797000584992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf8585b1b38f97%3A0x77e860c5e3787ccf!2sBurj%20Al%20Tujjar!5e0!3m2!1sen!2slb!4v1687100295256!5m2!1sen!2slb"
        width="100%"
        height="500px"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
