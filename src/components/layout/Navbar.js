import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logotipo2024aa.jpg'



function Navbar (){

    return(
    <nav className={styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt='Restaurante Cacupé' />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                   <Link to="/">Home</Link>  
                </li>
                <li className={styles.item}>
                    <Link to="/menu">Menu</Link>  
                </li>               
                <li className={styles.item}>
                    <Link to="/pin">Onde Estamos</Link> 
                </li>            
                <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
        </Container>
    </nav>

        
    )
}
export default Navbar