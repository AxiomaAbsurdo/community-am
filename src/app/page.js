import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../app/page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="profile_image_am_2.jpeg"
          alt="Profile"
          className={styles.profileImage}
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
