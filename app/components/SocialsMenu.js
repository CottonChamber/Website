import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";

const SocialsMenu = ({ styles }) => {
  const [option, setOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = (optionType) => {
    setOption(optionType);

    if (showOptions) {
      if (optionType === option) {
        setShowOptions(false);
      }

      return;
    }

    setShowOptions(true);
  };

  return (
    <>
      <ul className={styles.socials_menu}>
        <li onClick={() => toggleOptions("phone")}>
          <FiPhone />
        </li>
        <li>
          <Link
            href="https://www.instagram.com/cottonchamberkw/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </li>
        <li onClick={() => toggleOptions("email")}>
          <AiOutlineMail />
        </li>
      </ul>

      {showOptions && (
        <SocialsOptions styles={styles} option={option} setShowOptions={setShowOptions} />
      )}
    </>
  );
};

const SocialsOptions = ({ styles, option, setShowOptions }) => {
  return (
    <div className={styles.socials_options}>
      {option === "phone" && (
        <>
          <label>Arabic</label>
          <Link href="https://wa.me/96596700667" target="_blank">
            +965 9670 0667
          </Link>
          <label>English</label>
          <Link href="https://wa.me/96598529227" target="_blank">
            +965 9852 9227
          </Link>
        </>
      )}

      {option === "email" && (
        <>
          <label>Arabic</label>
          <Link href="mailto:fahadcottonchamber@gmail.com" target="_blank">
            fahadcottonchamber@gmail.com
          </Link>
          <label>English</label>
          <Link href="mailto:rayhancottonchamber@gmail.com" target="_blank">
            rayhancottonchamber@gmail.com
          </Link>
        </>
      )}

      <div
        className={styles.close_button}
        onClick={() => setShowOptions(false)}
      >
        <RiCloseLine />
      </div>
    </div>
  );
};

export default SocialsMenu;
