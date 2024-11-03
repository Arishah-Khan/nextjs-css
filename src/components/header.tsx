"use client";
import { useState } from "react";
import Image from "next/image";
import MainBtn from "./buttons/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import styles from "@/styles/header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" width="100" height="40" alt="blackriselogo" />
            </div>

            <button className={styles.hamburger} onClick={toggleMenu}>
                {!isMenuOpen ? <GiHamburgerMenu /> : <RxCross2 />}
            </button>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
                <ul className={styles.menu}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                {/* Button placed here, below the menu */}
                {isMenuOpen && (
                    <div className={styles.buttonContainer}>
                        <MainBtn text="Get A Quote" />
                    </div>
                )}
            </nav>
            <div className={styles.buttonSet}>
                <MainBtn text="Get A Quote" />
            </div>
        </header>
    );
}
