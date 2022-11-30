import Link from 'next/link';
import styles from '../styles/User.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { AiOutlineFileText } from 'react-icons/ai';

const User = ({ nombre, carrera, descripcion, email, url }) => {
  return (
    <div className={styles.user}>
      <FaUserCircle className={styles.user__photo} />
      <h1 className={styles.user__name}>{nombre}</h1>
      <p>{carrera}</p>
      <p className={styles.user__description}>{descripcion}</p>
      <div className={styles.contacto}>
        <p className={styles.contacto__title}>Contacto</p>
        <div className={styles.contacto__email}>
          <HiMail className={styles.contacto__icon} />
          <Link href={`mailto:${email}`}>
            <a className={styles.contacto__link}>{email}</a>
          </Link>
        </div>
        <div className={styles.cv}>
          <Link href={`${url}`}>
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
