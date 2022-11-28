import Servicios from '../components/Servicios';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const servicios = () => {
  return (
    <Layout
      pagina='Otros servicios'
      contenido='Otros servicios'
      titulo='Otros servicios'
      resumen='Nuestra consultora también ofrece otros servicios relacionados a la comunicación social y audiovisual.'
      color='255, 255, 255'
      colorN='black'
      justify='start'
      altur='auto'
      margin='0'
    >
      <Servicios
        altura='auto'
        contenM='Seguimiento y sistematización de información noticiosa de forma personalizada según los intereses del cliente.
        Reportes diarios, semanales y mensuales con información destacada.'
        contenD='Elaboración de materiales gráficos impresos y virtuales.
        Gráficos interactivos e infografías.
        Flyers, banners y materiales institucionales y corporativos.'
        contenR='Estrategias de marketing digital y redes sociales que incluyen posicionamiento SEO y SEM.
        Community Managemet de redes sociales.
        Campañas de publicidad en medios virtuales.'
      />
      <Contact />
    </Layout>
  );
};

export default servicios;
