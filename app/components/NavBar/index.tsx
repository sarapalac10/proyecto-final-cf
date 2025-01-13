'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<{ id?: string; first_name?: string }>({});

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOutClick = async () => {
        await supabase.auth.signOut();
        setUser({});
    };

    useEffect(() => {
        const getUserData = async () => {
            try {
                const { data: authUser, error } = await supabase.auth.getUser();

                if (error) {
                    throw new Error(error.message);
                }

                const { data: publicUser, error: publicError } = await supabase.from("users").select("*").eq("id", authUser.user.id).single();

                if (publicUser.id && !publicError) {
                    setUser(publicUser);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getUserData().catch(console.error);
    }, []);

    return (
        <nav className={styles.navbar}>
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label="Menú"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
                <li>
                    <Link href="/evento">Eventos</Link>
                </li>
                <li>
                    <Link href="/adopciones">Adoptar</Link>
                </li>
                <li>
                    <Link href="/donaciones">Donaciones</Link>
                </li>

            </ul>
            <ul className={styles.navList}>
                <li>
                    {!!user?.id && (
                        <>
                            <span>Hola, {user?.first_name}</span>
                            <button className="ml-2" onClick={handleSignOutClick}>Cerrar sesión</button>
                        </>
                    )}
                    {!user?.id && <a href="/sign-in">
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            Iniciar sesión
                            <Image
                                src="/icons/icono_inicio_sesion.ico"
                                alt="Ícono de login"
                                width={20}
                                height={20}
                                color="#287385"
                                style={{ marginLeft: '4px' }}
                            />
                        </span>
                    </a>}
                </li>
            </ul>
        </nav>
    )
}