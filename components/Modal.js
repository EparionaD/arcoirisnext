import styles from '../styles/Modal.module.css';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';

const Modal = ({ estado, cambiarEstado }) => {
  const [imagen, setImagen] = useState('');
  return (
    <>
      {estado && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <div className={styles.modal__close}>
              <IoMdClose
                className={styles.modal__icon}
                onClick={() => cambiarEstado(false)}
              />
            </div>
            <div className={styles.modal__container}>
              <div>
                <div>
                  {imagen.startsWith('http') ? (
                    <iframe
                      width='100%'
                      height='500'
                      src={`${imagen}`}
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <Image
                      layout='responsive'
                      width={900}
                      height={700}
                      src={imagen}
                    />
                  )}
                </div>
                <div className={styles.thumbnail}>
                  <Image
                    layout='responsive'
                    width={900}
                    height={700}
                    src={'/img/medios.jpg'}
                    className={styles.modal__image}
                    onClick={() => setImagen('/img/medios.jpg')}
                  />
                  <Image
                    layout='responsive'
                    width={900}
                    height={700}
                    src={'/img/medios.jpg'}
                    className={styles.modal__image}
                    onClick={() =>
                      setImagen('https://www.youtube.com/embed/jRxoO-Zd0pQ')
                    }
                  />
                </div>
              </div>
              <div className={styles.modal__text}>
                <h3 className={styles.modal__title}>
                  la danza del zorzal(2014)
                </h3>
                <div>
                  <p className={styles.modal__description}>
                    Largometraje documental sobre la danza del Huaylarsh del
                    Valle del Mantaro, representativa de la regi??n de Jun??n y
                    del Centro del Per??.
                  </p>
                  <p className={styles.modal__description}>
                    Se hace un recuento hist??rico y se consulta a danzantes,
                    historiadores y folkloristas sobre las caracter??sticas y
                    evoluci??n del Huaylarsh moderno y antiguo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
