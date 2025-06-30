import styles from './Service.module.scss';
import React from 'react';
import {data} from './data';
import Observer from '@components/observer/Observer';
import Image from 'next/image';

const Service = () => {
  return (
    <div className={styles.container}>
        {data.map((el, index) => 
            <Observer key={el.title}>
                <div className={`${styles.element} ${index % 2 === 0 ? styles.left : styles.right}`}>

                    <div className={styles.description}>
                        <h1>{el.title}</h1>
                        <p>{el.description}</p>
                    </div>

                    <div className={styles.image}>
                        <Image src={el.image} alt="services" width={500} height={500} quality={100} />
                    </div>

                </div>
            </Observer>
        )}
    </div>
  )
}

export default Service