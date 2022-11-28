import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  pagina,
  contenido,
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
  // console.log(altur);
  console.log(justify);
  // console.log(prueba);
  return (
    <div>
      <Head>
        <title>Arco Iris - {pagina}</title>
        <meta name='description' content={contenido} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header
        fondo={fondo}
        titulo={titulo}
        resumen={resumen}
        boton={boton}
        url={url}
        color={color}
        colorN={colorN}
        justify={justify}
        altur={altur}
        margin={margin}
      ></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
