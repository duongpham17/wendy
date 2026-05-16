import styles from './Prices.module.scss';
import React, {useState} from 'react';
import {Data} from './data';
import Spinning from '@components/buttons/Spinning';

const Prices = () => {

    const [open, setOpen] = useState(Data[0]);

    return (
        <div className={styles.container}>
            <header>
                <h1>Price List</h1>
            </header>

            <div className={styles.prices}>
                {Data.map(el => 
                    <div key={el.header} className={styles.element}>
                        <Spinning size={"1.2rem"} onClick={() => setOpen(el)} open={open.header === el.header}>{el.header}</Spinning>
                        {open.header === el.header &&
                            <div className={styles.item}>{open.items.map(el => <p key={el.id}>£{el.price}{el?.plus?"+":""} {el.service} {el.note}</p>)}</div>
                        }
                    </div>
                )}
            </div>

        </div>
    )
}

export default Prices