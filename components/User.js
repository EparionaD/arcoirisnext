import Link from 'next/link';
import styles from '../styles/User.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { AiOutlineFileText } from 'react-icons/ai';

const User = () => {
  return (
    <div className={styles.user}>
      <FaUserCircle className={styles.user__photo} />
      <h1 className={styles.user__name}>Luis Pariona Arana</h1>
      <p>Comunicador y economista</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </p>
      <div className={styles.contacto}>
        <p className={styles.contacto__title}>Contacto</p>
        <div className={styles.contacto__email}>
          <HiMail className={styles.contacto__icon} />
          <Link href='mailto:lpariona@arcoiris.pe'>
            <a className={styles.contacto__link}>lpariona@arcoiris.pe</a>
          </Link>
        </div>
        <div className={styles.cv}>
          <Link href='/'>
            <a className={styles.boton}>
              <AiOutlineFileText className={styles.boton__icon} /> Ver CV
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
