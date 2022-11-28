import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from '../styles/Social.module.css';

const Social = () => {
  return (
    <div className={styles.social}>
      <Link href=''>
        <a className={styles.links}>
          <FaFacebook className={styles.social__facebook} />
        </a>
      </Link>
      <Link href=''>
        <a className={styles.links}>
          <FaLinkedin className={styles.social__linkedin} />
        </a>
      </Link>
      <Link href=''>
        <a className={styles.links}>
          <FaYoutube className={styles.social__youtube} />
        </a>
      </Link>
    </div>
  );
};

export default Social;
