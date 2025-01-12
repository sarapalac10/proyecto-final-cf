'use client'
import styles from "./page.module.css";
import Voluntario from "./voluntario/page";
import FirstComponent from "./components/FirstComponent";
import Image from 'next/image';
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main >
        {/* <FirstComponent /> */}
        <div className={styles.banner}>
          {/* <Image
            src="/images/image_banner.png"
            alt="Banner home"
            width={0}
            height={0}
            sizes="70vw"
            style={{ width: '100%', height: 'auto' }}
          /> */}
          <h1>Bienvenidos al Hogar de paso Alegría Gatuna</h1>

          <div className={styles.banner_content}>
            <p>Somos una organización sin fines de lucro dedicada al cuidado de gatos abandonados y maltratados. Brindamos hogar temporal, atención médica y todo el amor que necesitan.</p>
            <Link href="/voluntario">
              <button className={styles.banner_button}>Conoce cómo ser voluntario</button>
            </Link>
            {/* <Voluntario /> */}
          </div>
        </div>
        <div className={styles.lista_adopcion}>
          <h2>Conoce a tu nuevo mejor amigo</h2>
          {/* <ListaAdopcion /> */}
          <p>Lista de gatos</p>
        </div>
      </main>
    </>
  );
}

export default Home;