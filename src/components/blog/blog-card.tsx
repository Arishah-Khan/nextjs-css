import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import styles from "@/styles/blog/blog-card.module.css"

interface BlogCardProps {
    span1: string;
    span2: string;
    heading: string;
    image: string;
}

export default function BlogCard({ span1, span2, heading, image }: BlogCardProps) {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image src={image} alt="Blog Image" width={250} height={170} />
            </div>
            <div className={styles.spans}>
                <span>{span1}</span>
                <span>{span2}</span>
            </div>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.para}>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantiu…
            </p>
            <div className={styles.readmore}>
                <Link href="#">
                    Read More
                    <span className={styles.arrow}>
                        <GoArrowUpRight />
                    </span>
                </Link>
            </div>
        </section>
    );
}
