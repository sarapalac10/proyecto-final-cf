import dayjs from "dayjs";
import Link from "next/link";
import styles from "./Anuncio.module.css";

type AnuncioProps = {
    image: string;
    title: string;
    id: string;
    description: string;
    published_at: string;
    event_info: {
        date: string;
        place: string;
    };
    event_author: {
        name: string;
    };
}

const Anuncio = ({
    image,
    title,
    id,
    description,
    published_at: publishedDate,
    event_info,
    event_author,
}: AnuncioProps) => {
    return (
        <div className={styles.anuncio_container}>
            <div className={styles.anuncio_left}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.anuncio_right}>
                <Link href={`/evento/${id}`}>
                    <h1> {title} </h1>
                </Link>
                <div className={styles.tagsContainer}>
                    <p>{description}</p>
                    <span className={styles.tagLabel}>
                        Fecha y lugar del evento:
                        <span className={styles.tagValue}>{dayjs(event_info.date).format("DD/M/YYYY")} <strong>-</strong> {event_info.place}</span>
                    </span>
                </div>
                <span className={styles.tagLabel}>
                    Autor:
                    <span className={styles.tagValue}>{event_author.name}</span>
                </span>
                <span className={styles.tagLabel}>
                    Fecha de publicación:
                    <span className={styles.tagValue}>{dayjs(publishedDate).format("DD/M/YYYY")}</span>
                </span>
            </div>
        </div>
    )
}

export default Anuncio;