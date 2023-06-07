import styles from '../styles/Card.module.css';
import style1 from '../styles/Produccion.module.css';
import data from '../utils/projects.json';

import Modal from './Modal';
import { useState } from 'react';

const getUser = (slug) => {
  const details = [];
  data.data.map((project) => {
    project.slug == slug && details.push(project.complete);
  });

  return details;
};

const Card = ({ projects }) => {
  const [modal, setModal] = useState(false);
  const [detailComplete, setDetailComplete] = useState();
  // console.log(detailComplete);

  const projectClick = (slug1) => {
    const pro = getUser(slug1);
    setDetailComplete(pro);
    setModal(!modal);
  };

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
            onClick={() => projectClick(project.slug)}
          >
            <h3 className={styles.card__title}>{project.title}</h3>
            <p className={styles.card__text}>{project.summary}</p>
          </div>
          {project.slug == 'danza' && (
            <Modal
              estado={modal}
              cambiarEstado={setModal}
              complete={detailComplete}
              initial={project.video1}
            />
          )}
          {project.slug == 'contratado' && (
            <Modal
              estado={modal}
              cambiarEstado={setModal}
              complete={detailComplete}
              initial={project.video1}
            />
          )}
          {/* <Modal
            estado={modal}
            cambiarEstado={setModal}
            complete={detailComplete}
            initial={project.video1}
          /> */}
        </div>
      ))}
    </section>
  );
};

export default Card;
