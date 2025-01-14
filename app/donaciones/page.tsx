import styles from './styles.module.css';

const Donaciones = () => {
    return (
        <div className={styles.container}>
            <h1>Donaciones</h1>
            <img src="https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/images/imagen_donaciones.webp?t=2025-01-13T03%3A04%3A57.502Z" alt="Gatitos felices" />


            <h2>Ayúdanos a transformar vidas</h2>

            <p>Puedes donar a través de nuestra página de PayPal o a través de transferencia por varios canales.</p>
            <ul className={styles.canales}>
                <li>Paypal: nalmarlen@hotmail.com</li>
                <li>Ahorros Bancolombia: 42006646101</li>
                <li>Nequi: 3137080752</li>
                <li>Daviplata: 3137080752</li>
                <li>Transfiya: 3137080752</li>
            </ul>

            <div className={styles.impacto}>
                <h2>Tu impacto</h2>
                <p>Cada donación contribuye a alimentos, medicinas y esterilización para nuestros gatitos rescatados.</p>
                <p>Donar a un refugio es mucho más que un acto de generosidad; es una inversión en la vida de seres que dependen completamente de nuestra compasión y cuidado. Cada donación ayuda a proporcionar alimentos nutritivos, atención veterinaria esencial y un lugar seguro donde los gatitos pueden recuperarse y florecer después de experiencias difíciles. Además, apoyar a un refugio permite crear conciencia sobre la importancia del bienestar animal y fomenta la adopción responsable, ayudando a reducir la cantidad de animales abandonados en las calles. Juntos, podemos ofrecer una segunda oportunidad a estos maravillosos compañeros y construir una comunidad más compasiva y solidaria.</p>

                <h3>Gracias a personas como tú, hemos rescatado más de 100 gatitos en los 2 años de existencia del refugio.</h3>
            </div>

        </div >
    )
}

export default Donaciones;