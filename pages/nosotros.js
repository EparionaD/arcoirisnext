import Layout from '../components/Layout';
import Contact from '../components/Contact';
import styles from '../styles/Nosotros.module.css';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { FaRegHandshake } from 'react-icons/fa';
import { HiArrowSmRight } from 'react-icons/hi';
import { BsMinecartLoaded } from 'react-icons/bs';
import { RiOilLine } from 'react-icons/ri';
import { SlEnergy } from 'react-icons/sl';
import User from '../components/User';

import teams from '../utils/users.json';

const nosotros = () => {
  const users = teams.data;
  return (
    <Layout
      pagina='Nosotros'
      contenido='Somos una empresa de comunicación con servicios especializados en gestión social, producción audiovisual y comunicación política.'
      fondo='/img/nosotros.jpg'
      titulo='Arco Iris Comunicación Integral'
      resumen='Somos una empresa de comunicación con servicios especializados en gestión social, producción audiovisual y comunicación política.'
      // boton='Nuestras estrategias'
      // url='/'
      color='0, 0, 0'
    >
      <section className={styles.nosotros}>
        <div className={styles.proposito}>
          <div className={styles.proposito__container}>
            <h2 className={styles.proposito__title}>Nuestro propósito</h2>
            <div className={styles.proposito__content}>
              <p className={styles.proposito__description}>
                En Arco Iris Comunicación Integral estamos convencidos de que
                una comunicación honesta, inteligente, innovadora y eficaz ayuda
                a generar confianza y entendimiento entre personas, empresas e
                instituciones.
              </p>
              <p className={styles.proposito__description}>
                Creemos que la comunicación forma parte de la solución a muchos
                de los desafíos de nuestro tiempo en las problemáticas sociales.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.icons__container}>
              <HiOutlineChatAlt2 className={styles.icons__icon} />
              <p className={styles.icons__text}>Buena comunicación</p>
            </div>
            <div>
              <HiArrowSmRight
                className={styles.icons__icon}
                style={{ color: `var(--primary)` }}
              />
            </div>
            <div className={styles.icons__container}>
              <FaRegHandshake className={styles.icons__icon} />
              <p className={styles.icons__text}>Confianza y entendimiento</p>
            </div>
          </div>
        </div>
        <div className={styles.proposito}>
          <div className={styles.proposito__container}>
            <h2 className={styles.proposito__title}>Nuestro trabajo</h2>
            <div className={styles.proposito__content}>
              <p className={styles.proposito__description}>
                Contamos con 10 años de experiencia como consultora de
                comunicación en gestión social para proyectos de empresas
                privadas de sectores extractivos como minería, hidrocarburos y
                energía.
              </p>
              <p className={styles.proposito__description}>
                Asimismo, hemos desarrollado un área de producción audiovisual
                con el objetivo de elaborar obras artísticas que ayuden al
                entendimiento de nuestro país.
              </p>
            </div>
          </div>
          <div className={styles.trabajo}>
            <div className={styles.trabajo__container}>
              <BsMinecartLoaded
                className={styles.trabajo__icon}
                style={{ color: 'var(--primary)' }}
              />
              <p
                className={styles.trabajo__text}
                style={{ color: 'var(--primary)' }}
              >
                Minería
              </p>
            </div>
            <div className={styles.trabajo__container}>
              <RiOilLine
                className={styles.trabajo__icon}
                style={{ color: 'var(--marketing)' }}
              />
              <p
                className={styles.trabajo__text}
                style={{ color: 'var(--marketing)' }}
              >
                Hidrocarburos
              </p>
            </div>
            <div className={styles.trabajo__container}>
              <SlEnergy
                className={styles.trabajo__icon}
                style={{ color: 'var(--medios)' }}
              />
              <p
                className={styles.trabajo__text}
                style={{ color: 'var(--medios)' }}
              >
                Energía
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.equipo}>
        <div className={styles.equipo__content}>
          <h3 className={styles.equipo__title}>Nuestro equipo</h3>
          <div>
            <p className={styles.equipo__description}>
              Arco Iris Comunicación Integral ha formado un equipo
              multidisciplinario para una mejor planificación, análisis y
              ejecución de sus proyectos.
            </p>
            <p className={styles.equipo__description}>
              Esta diversidad de los perfiles profesionales ha permitido un
              mejor abordaje de los temas de gestión social y comunicación en
              los que la consultora ha trabajado en toda su trayectoria.
            </p>
          </div>
        </div>
        <div className={styles.nosotros__user}>
          {users.map((team) => (
            <User team={team} key={team.id} />
          ))}
          {/* <User
            nombre='Luis Pariona Arana'
            carrera='Comunicador y economista'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.'
            email='lpariona@arcoiris.pe'
            url='/'
          />
          <User
            nombre='Omar Sapaico'
            carrera='Comunicador'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.'
            email='osapaico@arcoiris.pe'
            url='/'
          />
          <User
            nombre='Christian Ramírez'
            carrera='Comunicador'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.'
            email='cramirez@arcoiris.pe'
            url='/'
          />
          <User
            nombre='Cristian Jayos'
            carrera='Comunicador'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.'
            email='cjayos@arcoiris.pe'
            url='/'
          />
          <User
            nombre='Salvador Pariona'
            carrera='Comunicador'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.'
            email='spariona@arcoiris.pe'
            url='/'
          />
          <User
            nombre='Ernesto Pariona'
            carrera='Informático'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.'
            email='epariona@arcoiris.pe'
            url='/'
          /> */}
        </div>
      </section>
      <Contact />
    </Layout>
  );
};

export default nosotros;
