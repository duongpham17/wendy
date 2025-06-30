import styles from './Images.module.scss';
import React, {useState} from 'react';
import { Props } from 'pages/gallery';
import Carousel from '@components/carousel';
import Observer from '@components/observer/Observer';
import Cover from '@components/cover/Style1';
import { MdClose } from 'react-icons/md';

const Images = (props: Props) => {

    const [selected, setSelected] = useState<null | typeof props.gallery[0]>(null);

    const stopPropagation = (e: any) => e.stopPropagation()

    return (
        <div className={styles.container}>

            <Carousel data={props.gallery}>
                {(el) => 
                    <div key={el._id.toString()} className={styles.element}>
                        <p>
                            <span>{el.type}</span>    
                            <span>[ {el.images.length} ]</span>
                        </p>
                        <img src={el.images[0]} alt={el.type} draggable="false" onClick={() => setSelected(el)}/>
                    </div>
                }
            </Carousel>

            {selected && 
                <Cover open={selected ? true : false} onClose={() => setSelected(null)}>
                    <div className={styles.items}>
                        {selected.images.map((el, index) =>
                            <Observer key={el}>
                                <div className={styles.item} onClick={stopPropagation}>
                                    <p>{index+1} : {selected.images.length}</p>
                                    <img src={el} alt={`${selected.type} [${index}]`} /> 
                                </div>
                            </Observer> 
                        )}
                    </div>
                    <div className={styles.button}>
                        <button onClick={() => setSelected(null)}><MdClose/></button>
                    </div>
                </Cover>
            }

        </div>
    )
}

export default Images