import Image from "next/image";
import styles from "@/styles/leadership.module.css"

export default function LeaderShip() {
    return (
        <main className={styles.main}>
            <div className={styles.headingContainer}>
                <h2 className={styles.heading}>A Leading Global Provider Of Recruitment</h2>
            </div>
            <div className={styles.imagesContainer}>
                <div className={styles.imageWrapper}>
                    <Image src="/images/leading1.png" alt="team" width={100} height={100} className={styles.setSize} />
                    <Image src="/images/leading2.png" alt="team" width={100} height={100} className={styles.imageOverlay} />
                </div>
                <div className={styles.paragraphContainer}>
                    <p className={styles.paragraph}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae.
                    </p>
                    <div className={styles.featuresContainer}>
                        <div className={styles.setDirection}>
                            <div className={styles.feature}>
                                <h3 className={styles.heading3}>Profile Highlighter</h3>
                                <p className={styles.para}>Get highlighted by the company that you’ve been worked.</p>
                            </div>
                            <div className={styles.feature}>
                                <h3 className={styles.heading3}>Leadership Training</h3>
                                <p className={styles.para}>Get highlighted by the company that you’ve been worked.</p>
                            </div>
                        </div>
                        <div className={styles.setDirection}>
                            <div className={styles.feature}>
                                <h3 className={styles.heading3}>Find Suitable Candidates</h3>
                                <p className={styles.para}>Get highlighted by the company that you’ve been worked.</p>
                            </div>
                            <div className={styles.feature}>
                                <h3 className={styles.heading3}>Fast On Demand Service</h3>
                                <p className={styles.para}>Get highlighted by the company that you’ve been worked.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.statsContainer}>
                <div className={styles.stat}>
                    <h2 className={styles.numbers}>834.0 M</h2>
                    <p className={styles.des}>Total Freelancer</p>
                </div>
                <div className={styles.stat}>
                    <h2 className={styles.numbers}>732.0 M</h2>
                    <p className="des">Positive Review</p>
                </div>
                <div className={styles.stat}>
                    <h2 className={styles.numbers}>90.0 M</h2>
                    <p className={styles.des}>Order Received</p>
                </div>
                <div className={styles.stat}>
                    <h2 className={styles.numbers}>236.0 M</h2>
                    <p className={styles.des}>Project Complete</p>
                </div>
            </div>
        </main>
    );
}
