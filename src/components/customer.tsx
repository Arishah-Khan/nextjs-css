import Image from "next/image";
import styles from "@/styles/customer.module.css";

export default function Customer() {
    return (
        <section className={styles.customerContainer}>
            <div className={styles.imageContainer}>
                <Image src="/images/customer.png" alt="Customer" width="350" height="300" className={styles.setWidth}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.iconContainer}>
                    <Image src="/images/icon.png" alt="icon" width="80" height="80" />
                </div>
                <h2 className={styles.heading}>Our Happy Customers</h2>
                <p className={styles.firstParagraph}>
                    “HR Solutions are incredibly accommodating, diligent, and
                    competent. They understand the scope, needs, and importance
                    of both concerned parties within the interviewing and hiring
                    process - That really helps with building a life and career.”
                </p>
                <h4>James Thomas</h4>
                <p className={styles.secondParagraph}>UI Designer</p>
            </div>
        </section>
    );
}
