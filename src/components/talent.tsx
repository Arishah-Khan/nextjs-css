import MainBtn from "./buttons/button";
import styles from "@/styles/talent.module.css"

export default function Talent() {
    return (
        <section className={styles.talentSection}>
            <div className={styles.talentContent}>
                <h2>
                    Find The Best Talents & Build Relationships
                </h2>
                <p>The most complete talent relationship platform for talent sourcing, recruitment events, and internal mobility</p>
                <div className={styles.inputContainer}>
                    <input type="email" placeholder="Enter Email" />
                    <MainBtn text="Subscribe Now" />
                </div>
            </div>
        </section>
    );
}
