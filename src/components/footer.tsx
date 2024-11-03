import Image from "next/image";
import MainBtn from "./buttons/button";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import styles from "@/styles/footer.module.css";

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div>
                    <Image src="/images/footer.svg" width="150" height="100" alt="footerLogo" />
                </div>
                <p className={styles.description}>
                    We are a recruitment agency that helps you find more talents to develop business.
                </p>
                <div className={styles.inputContainer}>
                    <input type="email" placeholder="Enter Email" />
                    <div className={styles.subscribe}><MainBtn text="Subscribe Now"/></div>
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.icon}><FaInstagram /></div>
                    <div className={styles.icon}><FaFacebookSquare /></div>
                    <div className={styles.icon}><MdOutlineQrCodeScanner /></div>
                </div>
            </div>
            <div className={styles.linksContainer}>
                <div>
                    <h4 className={styles.ulHeading}>Solution</h4>
                    <ul>
                        <li className={styles.list}>Pricing</li>
                        <li className={styles.list}>Meet Our Team</li>
                        <li className={styles.list}>Blog</li>
                        <li className={styles.list}>HR Guides</li>
                        <li className={styles.list}>Customer Testimonials</li>
                        <li className={styles.list}>Outsourcing</li>
                        <li className={styles.list}>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.ulHeading}>About Us</h4>
                    <ul>
                        <li className={styles.list}>Our Services</li>
                        <li className={styles.list}>HR Training</li>
                        <li className={styles.list}>Careers</li>
                        <li className={styles.list}>Events</li>
                        <li className={styles.list}>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.ulHeading}>Help & Support</h4>
                    <ul>
                        <li className={styles.list}>Review</li>
                        <li className={styles.list}>Find A Partner</li>
                        <li className={styles.list}>Why Recrutie</li>
                        <li className={styles.list}>HR Guides</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
