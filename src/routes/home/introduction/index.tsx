import styles from './Introduction.module.scss'
import React from 'react';

import Link from '@components/link/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>

      <section className={styles.content}>
        <h1>Wendy's Nails & Beauty</h1>
        <Link href="/services" value="discover our services" />
        <b>Founded in 2006</b>
      </section>

    </div>
  )
}

export default Introduction