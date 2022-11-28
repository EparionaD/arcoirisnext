import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Servicios from '../components/Servicios';

export default function Home() {
  return (
    <Layout
      pagina='Inicio'
      contenido='Página de Arco Iris'
      fondo='/img/home.jpg'
      titulo='Arco Iris Comunicación Integral'
      resumen='Somos una empresa de comunicación con servicios especializados en
      gestión social, producción audiovisual y comunicación política.'
      boton='Nosotros'
      url='/nosotros'
      color='0, 0, 0'
    >
      <Section
        nombre='gestión social'
        contenido='Experiencia en gestión y resolución de conflictos sociales, diagnóstico
        social y relaciones comunitarias en los sectores minería, hidrocarburos
        y energía.'
        fondo='/img/gestion-index.jpg'
        boton='Descubre más'
        url='/gestion'
      />
      <Section
        nombre='producción audiovisual'
        contenido='Cine documental y de ficción en formatos de largometrajes y cortometrajes. Producción de videoclips musicales y videos institucionales.'
        fondo='/img/produccion-index.jpg'
        boton='Nuestros proyectos'
        url='/produccion'
      />
      <Servicios nombre='Otros servicios' />
      <Contact />
    </Layout>
  );
}
