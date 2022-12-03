import styles from '../styles/Card.module.css';
import Modal from './Modal';
import { useState } from 'react';

const Card = ({ fondo, titulo, resumen }) => {
  const [modal, setModal] = useState(false);
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `${fondo}`,
      }}
    >
      <div className={styles.card__content} onClick={() => setModal(!modal)}>
        <h3 className={styles.card__title}>{titulo}</h3>
        <p className={styles.card__text}>{resumen}</p>
      </div>
      <Modal estado={modal} cambiarEstado={setModal} />
    </div>
  );
};

export default Card;
