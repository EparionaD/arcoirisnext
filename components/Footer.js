import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import logoPic from '../public/img/logo.png';
import styles from '../styles/Footer.module.css';
import Social from './Social';

const Footer = () => {
  return (
    <footer className={styles.foo}>
      <div className={styles.foo__container}>
        <div>
          <Link href='/'>
            <a className={styles.foo__logo}>
              <Image src={logoPic} alt='Logo Arco Iris Comunicación Integral' />
            </a>
          </Link>
          <p className={styles.foo__description}>
            Somos una empresa de comunicación con servicios especializados en
            gestión social, producción audiovisual y comunicación política.
          </p>
        </div>
        <div className={styles.access}>
          <h3 className={styles.access__title}>acceso rápido</h3>
          <nav className={styles.access__container}>
            <Link href='/gestion'>
              <a className={styles.access__link}>Gestión social</a>
            </Link>
            <Link href='/produccion'>
              <a className={styles.access__link}>Producción audiovisual</a>
            </Link>
            <Link href='/servicios'>
              <a className={styles.access__link}>Otros servicios</a>
            </Link>
            <Link href='/nosotros'>
              <a className={styles.access__link}>Nosotros</a>
            </Link>
            <Link href='/contacto'>
              <a className={styles.access__link}>Contacto</a>
            </Link>
          </nav>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contact__title}>contacto</h3>
          <div className={styles.contact__group}>
            <span className={styles.contact__container}>
              <FaMapMarkerAlt className={styles.contact__icon} />
              <p className={styles.contact__content}>
                Calle Urubamba Nro. 469, Urb. Benavides, Cercado de Lima (Perú)
              </p>
            </span>
            <span className={styles.contact__container}>
              <FaPhoneAlt />
              <p className={styles.contact__content}>
                (+51) 968 794 300 - 953 124 260
              </p>
            </span>
            <span className={styles.contact__container}>
              <FaRegEnvelope />
              <Link href='mailto:contacto@arcoiris.pe'>
                <a className={styles.contact__mail}>contacto@arcoiris.pe</a>
              </Link>
            </span>
          </div>
          <div className={styles.social}>
            <p>síguenos en</p>
            <Social />
          </div>
          <div className={styles.copyright}>
            (C) 2022 Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
