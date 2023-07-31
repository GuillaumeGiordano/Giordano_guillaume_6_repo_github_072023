import { React } from 'react'
import useSlider from '../../utils/hooks/useSlider'
// IMAGE
import next from '../../assets/next.png'
import previous from '../../assets/previous.png'

export default function Slider({ pictures }) {
  const [index, handlePrevious, handleNext] = useSlider(pictures)

  return (
    <div className="slider">
      <img src={pictures[index]} className="slider__img" alt="" />

      {/* {pictures.map((pic, index) => (
        <img
          key={index}
          src={pic}
          className="slider__img"
          alt=""
          style={{ display: 'none' }}
        />
      ))} */}

      <img
        onClick={handleNext}
        src={previous}
        className="slider__btn slider__btn--previous"
        alt=""
      />
      <img
        onClick={handlePrevious}
        src={next}
        className="slider__btn slider__btn--next"
        alt=""
      />
    </div>
  )
}
