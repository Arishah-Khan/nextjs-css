import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import MainBtn from "@/components/buttons/button";
import styles from "@/styles/contact/information.module.css"

export default function Information() {
    return (
        <section className={styles.container}>
            <div className={styles.textSection}>
                <h2 className={styles.heading}>Get In Touch With HR <br/> Consultation Experts</h2>
                <p className={styles.para}>
                    {`In choosing a recruitment service, organizations should consider factors such as the agency’s track record, industry expertise, reputation, and alignment with the company’s values and needs.`}
                </p>
                <h4 className={styles.iconheading}>
                    Our Information
                </h4>
                <p className={styles.iconText}>
                <span><IoLocationOutline /></span>1102 Washington Square South New York, America.
                </p>
                <p className={styles.iconText}> <span><FiPhone /></span> (+12) 3456 7890</p>
                <p className={styles.iconText}>
                    <span><MdOutlineEmail /></span>recrutie@example.com
                </p>
            </div>
            <div className={styles.formSection}>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <input type="text" placeholder="Your Name*" />
                        <input type="number" placeholder="Your Phone*" />
                    </div>
                    <input type="email" placeholder="Your Email*" />
                    <textarea name="textarea" id="text" rows={6} placeholder="Your Message*"></textarea>
                    <div><MainBtn text="Send Message" /></div>
                </form>
            </div>
        </section>
    );
}
