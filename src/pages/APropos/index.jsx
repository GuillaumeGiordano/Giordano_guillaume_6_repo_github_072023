import falaise from '../../assets/img/montagnes.jpg'
import useToggle from '../../utils/hooks/useToggle'

export default function APropos() {
  const [value1, changeMe1] = useToggle()
  const [value2, changeMe2] = useToggle()
  const [value3, changeMe3] = useToggle()
  const [value4, changeMe4] = useToggle()

  return (
    <>
      <section className="main_header">
        <img src={falaise} className="header__img" alt="falaise avec ocean" />
        <div onClick={changeMe1}>
          <span>Afficher le compteur stp Fiabilité</span>
          {value1 && <div>kjfvn vfjhsfv fsv vsfvs vsih vsvoij </div>}
        </div>

        <div onClick={changeMe2}>
          <span>Afficher le compteur stp Fiabilité</span>
          {value2 && <div>kjfvn vfjhsfv fsv vsfvs vsih vsvoij </div>}
        </div>

        <div onClick={changeMe3}>
          <span>Afficher le compteur stp Fiabilité</span>
          {value3 && <div>kjfvn vfjhsfv fsv vsfvs vsih vsvoij </div>}
        </div>

        <div onClick={changeMe4}>
          <span>Afficher le compteur stp Fiabilité</span>
          {value4 && <div>kjfvn vfjhsfv fsv vsfvs vsih vsvoij </div>}
        </div>
      </section>
    </>
  )
}
