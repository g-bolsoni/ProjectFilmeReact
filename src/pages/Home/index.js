import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import './styles.scss'

import api from '../../services/api'

export default function Home() {
  const [filme, setfilme] = useState([]);
  useEffect(()=>{
    async function loadFilmes(){
      try {
        const response = await api.get('/r-api/?api=filmes');
        console.log(response);
        setfilme(response.data)
      } catch (error) {
        console.error(error);
      };
    }
    loadFilmes()
  },[])

  return (
    <div className="container_home">
      
    {filme.map((item)=>{ 
        return(
          <section key={item.id} className="movies_card_home">
            <h2> {item.nome}</h2>
            <div className="foto_home">
              <img src={item.foto} alt={item.nome} />
              <Link to={`/filme/${item.id}`}>
                <button>Acessar</button>
              </Link>
            </div>
          </section>
        )
      })}

    </div>
  );
}
