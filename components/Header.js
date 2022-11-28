import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import Button from './Button';
import Navbar from './Navbar';

const Header = ({
  fondo,
  titulo,
  resumen,
  boton,
  url,
  color,
  colorN,
  justify,
  altur,
  margin,
}) => {
  const { asPath } = useRouter();

  return (
    <header
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(${color}, 0.5), rgba(${color}, 0.3)), url(${fondo})`,
        justifyContent: `${justify}`,
        height: `${altur}`,
      }}
    >
      <Navbar colorN={colorN} />
      <div className={styles.container} style={{ paddingBottom: `${margin}` }}>
        <h1 className={styles.title} style={{ color: `${colorN}` }}>
          {titulo}
        </h1>
        <p className={styles.content} style={{ color: `${colorN}` }}>
          {resumen}
        </p>
        {/* {asPath == '/produccion' ||
        asPath == '/servicios' ||
        asPath == '/contacto' ? (
          ''
        ) : (
          <Button nombre={boton} url={url} />
        )} */}
        {boton == null ? '' : <Button nombre={boton} url={url} />}
      </div>
    </header>
  );
};

export default Header;
