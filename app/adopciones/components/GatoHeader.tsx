import Link from "next/link";
import styles from "./GatoHeader.module.css";

const GatoHeader = () => {
    return (
        <header className={styles.gato_header}>
            <h1>Adopciones del hogar de paso Alegría Gatuna</h1>
            <nav>
                <Link href="/adopciones">← Ir a todos los gatos</Link>
            </nav>
        </header>
    )
}

export default GatoHeader; 