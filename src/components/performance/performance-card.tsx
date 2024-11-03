import Image from "next/image";
import styles from "@/styles/performance/performance-card..module.css";

interface Card {
    title: string;
    description: string;
    image: string;
}

export default function Card({ title, description, image }: Card) {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.icon}>
                <Image src={image} alt="icon" width="60" height="60" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </section>
    );
}
