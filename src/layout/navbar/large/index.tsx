import styles from './Large.module.scss';
import React from 'react';
import Link from 'next/link';
import {links} from '../data';
import useOpen from '@hooks/useOpen';

const Large = () => {

  const {onOpenValue, openValue} = useOpen({initialState: ""});
  
  const onSelected = (value: string) => {
    localStorage.setItem("navbar", value)
    onOpenValue(value);
  };

  return (
    <div className={styles.container}>

      <div className={styles.brand}>
        <Link href="/" onClick={() => onSelected("home")}>Wendy's</Link>
      </div>

      <div className={styles.links}>
        {links.map((el) => 
          <Link 
            key={el.id}
            href={el.href} 
            className={openValue === el.value ? styles.selected : ""}
            onClick={() => onSelected(el.value)}
          >
            {el.name} 
          </Link>
        )}
      </div>

    </div>
  )
}

export default Large