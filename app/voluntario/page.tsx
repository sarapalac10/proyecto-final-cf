'use client'

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { createClient } from "@/utils/supabase/client";
import VoluntarioItem from "./VoluntarioItem";
import { createVolunteerAction, updateVolunteerAction } from "@/app/actions";


type Volunteer = {
    id: number;
    name: string;
    edad: number;
    email: string;
    availability: string;
    skills: string;
    reason: string;
    created_at?: string;
}

const initialState = {
    id: -1,
    name: '',
    edad: 0,
    email: '',
    availability: '',
    skills: '',
    reason: '',
}

const supabase = createClient();

const Voluntario = () => {
    const [formValues, setFormValues] = useState<Volunteer>(initialState);
    const [volunteers, setVolunteers] = useState<Volunteer[] | null>();
    const [error, setError] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);

    const checkUserRole = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', user.id)
                    .single();

                setUserRole(profile?.role || null);
            }
        } catch (error) {
            console.error('Error al verificar el rol:', error);
        }
    };

    const loadVolunteers = async () => {
        try {
            const { data: volunteers, error: volunteersError } = await supabase.from('volunteer').select();
            console.log('volunteers: ', volunteers, volunteersError);

            if (volunteersError) {
                console.log('Error al cargar los voluntarios:', volunteersError);
                setError(volunteersError.message);
            }

            setVolunteers(volunteers || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadVolunteers();
        checkUserRole();
    }, []);

    const handleSubmit = async (formData: FormData) => {

        if (formValues.id === -1) {
            // usuario nuevo
            await createVolunteerAction(formData);
            alert('¡Gracias por querer ser voluntario! Pronto nos pondremos en contacto.');

            if (error) {
                console.log('Error en evento:', error);
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
                        Error al crear el voluntario
                    </p>
                );
            }

        } else {
            // usuario existente
            await updateVolunteerAction(formData);

            if (error) {
                console.log('Error en evento:', error);
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
                        Error al actualizar el voluntario
                    </p>
                );
            }
        }

        setFormValues(initialState);
        loadVolunteers();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target
        setFormValues((prevFormData) => ({ ...prevFormData, [name]: value }));
        console.log('Volunteer form submitted:', formValues);
    }

    const handleEditVolunteer = (volunteer: Volunteer) => {
        console.log('volunteer: ', volunteer);
        setFormValues(volunteer);
    };

    return (
        <>
            <div className={styles.containerVoluntario}>
                <h1>Ser Voluntario</h1>
                <p>
                    Únete a nuestra causa y haz la diferencia. Tu tiempo y esfuerzo pueden salvar
                    vidas. Ser voluntario en Alegría Gatuna te permitirá marcar una diferencia
                    real en la vida de muchos gatos que necesitan amor y cuidado.
                </p>
                <form action={handleSubmit}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        required
                        minLength={5}
                        maxLength={200}
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name='email'
                        minLength={10}
                        maxLength={200}
                        required
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        value={formValues.edad}
                        minLength={1}
                        required
                        onChange={handleChange}
                    />
                    <label>Disponibilidad Horaria:</label>
                    <input
                        type="text"
                        name="availability"
                        value={formValues.availability}
                        onChange={handleChange}
                    />
                    <label>Habilidades (opcional):</label>
                    <input
                        type="text"
                        name="skills"
                        value={formValues.skills}
                        onChange={handleChange}
                    />
                    <label>Motivo para ser voluntario:</label>
                    <textarea
                        name="reason"
                        value={formValues.reason}
                        onChange={handleChange}
                    />
                    <input type="hidden" name="id" value={formValues?.id} />
                    <button type="submit">Enviar</button>
                    <button
                        type="reset"
                        onClick={() => setFormValues(initialState)}
                    >
                        Limpiar
                    </button>
                </form>
            </div>
            <div className={styles.containerVoluntarios}>
                <h1 className={styles.containerVoluntarios_h1}>Panel de Administración - Voluntarios</h1>
                <p className={styles.containerVoluntarios_p}>Sólo para administradores - Recuerda que los voluntarios no pueden ver esta página</p>
                {volunteers && userRole === 'admin' && volunteers.map((volunteer) => (
                    <VoluntarioItem
                        key={`volunteer-${volunteer.id}`}
                        {...volunteer}
                        onRefresh={loadVolunteers}
                        handleEdit={handleEditVolunteer}
                    />
                ))}
            </div>
        </>
    );
}

export default Voluntario;