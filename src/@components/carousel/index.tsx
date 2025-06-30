import React, {useRef} from 'react';
import styles from './Carousel.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface Props<T> {
    data: T[],
    children: (data: T, index: number) => React.ReactNode,
    size?: [number, number, number, number]
}

const CarouselIndex = <T,>({data, children, size=[5, 3, 2, 1]}: Props<T>) => {

    const carouselRef = useRef<any>(null);

    const handleNext = () => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    };
  
    const handlePrev = () => {
      if (carouselRef.current) {
        carouselRef.current.previous();
      }
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: size[0],
            partialVisibilityGutter: 50
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: size[1],
            partialVisibilityGutter: 50
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: size[2],
            partialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: size[3],
            partialVisibilityGutter: 50
        }
    };

    return (
        <div className={styles.container}>
        <Carousel responsive={responsive} ref={carouselRef} arrows={false} partialVisible={true}>
            {data.map((element, index) => 
                <div key={index}>
                    {children(element, index)}
                </div>
            )}
        </Carousel>
        <div className={styles.buttons}>
            <button onClick={handlePrev}>
                <MdKeyboardArrowLeft/>
            </button>
            <button onClick={handleNext}>
                <MdKeyboardArrowRight/>
            </button>
        </div>
        </div>
    );
};

export default CarouselIndex;
