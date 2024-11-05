import Image from "next/image";
import MainBtn from "../buttons/button";
import styles from "@/styles/about/about-sec.module.css";

export default function AboutSec() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image src="/images/container.png" alt="team" width="350" height="300" className={styles.setImg} />
                </div>
                <div className={styles.textSec}>
                <h2 className={styles.heading}>One Stop Solution For All Your HR Needs</h2>
                <p className={styles.paragraph}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <h4 className={styles.subheading}>Our Mission</h4>
                <p className={styles.paragraph}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className={styles.paragraph}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.
                </p>

                <MainBtn text="About us" />
                </div>
            </div>
        </section>
    );
}
