import styles from './Reviews.module.scss';
import React from 'react';
import {data} from './data';
import {AiTwotoneStar} from 'react-icons/ai';
import Swiper from '@components/swiper';
import useWindow from '@hooks/useWindow';

const Reviews = () => {

    const {width} = useWindow();

    return (
        <div className={styles.container}>
            <header>
                <h1>Our Reviews</h1>
            </header>

            <Swiper data={data} slidersPerView={width>=1000?4:width>=700?3:width>=500?2:1} auto>
                {(el) => 
                    <div key={el.id} className={styles.element}>
                        <h1>{el.name}</h1>
                        <p>{el.review}</p>
                        <div>
                            <span>{[...new Array(el.stars)].map((_, index) => <AiTwotoneStar key={index}/>)}</span>
                        </div>
                    </div>
                }
            </Swiper>

        </div>
    )
}

export default Reviews