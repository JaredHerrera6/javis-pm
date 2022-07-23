import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
            <div className='steps-card'>
            <div className='steps-images'>
              <img src={Steps} />
            </div>
            <div className='steps-description'>
              <p>This is a p tag describing the steps Services
                fsageth
                ryj shkwrlthiouweetuyg erighw
              </p>
            </div>
          </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ConcreteSlider
