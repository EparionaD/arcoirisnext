import Button from './Button';
import styles from '../styles/Section.module.css';

const Section = ({ nombre, boton, contenido, url, fondo, align, text }) => {
  return (
    <section
      className={styles.gestion}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${fondo})`,
        alignItems: `${align}`,
      }}
    >
      <h2 className={styles.gestion__title} style={{ textAlign: `${text}` }}>
        {nombre}
      </h2>
      <p className={styles.gestion__content} style={{ textAlign: `${text}` }}>
        {contenido}
      </p>
      <div>
        <Button nombre={boton} url={url} />
      </div>
    </section>
  );
};

export default Section;
