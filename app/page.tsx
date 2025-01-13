'use client'
import styles from "./page.module.css";
import Image from 'next/image';
import Link from "next/link";
import ListaAdopcion from "./adopciones/components/ListaAdopcion";

const Home = () => {
  return (
    <>
      <main >
        <div className={styles.banner}>
          <Image
            src="/images/image_banner_2.png"
            alt="Banner home"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
          <h1>Bienvenidos al Hogar de paso Alegría Gatuna</h1>

          <div className={styles.banner_content}>
            <p>Somos una organización sin fines de lucro dedicada al cuidado de gatos abandonados y maltratados. Brindamos hogar temporal, atención médica y todo el amor que necesitan.</p>
            <Link href="/voluntario">
              <button className={styles.banner_button}>Conoce cómo ser voluntario</button>
            </Link>
          </div>
          <div className={styles.banner_content}>
            <Link href="/evento">
              <button className={styles.banner_button}>Conoce los eventos</button>
            </Link>
            <p>Conoce todos los eventos a los que puedes asistir y apoyar al hogar de paso Alegría Gatuna</p>
          </div>
        </div>
        <div className={styles.lista_adopcion}>
          <h2>Conoce a tu nuevo mejor amigo</h2>
          {/* Agregar acá las tarjetas de los gatos */}
          <Link href="/adopciones">
            <button className={styles.banner_button}>Conócelos a todos</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;