"use client";
import { useState } from "react";
import Image from "next/image";
import MainBtn from "./buttons/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Get current path

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
                    <li>
                        <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About Us</Link>
                    </li>
                    <li>
                        <Link href="/services" className={pathname === "/services" ? styles.active : ""}>Services</Link>
                    </li>
                    <li>
                        <Link href="/cases" className={pathname === "/cases" ? styles.active : ""}>Case Studies</Link>
                    </li>
                    <li>
                        <Link href="/blog" className={pathname === "/blog" ? styles.active : ""}>Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact Us</Link>
                    </li>
                </ul>
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
