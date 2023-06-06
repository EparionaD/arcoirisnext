import styles from '../styles/Card.module.css';
import style1 from '../styles/Produccion.module.css';
import Modal from './Modal';
import { useState } from 'react';

const Card = ({ projects }) => {
  const [modal, setModal] = useState(false);
  return (
    <section className={style1.produccion}>
      {projects.map((project) => (
        <div
          className={styles.card}
          style={{
            backgroundImage: `url('${project.fondo}')`,
          }}
          key={project.id}
        >
          <div
            className={styles.card__content}
            onClick={() => setModal(!modal)}
          >
            <h3 className={styles.card__title}>{project.title}</h3>
            <p className={styles.card__text}>{project.summary}</p>
          </div>
          <Modal
            estado={modal}
            cambiarEstado={setModal}
            complete={project.complete}
          />
        </div>
      ))}
    </section>
  );
};

export default Card;
