import Button from './Button';

import { FiPhoneCall } from 'react-icons/fi';
import { TbMessageDots } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contacto}>
      <div className={styles.contacto__container}>
        <h3 className={styles.contacto__title}>contacto</h3>
        <p>
          Para cualquier consulta, comunícate con nosotros a través de nuestros
          diversos canales:
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.group}>
          <FiPhoneCall className={styles.group__icon} />
          <h5 className={styles.group__title}>llámanos</h5>
          <Button
            nombre='+51 9XX XXX XXX'
            tam='.9rem'
            url='https://api.whatsapp.com/send?phone=519xx9xx9xx'
          />
          <Button
            nombre='+51 9XX XXX XXX'
            tam='.9rem'
            url='https://api.whatsapp.com/send?phone=519xx9xx9xx'
          />
        </div>
        <div className={styles.group}>
          <TbMessageDots className={styles.group__icon} />
          <h5 className={styles.group__title}>escríbenos</h5>
          <Button
            nombre='contacto@arcoiris.pe'
            tam='.9rem'
            url='mailto:contacto@arcoiris.pe'
          />
        </div>
        <div className={styles.group}>
          <HiOutlineLocationMarker className={styles.group__icon} />
          <h5 className={styles.group__title}>visítanos</h5>
          <div className={styles.group__street}>
            Calle Urubamba Nro. 469 Urb. Benavides - Lima LIMA - PERÚ
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
