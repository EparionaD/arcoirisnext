import Layout from '../components/Layout';
import Contact from '../components/Contact';

const produccion = () => {
  return (
    <Layout
      pagina='Producción audiovisual'
      contenido='Producción'
      titulo='producción audiovisual'
      resumen='Una muestra de nuestros últimos trabajos en cine, música y videos institucionales.'
      color='255, 255, 255'
      colorN='black'
      justify='start'
    >
      <Contact nombre='otros servicios' />
    </Layout>
  );
};

export default produccion;
