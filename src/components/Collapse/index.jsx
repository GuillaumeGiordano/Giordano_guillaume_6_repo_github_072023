import { React, useRef } from 'react'
import useToggle from '../../utils/hooks/useToggle'
import row from '../../assets/row.png'

export default function Collapse({ title, children, width }) {
  const [isOpen, changeMe] = useToggle()
  const contentRef = useRef()
  const myClassWidth = width

  return (
    // <div className="collapse" style={{ width: width }}>
    <div className={'collapse ' + myClassWidth}>
      <div
        className={isOpen ? 'collapse__btn collapse__btn--open' : 'collapse__btn'}
        onClick={changeMe}
      >
        <span>{title}</span>

        {isOpen ? (
          <img
            src={row}
            className="collapse__row collapse__row--top"
            alt="fléche de navigation"
          ></img>
        ) : (
          <img
            src={row}
            className="collapse__row collapse__row--down"
            alt="fléche de navigation"
          ></img>
        )}
      </div>

      <div
        ref={contentRef}
        className="collapse__content-parent"
        style={
          isOpen ? { height: contentRef.current.scrollHeight + 'px' } : { height: '0px' }
        }
      >
        <div className="collapse__content-childreen ">{children}</div>
      </div>
    </div>
  )
}
