import styles from './Style2.module.scss';
import React, {ReactNode, ReactElement, useEffect} from 'react';

interface Types {
  children: ReactNode | ReactElement,
  onClose?: React.MouseEventHandler<HTMLDivElement>
  open?: boolean
};

export const Style2 = ({children, onClose, open}: Types) => {

  useEffect(() => {
    if(open) document.body.classList.add("bodyScrollBar");
    return () => document.body.classList.remove('bodyScrollBar');
  }, [open]);

  return (
    <div className={styles.container} onClick={onClose}>
      {children}
    </div>
  )
}

export default Style2