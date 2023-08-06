import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaFileAlt, FaCalendarAlt } from "react-icons/fa";
import styles from "../app/page.module.css";
import Image from 'next/image'


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="profile_image_am_1.jpeg"
          alt="Profile"
          className="object-cover"
          layout="fill"
          objectFit="cover"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.linksContainer}>
        <nav>
          <ul className={styles.linksList}>
            <li>
              <Link href="https://www.instagram.com/community_am/">
                <FaInstagram /> Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/avmartinez/">
                <FaLinkedin /> LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100093287414365">
                <FaFacebook /> Facebook
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/10-_scx_Llddhp4k7a3buYEkFmyBdBsTI/view?usp=sharing">
                <FaFileAlt /> Guía Emprendedores
              </Link>
            </li>
            <li>
              <Link href="https://calendly.com/community_am/15min">
                <FaCalendarAlt /> Agendá una Asesoría
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;

