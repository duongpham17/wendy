import styles from './Items.module.scss';
import React from 'react';
import {Props} from 'prices';
import useOpen from '@hooks/useOpen';

import { MdKeyboardArrowRight } from 'react-icons/md';

import Observer from '@components/observer/Observer';

const index = ({prices}: Props) => {

    const {openItems, onOpenItems} = useOpen({initialState: ""});

    return (
        <div className={styles.container}>
            {prices.map(el => 
                <div key={el._id.toString()} className={styles.element}>
                    <Observer>

                        <div className={styles.buttons}>
                            <button onClick={() => onOpenItems(el.type)}>
                                <span>{el.type}</span>
                                <span>{<MdKeyboardArrowRight className={openItems.includes(el.type) ? styles.iconOpen : styles.iconClose}/>}</span>
                            </button>
                        </div>

                        <div className={`${styles.summary} ${openItems.includes(el.type) ? styles.summaryOpen : styles.summaryClose}`}>
                            {el.prices.map((item, index) => 
                                <div key={index} className={styles.item}>
                                    {item.substring(0, 1) === "£" && 
                                        <p className={styles.price}>
                                            <span>{item.split(" ").slice(1).join(" ")}</span>
                                            <span>{item.split(" ")[0]}</span>
                                        </p>
                                    }   
                                    {item.substring(0, 1) === "(" && 
                                        <p className={styles.price}>
                                            <span>{item}</span>
                                        </p>
                                    }   
                                </div>
                            )}
                        </div>

                    </Observer>
                </div>    
            )}
        </div>
    )
}

export default index