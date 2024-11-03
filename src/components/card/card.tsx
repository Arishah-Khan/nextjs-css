import Image from "next/image"; // Ensure you have this import
import styles from "@/styles/card.module.css"; // Import your styles if needed

interface CardProps {
    image: string;
    heading: string;
    bgColour: string; // Add bgColour prop
}

export default function Card({ image, heading, bgColour }: CardProps) {
    return (
        <div className={styles.card} style={{ backgroundColor: bgColour }}> 
            <div className={styles.imageContainer}>
                <Image src={image} alt={heading} width={50} height={50} />
            </div>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.description}>Get o’clock guidance on how to attract more cadidates.</p>
        </div>
    );
}
