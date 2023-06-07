import styles from '../styles/Modal.module.css';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';

const Modal = ({ estado, cambiarEstado, complete, initial }) => {
  const [imagen, setImagen] = useState('');

  const closeModal = () => {
    setImagen('');
    cambiarEstado(false);
  };

  return (
    <>
      {estado && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <div className={styles.modal__close}>
              <IoMdClose
                className={styles.modal__icon}
                onClick={() => closeModal()}
              />
            </div>

            <div>
              {complete.map((comple) => (
                <div className={styles.modal__container} key={comple.title}>
                  <div>
                    <div>
                      {imagen.startsWith('https://www') ? (
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
                          height={500}
                          src={imagen}
                        />
                      )}
                    </div>
                    <div className={styles.thumbnail}>
                      <Image
                        layout='responsive'
                        width={900}
                        height={700}
                        src={comple.videoImagen}
                        className={styles.modal__image}
                        onClick={() => setImagen(comple.video)}
                      />
                      <Image
                        layout='responsive'
                        width={900}
                        height={700}
                        src={comple.imagen}
                        className={styles.modal__image}
                        onClick={() => setImagen(comple.imagen)}
                      />
                      <Image
                        layout='responsive'
                        width={900}
                        height={700}
                        src={comple.imagen2}
                        className={styles.modal__image}
                        onClick={() => setImagen(comple.imagen2)}
                      />
                      <Image
                        layout='responsive'
                        width={900}
                        height={700}
                        src={comple.imagen3}
                        className={styles.modal__image}
                        onClick={() => setImagen(comple.imagen3)}
                      />
                      <Image
                        layout='responsive'
                        width={900}
                        height={700}
                        src={comple.imagen4}
                        className={styles.modal__image}
                        onClick={() => setImagen(comple.imagen4)}
                      />
                    </div>
                  </div>
                  <div className={styles.modal__text}>
                    <h3 className={styles.modal__title}>{comple.title}</h3>
                    <div>
                      <p className={styles.modal__description}>
                        {comple.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
