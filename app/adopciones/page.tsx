import ListaAdopcion from './components/ListaAdopcion';
import styles from './styles.module.css';

const Adopciones = () => {

    return (
        <div className={styles.container}>
            <h1>Adopciones</h1>
            <h2>Descubre el amor más puro: Adopta y cambia dos historias de vida para siempre</h2>

            <ListaAdopcion />
        </div>
    )
}

export default Adopciones;