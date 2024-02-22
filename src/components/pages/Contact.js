import styles from './Contact.module.css'

import ContactForm from '../layout/ContactForm'

function Contact (){
return <>
<section className={styles.contact_container}>
<h1>Entre em contato conosco</h1>
< ContactForm />
</section>
</>
}

export default Contact