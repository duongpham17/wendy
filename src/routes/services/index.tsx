import styles from './Services.module.scss'
import React from 'react';

import Introduction from './introduction';
import Service from './service';

const Services = () => {
  return (
    <div className={styles.container}>
        <Introduction />

        <Service />
    </div>
  )
}

export default Services