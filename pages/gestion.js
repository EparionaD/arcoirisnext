import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Section from '../components/Section';

const gestion = () => {
  return (
    <Layout
      pagina='Gestión social'
      contenido='Gestión social ....'
      fondo='/img/gestion.jpg'
      titulo='GESTIÓN Y RESOLUCIÓN DE CONFLICTOS SOCIALES'
      resumen='Asesoría en la estrategia de intervención frente a conflictos sociales.'
      boton='Nuestras estrategias'
      url='/'
      color='0, 0, 0'
    >
      <Section
        nombre='diagnóstico social'
        contenido='Evaluación social y política para proyectos de inversión en comunidades campesinas y nativas.'
        fondo='/img/gestion-diagnostico.jpg'
        boton='Descubre más'
        url='/gestion'
        align='end'
        text='end'
      />
      <Section
        nombre='relaciones comunitarias'
        contenido='Desde el mapeo de actores, planes de resposabilidad social y documentos de gestión.'
        fondo='/img/gestion-relaciones.jpg'
        boton='Nuestro trabajo'
        url='/gestion'
      />
      <Contact />
    </Layout>
  );
};

export default gestion;
