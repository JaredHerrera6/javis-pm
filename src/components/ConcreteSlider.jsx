import React,{useState} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "../pages/styles/Concrete.css"

function ConcreteSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='steps-wrapper'>
      <FaArrowAltCircleLeft className='cleft-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='cright-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'cslide active' : 'cslide'}
            key={index}
          > 
            {index === current && (
            <div className='steps-card'>
            <div className='steps-images'>
              <img src={slide.image} alt = "Concrete Steps Image" />
            </div>
            <div className='steps-description'>
              <p>
                Don't Belive us?
              </p>
            </div>
          </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ConcreteSlider
