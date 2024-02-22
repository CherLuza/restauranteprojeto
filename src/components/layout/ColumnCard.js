
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './ColumnCard.module.css'

import macarrao01 from '../../img/macarrao01.jpg'
import macarrao02 from '../../img/macarrao02.jpg'
import macarrao03 from '../../img/macarrao03.jpg'
import macarrao04 from '../../img/macarrao04.jpg'


const ColumnCard = () => {
    return (
        <>
<div className={styles.card_padding}>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div className={styles.card}>
      <img class="card-img-top" src={macarrao01} alt="Macarrão espaguete aglio e olio"/>
      <div class="card-body">
        <h5 class="card-title" className={styles.card_title}>Macarrão Espaguete ao aglio e olio, tomate e manjericão</h5>
        <p class="card-text" className={styles.card_title_p}>Saboroso macarrão espaguete com molho aglio e olio, acompanhado de tomate e manjerição. Aproximadamente 300 gramas.</p>
        <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-warning">Preço: R$24,00</a>
      </div>
    </div>
  </div>
  <div class="col">
  <div className={styles.card}>
    <img className="card-img-top" src={macarrao02} alt="Macarrão Fettuccine com molho Pesto e tomate cereja"/>
      <div class="card-body">
        <h5 class="card-title" className={styles.card_title}>Macarrão Fettuccine com molho Pesto e tomate cereja</h5>
        <p class="card-text" className={styles.card_title_p}>Saboroso macarrão Fettuccine com molho Pesto, acompanhado de tomate cereja e um leve toque de orégano. Aproximadamente 300 gramas.</p>
        <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer" class="btn btn-warning">Preço: R$24,00</a>
      </div>
    </div>
  </div>
  <div class="col">
  <div className={styles.card}>
    <img className="card-img-top" src={macarrao03} alt="Macarrão Penne com molho branco, frango e bacon"/>
      <div class="card-body">
        <h5 class="card-title" className={styles.card_title}>Macarrão Penne com molho branco, frango e bacon</h5>
        <p class="card-text" className={styles.card_title_p}>Delicioso macarrão tipo Penne com molho branco, acompanhado por frango e cogumelo Shiitake cortados em cubos. Aproximadamente 300 gramas.</p>
        <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer" class="btn btn-warning">Preço: R$21,00</a>
      </div>
    </div>
  </div>
  <div class="col">
  <div className={styles.card}>
  <img className="card-img-top" src={macarrao04} alt="Macarrão Fettuccine com tomates e bacon"/>
      <div class="card-body">
        <h5 class="card-title" className={styles.card_title}>Macarrão Fettuccine com tomates e bacon</h5>
        <p class="card-text" className={styles.card_title_p}>Excelente macarrão Fettuccine com um leve molho de tomate, acompanhado de bacon cortado em cubos. Aproximadamente 300 gramas.</p>
        <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer" class="btn btn-warning">Preço: R$18,00</a>
      </div>
    </div>
  </div>
</div>
</div>


</>
    )
}
export default ColumnCard