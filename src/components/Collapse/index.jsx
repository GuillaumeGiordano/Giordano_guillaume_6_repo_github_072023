import { React, useRef } from 'react'
import useToggle from '../../utils/hooks/useToggle'
import row from '../../assets/row.png'

export default function Collapse({ title, description }) {
  const [isOpen, changeMe] = useToggle()
  const contentRef = useRef()

  return (
    <>
      <div
        className={isOpen ? 'collapse-btn collapse-btn--open' : 'collapse-btn'}
        onClick={changeMe}
      >
        <span>{title}</span>

        {isOpen ? (
          <img src={row} className="row row-top" alt="fléche de navigation"></img>
        ) : (
          <img src={row} className="row row-down" alt="fléche de navigation"></img>
        )}
      </div>

      <div
        ref={contentRef}
        className="content-parent"
        style={
          isOpen ? { height: contentRef.current.scrollHeight + 'px' } : { height: '0px' }
        }
      >
        <p className="content">{description}</p>
      </div>
    </>
  )
}
