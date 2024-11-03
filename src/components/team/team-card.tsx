import Image from "next/image";
import styles from "@/styles/team/teamCard.module.css"

interface TeamDetail {
    img: string;
    title: string;
}

export default function Card({ img, title }: TeamDetail) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={img} alt="member" width="190" height="150" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.email}>miye@example.com</p>
            <span className={styles.line}></span>
            <div className={styles.listContainer}>
                <Image src="/images/List.png" width="170" height="20" alt="list" />
            </div>
        </div>
    );
}
