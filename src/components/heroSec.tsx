import Image from "next/image";
import MainBtn from "./buttons/button";
import Header from "./header";
import styles from "@/styles/heroSec.module.css"; // Import your CSS module

export default function HeroSec() {
    return (
        <main className={styles.bgImg}>
            <Header />
            <section className={styles.heroSection}>
                {/* First Image Row */}
                <div className={styles.imageContainer}>
                    <div className={styles.silder2}>
                        <Image src="/images/layer1.png" alt="Layer 1" width={100} height={100} className={styles.silder2} />
                    </div>
                    <div className={styles.silder1}>
                        <Image src="/images/layer2.png" alt="Layer 2" width={100} height={100} className={styles.silder1} />
                    </div>
                </div>

                {/* Center Content */}
                <div className={styles.centerContent}>
                    <div>
                        <h1 className={styles.heading}>Best Solution To Get Good Employees</h1>
                        <p className={styles.para}>Social creatures, living in prides led by a dominant male. They rely on teamwork during hunts, showcasing their exceptional hunting skills.</p>
                        <div>
                            <MainBtn text="Learn More" />
                        </div>
                    </div>
                    <div>
                        <Image src="/images/multiplebtn.png" alt="Multiple Button" width={500} height={150} className={styles.centerImg}/>
                    </div>
                </div>

                {/* Second Image Row */}
                <div className={styles.imageContainer}>
                    <div className={styles.silder2}>
                        <Image src="/images/layer3.png" alt="Layer 3" width={100} height={100} className={styles.silder1} />
                    </div>
                    <div className={styles.silder1}>
                        <Image src="/images/layer4.png" alt="Layer 4" width={100} height={100} className={styles.silder2} />
                    </div>
                </div>
            </section>
        </main>
    );
}
