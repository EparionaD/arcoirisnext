import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Card from '../components/Card';
import styles from '../styles/Produccion.module.css';
import data from '../utils/projects.json';

const produccion = () => {
  const projects = data.data;
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
      <Card projects={projects} />
      <Contact nombre='otros servicios' />
    </Layout>
  );
};

export default produccion;
