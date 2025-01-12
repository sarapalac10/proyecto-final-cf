import Link from "next/link";
import styles from "./EventoHeader.module.css";

const EventoHeader = () => {
    return (
        <header className={styles.evento_header}>
            <h1>Eventos del hogar de paso Alegría Gatuna</h1>
            <nav>
                <Link href="/evento">← Ir a todos los eventos</Link>
            </nav>
        </header>
    )
}

export default EventoHeader; 