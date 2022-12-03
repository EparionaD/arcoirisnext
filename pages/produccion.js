import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Card from '../components/Card';
import Modal from '../components/Modal';
import styles from '../styles/Produccion.module.css';
import { useState } from 'react';

const produccion = () => {
  const [modal, setModal] = useState(false);
  return (
    <Layout
      pagina='Producción audiovisual'
      contenido='Producción'
      titulo='producción audiovisual'
      resumen='Una muestra de nuestros últimos trabajos en cine, música y videos institucionales.'
      color='255, 255, 255'
      colorN='black'
      justify='start'
      margin='0'
      altur='auto'
    >
      <section className={styles.produccion}>
        <Card
          fondo={`url('/img/home.jpg')`}
          titulo='la danza del zorzal'
          resumen='Largometraje documental sobre la danza del Huaylarsh del valle del
          Mantaro'
        />
      </section>
      <Contact nombre='otros servicios' />
    </Layout>
  );
};

export default produccion;
