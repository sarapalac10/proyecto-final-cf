import { createClient } from "@/utils/supabase/server";
import GatoHeader from "../components/GatoHeader";
import styles from "./GatoDetail.module.css";
import GatoForm from "../components/GatoForm";

type Props = {
    params: {
        id: string
    }
    searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function AdopcionDetallePage({ params, searchParams }: Props) {
    const resolvedParams = await Promise.resolve(params);
    const resolvedSearchParams = await Promise.resolve(searchParams);

    const showForm = resolvedSearchParams?.showForm === 'true';
    const id = resolvedParams.id;
    const supabase = await createClient();

    const { data: gato, error: gatoError } = await supabase.from('gatos').select().eq('id', id).single();

    if (gatoError) {
        console.log('Error en gato:', gatoError.message);
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
                Error al obtener los detalles del gato
            </p>
        );
    }

    return (
        <div>
            <GatoHeader />
            <div className={styles.adoptionCard}>
                <div className={styles.adoptionCard__image}>
                    <img src={gato?.image_1} alt={gato?.name} />
                </div>
                <div className={styles.adoptionCard__info}>
                    <div className={styles.adoptionCard__info}>
                        <h3 className={styles.adoptionCard__name}>{gato?.name}</h3>
                        <p className={styles.adoptionCard__detail}>Edad: {gato?.age}</p>
                        <p className={styles.adoptionCard__detail}>Género: {gato?.gender}</p>
                        <p className={styles.adoptionCard__detail}>Estado: {gato?.status}</p>
                        <p className={styles.adoptionCard__detail}>{gato?.story}</p>
                    </div>
                    <form action={`/adopciones/${id}`} method="get">
                        <input type="hidden" name="showForm" value={showForm ? 'false' : 'true'} />
                        <button type="submit" className={styles.adoptionCard__button}>
                            Si quieres adoptar a {gato?.name}, haz click aquí para {showForm ? 'cerrar' : 'llenar'} el formulario de adopción.
                        </button>
                    </form>
                </div>
            </div>
            {showForm && <GatoForm />}
        </div>
    )
}
