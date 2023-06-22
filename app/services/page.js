import React from 'react'
import styles from "../styles/Services.module.scss";
import Services from '../components/ServicesList';
import BeforeAfter from '../components/BeforeAfter';
import InfluencersCollaborations from '../components/InfluencersCollaborations';

const ServicesPage = () => {
  return (
    <div className={styles.services}>
      <h1>Our Services</h1>
      <div className={styles.divider}></div>

      <div className={styles.content}>
        <Services />
        <BeforeAfter />
        <InfluencersCollaborations />
      </div>
    </div>
  )
}

export default ServicesPage