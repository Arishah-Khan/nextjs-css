import Image from "next/image";
import styles from "@/styles/about/commitment/commitment-card.module.css";

interface CardProps {
    image: string;
    heading: string;
    description: string;
}

export default function Card({ image, heading, description }: CardProps) {
    return (
        <section className={styles.cardSection}>
            <div className={styles.imageContainer}>
                <Image src={image} alt="cardImg" width={70} height={70} />
            </div>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.description}>{description}</p>
        </section>
    );
}
