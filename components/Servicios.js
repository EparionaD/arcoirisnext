import styles from '../styles/Servicios.module.css';

const Servicios = ({ nombre, contenM, contenD, contenR }) => {
  return (
    <section className={styles.servicios}>
      {nombre == null ? (
        ''
      ) : (
        <h3 className={styles.servicios__title}>{nombre}</h3>
      )}
      {/* <h3 className={styles.servicios__title}>{nombre}</h3> */}
      <div className={styles.servicios__container}>
        <div className={styles.servicios__servicios}>
          <div
            className={styles.servicios__box}
            style={{
              backgroundImage: `linear-gradient(rgba(21, 137, 191, 0.9),rgba(21, 137, 191, 0.9)),url('/img/medios.jpg')`,
            }}
          >
            <p className={styles.servicios__description}>Monitoreo de medios</p>
          </div>
          <p className={styles.servicios__text}>{contenM}</p>
        </div>
        <div className={styles.servicios__servicios}>
          <div
            className={styles.servicios__box}
            style={{
              backgroundImage: `linear-gradient(rgba(217, 57, 45, 0.9),rgba(217, 57, 45, 0.9)),url('/img/diagramacion.jpg')`,
            }}
          >
            <p className={styles.servicios__description}>
              Diseño y diagramación
            </p>
          </div>
          <p className={styles.servicios__text}>{contenD}</p>
        </div>
        <div className={styles.servicios__servicios}>
          <div
            className={styles.servicios__box}
            style={{
              backgroundImage: `linear-gradient(rgba(31, 175, 56, 0.9),rgba(31, 175, 56, 0.9)),url('/img/marketing.jpg')`,
            }}
          >
            <p className={styles.servicios__description}>
              Marketing digital y redes sociales
            </p>
          </div>
          <p className={styles.servicios__text}>{contenR}</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
