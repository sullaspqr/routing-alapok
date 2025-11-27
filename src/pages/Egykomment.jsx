import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

const ListaKomponens = ({ elem }) => {
  return(
      <li> {elem.name} - {elem.email}
      <br /><br />{elem.body}<br /><br />
      <Link to="/"><i className="bi bi-arrow-left"></i> Vissza
      </Link><br /><br /></li>
    )
    };
export const Egykomment = () => {
  const [adat, setAdat] = useState([]);
  const params = useParams();
  const id = params.commentId;

    useEffect(() => {
      fetch(`https://harmadik.sulla.hu/Comment/${id}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((tartalom) => setAdat(tartalom));
    }, [id]);

  return (
    <div className="container">
        <div className="row m-5 p-5 border">
          <ListaKomponens elem={adat} />
        </div>
    </div>
  )
}