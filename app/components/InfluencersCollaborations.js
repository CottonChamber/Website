import React from "react";
import styles from "../styles/Services.module.scss";
import Link from "next/link";
import ImagesSlider from "./ImagesSlider";

const InfluencersCollaborations = () => {
  return (
    <div className={styles.influencers_collaborations}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Build your brand with our influencer collaborations</h2>
          <div className={styles.divider}></div>
          <p>
            Empower your influencer brand with our clothing manufacturing
            collaborations.
          </p>
          <p>
            Our expert team brings influencer visions to life, ensuring that
            every garment reflects their unique style and brand identity.
          </p>
          <p>
            Partner with us to create a standout clothing line that amplifies
            your brand's success.
          </p>
          <button className="primary_button">
            <Link href="/contact">Contact Sales</Link>
          </button>
        </div>

        <ImagesSlider />
      </div>
    </div>
  );
};

export default InfluencersCollaborations;
