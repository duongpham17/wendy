import styles from './Small.module.scss';
import React, {useEffect} from 'react';
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react';
import useOpen from '@hooks/useOpen';
import { links } from '../data';
import Observer from '@components/observer/Observer';
import {AiOutlineInstagram} from 'react-icons/ai';

const Small = () => {
  
  const {open, setOpen, onOpen, openValue, onOpenValue} = useOpen({initialState: ""});

  const onSelected = (value: string) => {
    onOpenValue(value);
    onOpen();    
  };

  useEffect(() => {
    if(open) document.body.classList.add("bodyScrollBar");
    return () => document.body.classList.remove('bodyScrollBar');
}, [open]);

  return (
    <div className={styles.container}>

      <div className={`${styles.header} ${open ? styles.hamburgerIsOpen : ""}`}>      
        <Link href="/" onClick={() => setOpen(false)}><h1>Wendy's</h1></Link>
        <Hamburger onToggle={onOpen} toggled={open}/>
      </div>

      <Observer>
        <div className={`${styles.menu} ${open ? styles.menuIsOpen : styles.menuIsClose}`}>
          <div className={styles.contents}>
            <ul> 
              {links.map(el => 
                <Link  key={el.id} href={el.href} className={openValue === el.value ? styles.selected : ""} onClick={() => onSelected(el.value)}>{el.name}</Link>
              )}
            </ul>
            <div className={styles.social}>
              <Link href="#" rel="noopener noreferrer" target="_blank">  
                <AiOutlineInstagram/>
              </Link>
            </div>
          </div>
        </div>
      </Observer>
      
    </div>
  )
}

export default Small