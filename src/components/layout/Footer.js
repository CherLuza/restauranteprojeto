import { FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Restaurante Cacupé</span> &copy; 2024
            </p>
        </footer>
    )
}

export default Footer
