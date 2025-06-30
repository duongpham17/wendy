import styles from './Boolean.module.scss';

interface Props {
  message: string,
  value: boolean,
  onClick: () => void,
};

const Checkbox = ({message, onClick, value}:Props) => {
    
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <button type="button" className={value ? styles.selected : styles.unselected} onClick={onClick} />
    </div>
  )
}

export default Checkbox