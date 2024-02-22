import styles from './Home.module.css'

import CarouselBootstrap from '../layout/CarouselBootstrap'


function Home (){
    return <>
     <section className={styles.home_container}>
        <h1>Bem vindo ao <span>Restaurante Cacupé</span></h1>
        <p>Conheça o melhor restaurante da Região, especializado em massas e queijos</p>

       </section>

     <section className={styles.carousel_container}>
    < CarouselBootstrap />
     </section>
    </>
}

export default Home