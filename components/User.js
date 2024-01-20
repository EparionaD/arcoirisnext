import Link from 'next/link';
import styles from '../styles/User.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { AiOutlineFileText } from 'react-icons/ai';
import Image from 'next/image';

const User = ({ team }) => {
  // console.log(team);
  return (
    <div className={styles.user}>
      {/* <FaUserCircle className={styles.user__photo} /> */}
      <div className={styles.user__container}>
        <Image
          className={styles.user__photo}
          src={team.image}
          width={500}
          height={500}
        />
      </div>
      <h1 className={styles.user__name}>{team.name}</h1>
      <p>{team.job}</p>
      <p className={styles.user__description}>{team.summary}</p>
      <div className={styles.contacto}>
        <p className={styles.contacto__title}>Contacto</p>
        <div className={styles.contacto__email}>
          <HiMail className={styles.contacto__icon} />
          <Link href={`mailto:${team.email}`}>
            <a className={styles.contacto__link}>{team.email}</a>
          </Link>
        </div>
        {/* <div className={styles.cv}>
          <Link
            href={`https://arcoirisnext.vercel.app${team.cv}`}
            target='_blank'
          >
            <a className={styles.boton}>
              <AiOutlineFileText className={styles.boton__icon} /> Ver CV
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default User;
