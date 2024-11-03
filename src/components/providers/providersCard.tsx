import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import styles from "@/styles/provider/cardprovider.module.css";

interface Card {
    title: string;
    image: string[];
}

export default function Card({ title, image }: Card) {
    return (
        <section className={styles.card}>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor…
            </p>
            <Link href="#" className={styles.link}>
                Explore Now <GoArrowUpRight />
            </Link>
            <div className={styles.imageContainer}>
                <Image
                    src={image[0]}
                    alt="backgroundColour"
                    className={styles.imageBackground}
                    width="300"
                    height="300"
                />
                <Image
                    src={image[1]}
                    alt="pics"
                    className={styles.imageForeground}
                    width="200"
                    height="200"
                />
            </div>
        </section>
    );
}
