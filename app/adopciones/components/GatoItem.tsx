import Link from "next/link";
import styles from "./GatoItem.module.css";

type GatoProps = {
    name: string;
    id: string;
    age: string;
    gender: string;
    image_1: string;
    image_2: string;
    look: string;
    status: string;
    story: string;
}

const Gato = ({ name, id, age, gender, image_1, status }: GatoProps) => {
    const isAvailable = status.toLowerCase() === 'disponible';
    return (
        <div className={styles.adoptionCard}>
            <img src={image_1} alt={name} />

            <div className={styles.adoptionCard__info}>
                <h3 className={styles.adoptionCard__name}>{name}</h3>
                <p className={styles.adoptionCard__detail}>Edad: {age}</p>
                <p className={styles.adoptionCard__detail}>Género: {gender}</p>
                <p className={styles.adoptionCard__detail}>Estado: {status}</p>
                <Link href={`/adopciones/${id}`}>
                    <button
                        className={`${styles.adoptionCard__button} ${!isAvailable ? styles.adoptionCard__button_disabled : ''}`}
                        disabled={!isAvailable}
                    >
                        {isAvailable ? '❤️  Adoptar' : 'No Disponible'}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Gato;

