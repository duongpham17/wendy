import styles from './Spinning.module.scss';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactNode,
  open: boolean,
  size?: string 
}

const Spinning = ({open, size, children, ...props}: Props) => {
  return (
    <button className={styles.container} {...props}>
        <div style={{fontSize: size }}>{children}</div>
        <AiOutlinePlus className={open?styles.open:""}/>
    </button>
  )
}

export default Spinning