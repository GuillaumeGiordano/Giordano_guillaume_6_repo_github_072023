import { useState } from 'react'

export default function useSlider(pictures) {
  const [index, setIndex] = useState(0)
  const length = pictures.length

  const handlePrevious = function () {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = function () {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  return [index, handlePrevious, handleNext]
}
