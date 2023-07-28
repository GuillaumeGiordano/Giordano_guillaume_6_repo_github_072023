import React from 'react'

export default function Logement({ data }) {
  console.log(data.title)
  return (
    <section>
      {JSON.stringify(data)}
      <h1>Fiche Logement index N° </h1>
      <h2>titre : {data.title} </h2>
    </section>
  )
}
