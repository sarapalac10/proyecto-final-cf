import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css';

export default function Footer() {

    return (
        <div className={styles.footerContainer}>
            <nav>
                <ul className={styles.footerSocialIcons}>
                    <li className={styles.footerSocialIcons}>
                        <Link href="/">
                            <Image
                                src="/icons/fb_icon.svg"
                                alt="Ícono de facebook"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/alegria.gatuna/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/instagram_icon.svg"
                                alt="Ícono de instagram"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/whatsapp_icon.svg"
                                alt="Ícono de whatsapp"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </li>
                </ul>
                <ul className={styles.footerLinks}>
                    <li>
                        <Link href="/acerca">Acerca de nosotros</Link>
                    </li>
                    <li>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link href="/voluntario">Ser voluntario</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}