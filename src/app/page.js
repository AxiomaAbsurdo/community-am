import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaFileAlt, FaCalendarAlt } from "react-icons/fa";
import styles from "../app/page.module.css";

const Home = () => {
  return (
    <><div>
      <Head>
        <title>Cummunity AM</title>
        <meta name="description" content="Master Marketing - Offering expert tips and insights for Marketing Analysts, Social Media Managers, Copywriters, and all digital marketing enthusiasts." />
        <meta name="keywords" content="Marketing Analyst, Social Media Manager, Copywriting, Branding Tips, Digital Marketing, Marketing Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async src="https://www.googletagmanager.com/gtag/js?id=G-CSBKCD60YL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-CSBKCD60YL');;
              `,
          }}
        />
      </Head>
    </div><div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="profile_image_am_2.jpeg"
            alt="Profile"
            className={styles.profileImage} />
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
      </div></>
  );
};

export default Home;

