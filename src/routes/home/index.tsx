import styles from './Home.module.scss';
import React from 'react';

import Introduction from './introduction';
import Services from './services';
import Prices from './prices';
import Reviews from './reviews';
import Contact from './contact';

import Observer from '@components/observer/Observer';

const Home = () => {
  return (
    <div className={styles.container}>

      <Introduction />

      <Observer>
        <Services />
      </Observer>

      <Observer>
        <Prices />
      </Observer>

      <Observer>
        <Reviews />
      </Observer>

      <Observer>
        <Contact />
      </Observer>

    </div>
  )
}

export default Home