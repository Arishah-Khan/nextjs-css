import Image from "next/image";
import MainBtn from "./buttons/button";
import styles from "@/styles/call.module.css"

export default function Call() {
    return (
        <section className={styles.callSection}>
            <div className={styles.textContent}>
                <h2 className={styles.heading}>Request A Call Back</h2>
                <p>Contact us when you have questions about our solution or anything else.</p>
                <form className={styles.callForm}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea placeholder="Message" rows={4}></textarea>
                    <MainBtn text="Send Request" />
                </form>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/images/call.png" alt="girl" width="350" height="500" className={styles.image}/>
            </div>
        </section>
    );
}
