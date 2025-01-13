import styles from './styles.module.css';

export default function Acerca() {
    return (
        <div className={styles.containerAcerca}>
            <h1>Acerca de Nosotros</h1>
            <p>
                Alegría Gatuna es una fundación sin ánimo de lucro creada en 2023 en Medellín, Colombia.
                Nuestro propósito es rescatar, cuidar y encontrar hogares amorosos para gatos en situación de abandono.
            </p>
            <h2>Nuestra Misión</h2>
            <p>Brindar una segunda oportunidad a los gatos más vulnerables.</p>
            <h2>Nuestra Visión</h2>
            <p>Soñamos con un mundo donde cada gato tenga un hogar lleno de amor y cuidado.</p>
            <h2>Valores</h2>
            <ul>
                <li>Compasión</li>
                <li>Responsabilidad</li>
                <li>Transparencia</li>
                <li>Amor por los animales</li>
            </ul>
            <div className={styles.impact}>
                <h3>Impacto</h3>
                <p>
                    En los últimos dos años, hemos rescatado a más de 40 gatos y esterilizado a más de 75, evitando
                    la proliferación de gatos callejeros.
                </p>
            </div>
        </div>
    )
}