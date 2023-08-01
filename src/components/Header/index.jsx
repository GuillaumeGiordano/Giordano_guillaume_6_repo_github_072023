// import { useState } from 'react'
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo/LOGO.svg'
// SYSTEME
import { Link } from 'react-router-dom'
// import useToggle from '../../utils/hooks/useToggle'
// import { React,  useRef } from 'react'

export default function Header() {
  const ref1 = useRef()
  const ref2 = useRef()

  let essai = 'menu_item'

  // console.log(ref1.current.className)
  // console.log(ref2.current.className)

  // console.log((essai += ' menu_item--active'))

  function useActiveMe(ref) {
    const [acitve, setActive] = useState('active')

    useEffect(() => {
      setActive('')
      console.log('proute')
    }, [ref])
  }

  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul className="menu">
          <li id="accueil" ref={ref1} className={essai} onChange={useActiveMe(ref1)}>
            <Link to="/">Accueil</Link>
          </li>

          <li id="apropos" ref={ref2} className={essai} onChange={useActiveMe(ref2)}>
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
