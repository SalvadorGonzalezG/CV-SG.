import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
 // Archivo de estilos CSS personalizado
import { Carousel } from 'react-responsive-carousel';
import '../index.css'
const Carrou = () => {
  return (
    <div className="carousel-container1">
      <div className="carrousel-content1">
      <Carousel
        autoPlay={true} // Para que el carrusel se reproduzca automáticamente
        infiniteLoop={true} // Para que el carrusel continúe en un bucle infinito
        showStatus={false} // Para ocultar el indicador de estado
        showThumbs={false} // Para ocultar las miniaturas
        interval={5000} // Intervalo de tiempo entre diapositivas (en milisegundos)
        stopOnHover={true} // Para detener la reproducción automática al pasar el ratón por encima
        transitionTime={500} // Tiempo de transición entre diapositivas
          showIndicators={true} 
     >
        <div >
          <img className="imgwork" src="https://i.pinimg.com/400x/65/dd/ba/65ddbadb1dd89ec02aec582f0e73e794.jpg" alt="Imagen 1"/>
          <p className="legend">UAM </p>
        </div>
        <div >
          <img src="data:image/png;base64,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" alt="Imagen 1" className='imgwork'/>
          <p className="legend">CINEPOLS </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP6GQsEJxmiPSfvb4R4IwjXr2puhcBKncm2IoKoFKJgZeU99kQ4XZmZdDK1MMvmLTgQA&usqp=CAU" alt="Imagen 2" />
          <p className="legend">CIRSA MEXICO </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00_Za30PoIrG8OKQYonnrAH7p_pea_1WFbjYv252VVNEArngnXjtfs68ZatpFsPO8VI&usqp=CAU" alt="Imagen 3" />
          <p className="legend">Cirsa </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAHZFb0AE0RRZpL3hhp8aYiVniBXT-FKvJg&usqp=CAU" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO </p>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Carrou