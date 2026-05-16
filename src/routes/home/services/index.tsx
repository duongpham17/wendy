import styles from './Services.module.scss'
import React from 'react';
import {data} from './data';
import Swiper from '@components/swiper';
import useWindow from '@hooks/useWindow';

const Services = () => {

 const {width} = useWindow();

  return (
    <div className={styles.container}>
        <section>
            <header>
                <h1>Services</h1>
            </header>

            <div className={styles.swiper}>
                <Swiper data={data} slidersPerView={width>=1000?4:width>=700?3:width>=500?2:1} auto>
                    {(el) => 
                        <div key={el.id} className={styles.element}>
                            <h1>{el.id}</h1>
                            <p>{el.description}</p>
                        </div>
                    }
                </Swiper>
            </div>

        </section>
    </div>
  )
}

export default Services