import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/contact/ask.module.css";

export default function Ask() {
    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <h3 className={styles.heading}>Frequently Asked Questions</h3>
                <p className={styles.paragraph}>
                    {`If you have questions, we have answers for you here. In case we don’t, please feel free to reach out to us on the `}
                    <Link href="/contact">Contact Us</Link> page.
                </p>
                <hr className={styles.hr} />
                <h6 className={styles.question}>
                    What is Recrutie and how does it work?
                </h6>
                <p className={styles.paragraph}>
                    {`Our solution is agile and flexible, so we can adjust as your needs change. We take great pride in having long-standing client engagements and helping our partner companies grow. We’d be happy to share testimonials from companies like yours, too!`}
                </p>
                <hr className={styles.hr} />
                <div className={styles.plus}>
                    <h6 className={styles.question}>Can we start any time of the year?</h6>
                    <div className={styles.answer}>+</div>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.plus}><h6 className={styles.question}>How does the engagement change as my business scales?</h6>
                    <div className={styles.answer}>+</div>
                    <hr className={styles.hr} /></div>

                <div className={styles.plus}><h6 className={styles.question}>In which countries can I find your company?</h6>
                    <div className={styles.answer}>+</div>
                    <hr className={styles.hr} /></div>

            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/ask.png"
                    width={400}
                    height={600}
                    alt="friends"
                    className={styles.image}
                />
            </div>
        </section>
    );
}
