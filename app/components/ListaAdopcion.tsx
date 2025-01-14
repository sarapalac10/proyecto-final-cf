import styles from './ListaAdopcion.module.css';
import { gatos } from '@/app/data/gatos';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';

interface TarjetaAdopcionProps {
    nombre: string;
    edad: string;
    imagen: string;
    id: number;
}

interface Gato {
    nombre: string;
    id: number;
    sexo: string;
    estado: string;
    edad: string;
    caracteristicas: string;
    historia: string;
    imagen: string;
}

const obtenerGatos = async () => {
    return gatos;
}

const TarjetaAdopcion = ({ nombre, imagen }: TarjetaAdopcionProps) => {
    return (
        <Link href="/adopciones" className={styles.adoptionLink}>
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

    const [gatos, setGatos] = useState<Gato[]>([])

    useEffect(() => {
        const fetchGatos = async () => {
            const data = await obtenerGatos()
            const gatosAleatorios = data
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
            setGatos(gatosAleatorios)
        }

        fetchGatos()
    }, [])

    return (
        <div className={styles.adoptionList}>
            {gatos.map((gato) => (
                <TarjetaAdopcion
                    key={gato.id}
                    nombre={gato.nombre}
                    edad={gato.edad}
                    imagen={gato.imagen}
                    id={gato.id}
                />
            ))}
        </div>
    )
}

export default ListaAdopcion;