import { useState, useEffect } from 'react'

import '../App.css'

const ListaKomponens = ({ elemek }) => {
  return(
  <ol>
    {elemek.map((elem, index) => (
      
      <li key={index}> {elem.title}
      <br /><br />{elem.body}<br /><br /></li>
    )
    )}
  </ol>);
}
export const Poszt = () => {
  const [adatok, setAdatok] = useState([])

    useEffect(() => {
      fetch('https://harmadik.sulla.hu/Post')
      .then((res) => (res.ok ? res.json() : []))
      .then((tartalom) => setAdatok(tartalom));
    }, []);

  return (
    <div className="container">
        <div className="row m-5 p-5 border">
          <ListaKomponens elemek={adatok} />
        </div>
    </div>
  )
}