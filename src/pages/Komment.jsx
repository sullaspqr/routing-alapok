import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const ListaKomponens = ({ elemek }) => {
  return(
  <ol>
    {elemek.map((elem, index) => (
      
      <li key={index}> {elem.name} - {elem.email}
      <br /><br />{elem.body}<br /><br />
      <Link to={"/comment/" + elem.id}>
      <i className="bi bi-eye"></i> Részletek</Link></li>
    )
    )}
  </ol>);
}
export const Komment = () => {
  const [adatok, setAdatok] = useState([])

    useEffect(() => {
      fetch('https://harmadik.sulla.hu/Comment')
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