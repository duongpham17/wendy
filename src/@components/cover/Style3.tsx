import styles from './Style3.module.scss';
import React, {ReactNode, ReactElement, useEffect} from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Types {
  children: ReactNode | ReactElement,
  onClose?: React.MouseEventHandler<HTMLDivElement>,
  open?: boolean
};

export const Style3 = ({children, onClose, open}: Types) => {

  useEffect(() => {
    if(open) document.body.classList.add("bodyScrollBar");
    return () => document.body.classList.remove('bodyScrollBar');
  }, [open]);

  return (
    <div className={styles.container} onClick={onClose}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
            {children}

            <div className={styles.buttonClose} onClick={onClose}>
                <button><MdKeyboardArrowDown/></button>
            </div>
        </div>
    </div>
  )
}

export default Style3