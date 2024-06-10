"use client";
import React from "react";
import styles from "../styles/Contact.module.scss";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Our Team</h2>
      <div className={styles.divider}></div>
      
      <div className={styles.content}>
        <ContactForm />
        <Socials />
      </div>

      <Location />
    </div>
  );
};

const Socials = () => {
  return (
    <div className={styles.socials}>
      <SocialsGroup
        language="English"
        name="Mohammad Rayhan"
        phone="+965 9852 9227"
        email="rayhancottonchamber@gmail.com"
      />
      <SocialsGroup
        language="Arabic"
        name="Fahad ALdeei"
        phone="+965 9670 0667"
        email="fahadcottonchamber@gmail.com"
      />
    </div>
  );
};

const SocialsGroup = ({ language, name, phone, email }) => {
  return (
    <>
      <h3>{language}</h3>
      <div className={styles.socials_group}>
        <label>{name}</label>
        <div className={styles.group}>
          <FiPhone />
          <p>{phone}</p>
        </div>
        <div className={styles.group}>
          <AiOutlineMail />
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;