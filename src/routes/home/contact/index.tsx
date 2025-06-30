import styles from './Contact.module.scss';
import React from 'react';
import {MdLocationOn, MdOutlineAccessTime} from 'react-icons/md';

const Contact = () => {
  return (
    <div className={styles.container}>

        <div className={styles.visit}>
          <h1>Visit Us</h1>
        </div>

        <div className={styles.booknow}>
          <a href="tel:01375675532">Book now - 01375 675532</a>
        </div>

        <div className={styles.address}>
            <MdLocationOn/>
            <h2>Address</h2>
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.co.uk/maps/place/Wendy+Nails+%26+Beauty/@51.5247199,0.4452835,17z/data=!3m1!4b1!4m6!3m5!1s0x47d8c617fe4dda73:0x285d002634440b9d!8m2!3d51.5247199!4d0.4474722!16s%2Fg%2F1hc5cv_pw">
              <p>59 St John's Way</p>
              <p>Corringham, SS17 7NA</p>
            </a>
        </div>

        <div className={styles.hours}>
            <MdOutlineAccessTime/>
            <h2>Opening Hours</h2>
            <p> Monday - Friday : 9:00 - 19:00 </p>
            <p> Saturday : 9:00 - 18:00 </p>
            <p> Sunday : CLOSED</p>
        </div>

    </div>
  )
}

export default Contact