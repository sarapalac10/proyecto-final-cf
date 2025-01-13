import Image from 'next/image';
import styles from './ListaAdopcion.module.css';
import { Gato, gatos } from '@/app/data/gatos';
import Link from 'next/link';

interface TarjetaAdopcionProps {
    nombre: string;
    edad: string;
    imagen: string;
    id: number;
}

const TarjetaAdopcion = ({ nombre, edad, imagen, id }: TarjetaAdopcionProps) => {

    console.log(nombre, edad, imagen);
    return (
        <Link href="/adopciones">
            <div className={styles.adoptionCard}>
                <img src={imagen} alt={nombre} />
                <div className={styles.adoptionCard__info}>
                    <h3 className={styles.adoptionCard__name}>{nombre}</h3>
                </div>
            </div>
        </Link>
    );
}

const ListaAdopcion = () => {
    const obtenerGatosAleatorios = () => {
        const gatosDesordenados = [...gatos].sort(() => Math.random() - 0.5);
        return gatosDesordenados.slice(0, 3);
    };

    return (
        <div className={styles.adoptionList}>
            {obtenerGatosAleatorios().map((cat: Gato, index: number) => (
                <TarjetaAdopcion
                    key={cat.id}
                    nombre={cat.nombre}
                    edad={cat.edad}
                    imagen={cat.imagen}
                    id={cat.id}
                />
            ))}
        </div>
    );
};

export default ListaAdopcion;