import Link from 'next/link';
import styles from '../styles/Button.module.css';

const Button = ({ nombre, url, tam }) => {
  return (
    <Link href={`${url}`}>
      <a className={styles.boton} style={{ fontSize: `${tam}` }}>
        {nombre}
      </a>
    </Link>
  );
};

export default Button;
