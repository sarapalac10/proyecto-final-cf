import dayjs from "dayjs";
import Link from "next/link";
import styles from "./GatoItem.module.css";
import Image from "next/image";

type GatoProps = {
    name: string;
    id: string;
    age: string;
    gender: string;
    image_1: any;
    image_2: string;
    look: string;
    status: string;
    story: string;
}

const Gato = ({ name, id, age, gender, image_1, image_2, look, status, story }: GatoProps) => {
    console.log('Image URL:', image_1);
    return (

        <div className={styles.adoptionCard}>
            <Image
                src={''}
                alt={`${name}`}
                width={0}
                height={0}
                sizes="70vw"
                style={{ width: '100%', height: 'auto' }}
                className={styles.adoptionCard__image}
            />
            <div className={styles.adoptionCard__info}>
                <h3 className={styles.adoptionCard__name}>{name}</h3>
                <p className={styles.adoptionCard__detail}>Edad: {age}</p>
                <p className={styles.adoptionCard__detail}>Género: {gender}</p>
                <p className={styles.adoptionCard__detail}>Estado: {status}</p>
                {/* <p className={styles.adoptionCard__detail}>Historia: {story}</p> */}
                <Link href="/adopcion">
                    <button className={styles.adoptionCard__button}>❤️ Adoptar</button>
                </Link>
            </div>
        </div>
    )
}

export default Gato;

