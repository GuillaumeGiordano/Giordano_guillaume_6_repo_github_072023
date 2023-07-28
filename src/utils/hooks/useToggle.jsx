import { useState } from 'react'

export default function useToggle(initValue = false) {
  const [value, setValue] = useState(initValue)
  const changeMe = function () {
    setValue((value) => (value = !value))
  }
  return [value, changeMe]
}

const collapses = document.getElementsByClassName('collapse-btn')

for (let i = 0; i < collapses.length; i++) {
  collapses[i].addEventListener('click', function () {
    this.classList.toggle('active')

    const content = this.nextElementSibling

    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}
