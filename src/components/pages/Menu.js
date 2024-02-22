import ColumnCard from "../layout/ColumnCard"
import styles from './Menu.module.css'


function Menu (){
    return (
    <>
    <section className={styles.menu_container}>
    <h1>Menu</h1>
   <p>Massas</p>
    </section>
      < ColumnCard />
  </>
    )
}

export default Menu