import { createClient } from "@/utils/supabase/server";
import Anuncio from "./components/Anuncio";


const Evento = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from('event_post').select(`
        id,
        title,
        description,
        image,
        published_at,
        event_info(date, place),
        event_author(name)
        `);

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
                Error al obtener los eventos
            </p>
        );
    }

    return (
        <div>
            {data?.map(anuncio => <Anuncio key={`event-${anuncio.id}`} {...anuncio} />)}
        </div>
    )
}

export default Evento;


