'use client'
import { createClient } from "@/utils/supabase/client";
import styles from "./styles.module.css";

import { FC, useState } from "react";

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

type VolunteerItemProps = Volunteer & {
    onRefresh: () => void;
    handleEdit: (volunteer: Volunteer) => void;
}

const supabase = createClient();

const VoluntarioItem: FC<VolunteerItemProps> = ({ name, email, edad, availability, skills, reason, id, onRefresh, handleEdit }) => {
    const [error, setError] = useState<string | null>(null);
    const [deleteLabel, setDeleteLabel] = useState<string>('Eliminar');
    const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

    const handleDelete = async () => {
        setDeleteLabel('Eliminando...');
        setError(null);

        try {
            const { error } = await supabase.from('volunteer').delete().eq('id', id);
            if (error) {
                setError(error.message);
                console.log(error);
                return;
            }
            onRefresh();
            setError("Ha ocurrido un error al eliminar el voluntario");
        } catch (error) {
            console.error('Error al eliminar el voluntario:', error);
            setError('Error al eliminar el voluntario');
        }
    };

    const handleConfirmDelete = () => {
        setDeleteLabel('Confirmar');
        setConfirmDelete(true);
    };

    return (
        <div className={styles.voluntarioItem}>
            <div className={styles.voluntarioItem_content}>
                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Edad:</strong> {edad} años</p>
                <p><strong>Disponibilidad:</strong> {availability}</p>
                <p><strong>Habilidades:</strong> {skills}</p>
                <p><strong>Motivo para ser voluntario:</strong> {reason}</p>
            </div>
            {error && <p>Error: {error}</p>}
            <button className="border-white text-sm text-black p-4 m-3 rounded-md bg-green-400 hover:bg-red-400"
                onClick={confirmDelete ? handleDelete : handleConfirmDelete}
            >
                {deleteLabel}
            </button>
            <button className="border-white text-sm text-black p-4 m-3 rounded-md bg-green-400 hover:bg-red-400"
                onClick={() => handleEdit({ id, name, email, edad, availability, skills, reason })}
            >
                Editar
            </button>
        </div>
    );
};

export default VoluntarioItem;