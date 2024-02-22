
import styles from './Pin.module.css'

function Pin (){
    return <>
    <div className={styles.text_pin_container}>

        <div>
        <h1>Localização</h1>
        <p>Rod. Admar<span> Gonza</span>ga, 600 - Itacorubi, Florianópolis - SC, 88034-000</p>
        <p>Telefone: (48) 99123-4567</p>
        </div>
        
<div className={styles.pin_google_maps}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.1204866503585!2d-48.52373524969006!3d-27.527715670545025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952747d08bbe8e19%3A0x4f47045b7ae3fdec!2sPraia%20dos%20Fufos!5e0!3m2!1spt-PT!2spt!4v1705939081566!5m2!1spt-PT!2spt"></iframe>
</div>

</div>

</>
}

export default Pin

