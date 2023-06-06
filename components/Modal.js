import styles from '../styles/Modal.module.css';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';

const Modal = ({ estado, cambiarEstado, complete }) => {
  const [imagen, setImagen] = useState(complete.video);
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
                    src={complete.videoImagen}
                    className={styles.modal__image}
                    onClick={() => setImagen(complete.video)}
                  />
                  <Image
                    layout='responsive'
                    width={900}
                    height={700}
                    src={complete.imagen}
                    className={styles.modal__image}
                    onClick={() => setImagen(complete.imagen)}
                  />
                  <Image
                    layout='responsive'
                    width={900}
                    height={700}
                    src={complete.imagen2}
                    className={styles.modal__image}
                    onClick={() => setImagen(complete.imagen2)}
                  />
                  <Image
                    layout='responsive'
                    width={900}
                    height={700}
                    src={complete.imagen3}
                    className={styles.modal__image}
                    onClick={() => setImagen(complete.imagen3)}
                  />
                  <Image
                    layout='responsive'
                    width={900}
                    height={700}
                    src={complete.imagen4}
                    className={styles.modal__image}
                    onClick={() => setImagen(complete.imagen4)}
                  />
                </div>
              </div>
              <div className={styles.modal__text}>
                <h3 className={styles.modal__title}>{complete.title}</h3>
                <div>
                  <p className={styles.modal__description}>
                    {complete.description}
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
