import styles from './ListaAdopcion.module.css';
import { createClient } from '@/utils/supabase/server';
import Gato from './GatoItem';


const ListaAdopcion = async () => {
    const supabase = await createClient();

    const { data: gatos, error: gatosError } = await supabase.from('gatos').select();

    console.log(gatos);

    if (gatosError) {
        console.log('Error en evento:', gatosError.message);
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
                Error al obtener los gatios del refugio Alegría Gatuna
            </p>
        );
    }

    return (
        <div className={styles.adoptionList}>
            {gatos?.map((gato) => (
                <Gato
                    key={gato.id}
                    {...gato}
                />
            ))}
        </div>
    )
}

export default ListaAdopcion;