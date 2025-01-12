import Image from 'next/image';
import styles from './styles.module.css';
import { Gato, gatos } from '@/app/data/gatos';
import Link from 'next/link';

interface TarjetaAdopcionProps {
    nombre: string;
    edad: string;
    imagen: string;
}

const TarjetaAdopcion = ({ nombre, edad, imagen }: TarjetaAdopcionProps) => {
    return (
        <div className={styles.adoptionCard}>
            <Image
                src={imagen}
                alt={`${nombre}`}
                width={0}
                height={0}
                sizes="70vw"
                style={{ width: '100%', height: 'auto' }}
                className={styles.adoptionCard__image}
            />
            <div className={styles.adoptionCard__info}>
                <h3 className={styles.adoptionCard__name}>{nombre}</h3>
                <p className={styles.adoptionCard__detail}>Edad: {edad}</p>
                <Link href="/adopcion">
                    <button className={styles.adoptionCard__button}>❤️ Adoptar</button>
                </Link>
            </div>
        </div>
    );
}

const ListaAdopcion = () => {

    return (
        <div className={styles.adoptionList}>
            {gatos.map((cat: Gato, index: number) => (
                <TarjetaAdopcion
                    key={index}
                    nombre={cat.nombre}
                    edad={cat.edad}
                    imagen={cat.imagen}
                />
            ))}
        </div>
    );
};

export default ListaAdopcion;