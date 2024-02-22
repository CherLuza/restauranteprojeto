import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselBootstrap.module.css'

import macarrao01a from '../../img/macarrao01a.jpg'
import macarrao02a from '../../img/macarrao02a.jpg'
import macarrao03a from '../../img/macarrao03a.jpg'


function CarouselBootstrap() {
  return (
    <div class="container-fluid" className={styles.carousel_fade}>
    <Carousel fade>
      <Carousel.Item>
        <img src={macarrao01a} alt='macarrao02' className={styles.carousel_fade}/>
        <Carousel.Caption>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={macarrao02a} alt='macarrão03' className={styles.carousel_fade} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={macarrao03a} alt='macarrão04' className={styles.carousel_fade}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselBootstrap