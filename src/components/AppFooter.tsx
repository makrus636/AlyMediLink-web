import Image from "next/image";
import Link from "next/link";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.container}>
          {/* Brand */}
          <div className={styles.footerContent}>
            <Image
              src="/logo/favicon.ico"
              alt="AlyMediLink logo"
              width={50}
              height={50}
              className={styles.logo}
            />
            <p>
              Professional IT consulting services provider with a focus on
              security, cloud, and infrastructure.
            </p>
          </div>

          {/* Contact */}
          <div className={styles.footerContent}>
            <h3>Contact</h3>
            <p>
              Bantengan, Mulyosari, Kec. Pagerwojo, Kabupaten Tulungagung, Jawa
              Timur 66262
            </p>
            <p>aliamem16@gmail.com</p>
            <p>+62 857-3883-7735</p>
          </div>

          {/* Links */}
          <div className={styles.footerContent}>
            <h3>Link</h3>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#service">Services</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className={styles.footerContent}>
            <h3>Follow Us</h3>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/makrus.ali_a" aria-label="Instagram">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://github.com/makrus636" aria-label="GitHub">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="GitHub"
                />
              </a>
              <a href="https://www.youtube.com/@AlyMedilink" aria-label="YouTube">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png"
                  alt="YouTube"
                />
              </a>
              <a href="#" aria-label="TikTok">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png"
                  alt="TikTok"
                />
              </a>
            </div>
          </div>
        </div>

        <span className={styles.copyright}>&copy; 2024 AlyMediLink. All rights reserved.</span>
      </div>
    </footer>
  );
}
