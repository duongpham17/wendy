import styles from './Gallery.module.scss';
import React from 'react';
import {Props} from 'pages/gallery';

import Introduction from './introduction';
import Images from './images';

const Gallery = (props: Props) => {
  return (
    <div className={styles.container}>
      <Introduction/>
      <Images {...props} />
    </div>
  )
}

export default Gallery