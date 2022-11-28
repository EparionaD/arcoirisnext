import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import logoPic from '../public/img/logo.png';
import logoPicN from '../public/img/logoN.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ colorN }) => {
  const { asPath } = useRouter();
  return (
    <nav className={styles.nav} id='nav'>
      {asPath == '/produccion' ||
      asPath == '/servicios' ||
      asPath == '/contacto' ? (
        <a
          className={styles.hamburger}
          style={{ color: `${colorN}` }}
          href='#nav'
        >
          <FiMenu />
        </a>
      ) : (
        <a className={styles.hamburger} href='#nav'>
          <FiMenu />
        </a>
      )}
      {/* <a className={styles.hamburger} href='#nav'>
        <FiMenu />
      </a> */}

      <a className={styles.close} href='#'>
        <FiX />
      </a>
      <Link href='/'>
        <a className={styles.nav__logo}>
          {asPath == '/produccion' ||
          asPath == '/servicios' ||
          asPath == '/contacto' ? (
            <Image src={logoPicN} alt='Logo Arco Iris Comunicación Integral' />
          ) : (
            <Image src={logoPic} alt='Logo Arco Iris Comunicación Integral' />
          )}
        </a>
      </Link>
      {asPath == '/produccion' ||
      asPath == '/servicios' ||
      asPath == '/contacto' ? (
        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            <Link href='/gestion'>
              <a className={styles.nav__link} style={{ color: `${colorN}` }}>
                Gestión social
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/produccion'>
              <a className={styles.nav__link} style={{ color: `${colorN}` }}>
                Producción audiovisual
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/servicios'>
              <a className={styles.nav__link} style={{ color: `${colorN}` }}>
                Otros servicios
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/nosotros'>
              <a className={styles.nav__link} style={{ color: `${colorN}` }}>
                Nosotros
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/contacto'>
              <a className={styles.nav__link} style={{ color: `${colorN}` }}>
                Contacto
              </a>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            <Link href='/gestion'>
              <a className={styles.nav__link}>Gestión social</a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/produccion'>
              <a className={styles.nav__link}>Producción audiovisual</a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/servicios'>
              <a className={styles.nav__link}>Otros servicios</a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/nosotros'>
              <a className={styles.nav__link}>Nosotros</a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/contacto'>
              <a className={styles.nav__link}>Contacto</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
