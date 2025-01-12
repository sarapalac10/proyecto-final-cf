import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src="/images/logo_inicio_alegria.png"
                    alt="Ícono de Alegría Gatuna"
                    width={0}
                    height={0}
                    sizes="70vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Link>
            <h1>Hogar de paso Alegría Gatuna</h1>
        </header>
    )
}