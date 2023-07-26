import { useState } from 'react'

export default function useToggle(initValue = false) {
  const [value, setValue] = useState(initValue)
  const changeMe = function () {
    setValue((value) => (value = !value))
  }
  return [value, changeMe]
}
