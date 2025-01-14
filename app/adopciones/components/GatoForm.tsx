'use client'
import styles from './GatoForm.module.css'
import { useState } from "react";
import { useRouter } from 'next/navigation';

const GatoForm = ({ onClose }: { onClose?: () => void }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        tel: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('¡Gracias por tu interés en adoptar! Nos pondremos en contacto pronto.');
        setFormData({
            name: '',
            email: '',
            message: '',
            tel: '',
        });

        const currentPath = window.location.pathname;
        router.push(`${currentPath}?showForm=false`);

        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={styles.containerContacto}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre completo:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    minLength={5}
                    onChange={handleChange}
                    required
                    className={styles.containerContacto__input}
                />

                <label htmlFor="email">Teléfono:</label>
                <input
                    type="number"
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    minLength={8}
                    required
                />

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default GatoForm;