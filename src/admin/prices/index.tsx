import styles from '../Index.module.scss';
import React, { useContext } from 'react';
import UseContextPrices from './Context';
import { Context } from '@context/useAuthentication';

import Header from './header';
import Selector from './selector';
import Edit from './edit';

const Index = () => {
  const {protect} = useContext(Context);
  protect(["admin"]);

  return (
    <div className={styles.container}>
      <UseContextPrices>
        <Header />
        <Selector />
        <Edit />
      </UseContextPrices>
    </div>
  )
}

export default Index