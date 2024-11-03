// components/MainBtn.js
import { GoArrowUpRight } from "react-icons/go";
import styles from '@/styles/mainBtn.module.css';

interface ButtonProps {
    text: string;
}

export default function MainBtn({ text }: ButtonProps) {
    return (
        <button className={styles.button}>
            <span className={styles.arrow}>
                <GoArrowUpRight />
            </span>
            {text}
        </button>
    );
}
