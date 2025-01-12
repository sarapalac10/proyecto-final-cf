'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label="Menú"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
                <li>
                    <Link href="/eventos">Eventos</Link>
                </li>
                <li>
                    <Link href="/adopcion">Adoptar</Link>
                </li>
                <li>
                    <Link href="/donacion">Donaciones</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}