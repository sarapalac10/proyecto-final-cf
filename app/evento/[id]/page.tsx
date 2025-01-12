import { createClient } from "@/utils/supabase/server";
import dayjs from "dayjs";
import styles from "./EventDetail.module.css";

const EventoDetail = async ({ params }: { params: Promise<{ id: number }> }) => {
    const id = (await params).id;
    const supabase = await createClient();

    const { data, error } = await supabase.from('event_post').select(`
        id,
        title,
        content,
        image,
        published_at,
        event_info!inner(date, place),
        event_author!inner(name)
    `).eq('id', id).single();

    console.log(data);

    if (error) {
        console.log('Error en evento:', error.message);
        return (
            <p
                style={{
                    color: '#dc2626',
                    padding: '1rem',
                    backgroundColor: '#ece6e5',
                    borderRadius: '0.375rem',
                    textAlign: 'center',
                    margin: '1rem'
                }}
            >
                Error en cargar los detalles del evento
            </p>
        );
    }

    return (
        <div className={styles.anuncio_container}>
            <div className={styles.anuncio_left}>
                <img src={data?.image} alt={data?.title} />
            </div>
            <div className={styles.anuncio_right}>
                <h1> {data?.title} </h1>
                <div className={styles.tagsContainer}>
                    <p>{data?.content}</p>
                    <span>
                        Fecha y lugar del evento:
                        <p className={styles.tagFecha}>{dayjs(data?.event_info.date).format("DD/M/YYYY")} {data?.event_info.place}</p>
                    </span>
                </div>
                <span className={styles.tagLabel}>
                    Publicado por:
                    <span className={styles.tagValue}>{data?.event_author.name}</span>
                    Fecha de publicación:
                    <span className={styles.tagValue}>{dayjs(data?.published_at).format("DD/M/YYYY")}</span>
                </span>
            </div>
        </div>


    )
}

export default EventoDetail;    