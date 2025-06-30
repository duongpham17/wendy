import styles from './Introduction.module.scss'
import React from 'react';

import Link from '@components/link/Style2';

const Introduction = () => {
  return (
    <div className={styles.container}>
        <section>

            <h1>Welcome</h1>

            <Link href="/services" value="discover our services" />

            <small>Founded in 2006</small>

        </section>
    </div>
  )
}

export default Introduction