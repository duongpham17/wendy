import styles from './Prices.module.scss';
import React from 'react';
import {Props} from 'prices';

import Introduction from './introduction';
import Items from './items';

const Prices = (props: Props) => {

    return (
        <div className={styles.container}>

            <Introduction />

            <Items {...props} />

        </div>
    )
}

export default Prices