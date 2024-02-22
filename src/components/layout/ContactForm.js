import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio de formulário aqui
    console.log('Dados do formulário:', dados);
    setDados({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className={styles.form_text}>

      <div className={styles.text_intro_form}>
        {/* Área à esquerda para o texto */}
    <p>Alguma dúv<span>ida a </span>respeito de nossos serviços? Entre em contato pelo form<span>ulário</span> ao lado. Lhe responderemos em até 5 dias úteis.</p>
      </div>

      <div>
        {/* Área à direita para o formulário */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nome:
            <input className={styles.text_form} type="text" name="nome" value={dados.nome} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input className={styles.text_form} type="email" name="email" value={dados.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Mensagem:
            <textarea className={styles.text_form} name="mensagem" value={dados.mensagem} onChange={handleChange} />
          </label>
          <br />
          <button className={styles.btn} type="submit">Enviar</button>
        </form>
      </div>

    </div>
  )
}

export default ContactForm