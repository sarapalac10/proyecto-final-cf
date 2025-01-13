import ListaAdopcion from './components/ListaAdopcion';
import styles from './styles.module.css';

const Adopciones = () => {

    return (
        <div className={styles.container}>
            <h1>Adopciones</h1>
            <h2>Conoce a tu nuevo mejor amigo</h2>

            <ListaAdopcion />
        </div>
    )
}

export default Adopciones;