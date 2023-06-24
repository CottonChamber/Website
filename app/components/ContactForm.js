"use client";
import React, { useState, useRef } from "react";
import styles from "../styles/Contact.module.scss";
import emailjs from "@emailjs/browser";
import Loading from "../loading";
import SuccessMessage from "./SuccessMessage";

const emailServiceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const defaultInput = {
  name: "",
  phone_number: "",
  email: "",
  inquiry: "",
};

const ContactForm = () => {
  const formRef = useRef();

  const [input, setInput] = useState(defaultInput);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (!isValidateForm()) return;

    sendInquiry();
  };

  const isValidateForm = () => {
    const { phone_number, email, name, inquiry } = input;

    if (
      phone_number.trim().length === 0 ||
      inquiry.trim().length === 0 ||
      email.trim().length === 0 ||
      name.trim().length === 0
    ) {
      alert("Please fill in all the fields");
      setLoading(false);
      return false;
    }

    if (!isNumericString(phone_number)) {
      alert("Please enter a valid phone number");
      setLoading(false);
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email");
      setLoading(false);
      return false;
    }

    return true;
  };

  const sendInquiry = () => {
    // Send email
    emailjs
      .sendForm(
        emailServiceID,
        emailTemplateID,
        formRef.current,
        emailPublicKey
      )
      .then(
        (result) => handleSentMessageResponse(result.status, result.text),
        (error) => handleSentMessageResponse(error.status, error.text)
      );
  };

  const handleSentMessageResponse = (status, text) => {
    // Hide loader;
    setLoading(false);

    if (status === 200) {
      // Reset form
      setInput(defaultInput);

      console.log(text);
      setShowSuccessMessage(true);
    } else {
      console.log(text);
      alert("Failed to send message, please try again later");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.contact_form}>
      <h3>Send us a message</h3>

      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.fields_group}>
          <InputGroup
            label="Name"
            name="name"
            value={input.name}
            handleInput={handleInput}
          />

          <InputGroup
            label="Phone Number"
            name="phone_number"
            value={input.phone_number}
            handleInput={handleInput}
          />
        </div>

        <InputGroup
          label="Email"
          name="email"
          value={input.email}
          handleInput={handleInput}
          type="email"
        />

        <InputGroup
          label="Inquiry"
          name="inquiry"
          value={input.inquiry}
          handleInput={handleInput}
          type="textarea"
        />

        <button type="submit" className="primary_button">
          <span>Submit</span>
        </button>
      </form>

      {showSuccessMessage && (
        <SuccessMessage
          message="Inquiry Successfully Submitted"
          setShowSuccessMessage={setShowSuccessMessage}
        />
      )}
    </div>
  );
};

const InputGroup = ({ label, name, value, handleInput, type }) => {
  return (
    <div className={styles.input_group}>
      <label>{label}</label>

      {type === "textarea" ? (
        <textarea name={name} value={value} onChange={handleInput} required />
      ) : (
        <input
          type={type ? type : "text"}
          name={name}
          value={value}
          onChange={handleInput}
          required
        />
      )}
    </div>
  );
};

const isValidEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }

  return false;
};

const isNumericString = str => {
  const trimmedStr = str.trim();
  const pattern = /^(\+[0-9\s]*)$|^[0-9\s]+$/;
  return pattern.test(trimmedStr);
}

export default ContactForm;