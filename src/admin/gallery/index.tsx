import styles from '../Index.module.scss';
import React, { useContext } from 'react';
import UseContextGallery from './Context';
import { Context } from '@context/useAuthentication';

import Header from './header';
import Selector from './selector';
import Edit from './edit';

const Gallery = () => {
  const {protect} = useContext(Context);
  protect(['admin']); // Example roles

  return (
    <div className={styles.container}>
      <UseContextGallery>
        <Header />
        <Selector />
        <Edit />
      </UseContextGallery>
    </div>
  )
}

export default Gallery