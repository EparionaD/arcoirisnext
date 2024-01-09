import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Contacto.module.css';
import { FiPhoneCall } from 'react-icons/fi';
import { BsChatRightDots } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const contacto = () => {
  return (
    <Layout
      pagina='Contacto'
      contenido='Producción'
      titulo='contacto'
      resumen='Para cualquier consulta, comunícate con nosotros a través de nuestros diversos canales:'
      color='255, 255, 255'
      colorN='black'
      justify='start'
      margin='0'
      altur='auto'
    >
      <section className={styles.contacto}>
        <div className={styles.container}>
          <div className={styles.call}>
            <FiPhoneCall className={styles.call__icon} />
            <p className={styles.call__title}>LLámanos</p>
          </div>
          <div className={styles.call__number}>
            <p>+51 968 794 300</p>
            <p>+51 953 124 260</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.call}>
            <BsChatRightDots className={styles.call__icon} />
            <p className={styles.call__title}>Escríbenos</p>
          </div>
          <div className={styles.call__number}>
            <div className={styles.call__write}>
              <HiMail
                className={styles.icon}
                style={{ color: `var(--facebook)` }}
              />
              <Link href=''>
                <a className={styles.call__mail}>contacto@arcoiris.pe</a>
              </Link>
            </div>
            <div className={styles.call__write}>
              <AiOutlineWhatsApp
                className={styles.icon}
                style={{ color: `#43d854` }}
              />
              <p className={styles.call__text}>+51 968 794 300</p>
            </div>
            <div className={styles.call__write}>
              <FaTelegram
                className={styles.icon}
                style={{ color: `#00405d` }}
              />
              <p className={styles.call__text}>+51 953 124 260</p>
            </div>
          </div>
        </div>
        <div className={styles.container} style={{ flexDirection: 'column' }}>
          <div className={styles.location}>
            <div className={styles.call}>
              <FiMapPin className={styles.call__icon} />
              <p className={styles.call__title}>Visítanos</p>
            </div>
            <div className={styles.call__number}>
              <p>Calle Urubamba Nro. 469</p>
              <p>Urb. Benavides - Lima</p>
              <p>LIMA - PERÚ</p>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d709.9622056604297!2d-77.08033242281128!3d-12.055850691043993!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-12.0559813!2d-77.0801773!4m3!3m2!1d-12.0559813!2d-77.0801773!5e0!3m2!1ses-419!2spe!4v1669763012085!5m2!1ses-419!2spe'
              width='800'
              height='600'
              style={{ border: '0' }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              className={styles.map__container}
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default contacto;
