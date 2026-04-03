import styles from './Footer.module.scss';
import React from 'react';
import Link from 'next/link';

import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';

const socials = [
    {
        name: "Instagram",
        icon: <AiOutlineInstagram />,
        link: "https://www.instagram.com/wendynail.beauty/"
    },
    {
        name: "Facebook",
        icon: <AiOutlineFacebook />,
        link: "https://www.facebook.com/wendynailsandbeauty"
    }
];

const year = new Date().getFullYear()

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.url}>
            <p>@{year}, Wendynail.co.uk</p>
        </div>
        <div className={styles.socials}>
        {socials.map((el, index) => 
            <Link key={index} href={el.link} target="_blank" rel="noreferrer">
                {el.icon}
            </Link>
        )}
        </div>
    </div>
  )
}

export default index