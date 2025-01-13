'use client'
import React, { useState } from 'react';
import styles from './styles.module.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className={styles.containerContacto}>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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

                <label htmlFor="subject">Asunto:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
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

            <div className={styles.contactInfo}>
                <h2>Ponte en contacto con nosotros</h2>
                <p><strong>Dirección: </strong>Calle 123, Medellín</p>
                <p><strong>Teléfono: </strong>3178965432</p>
                <p><strong>Email: </strong>info@adoptaunmichi.com</p>
            </div>
        </div>
    );
};

export default Contacto;
