import './style.scss'

import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function MoviesSaved() {
    const [filmes, setFilmes] = useState([]); 
    useEffect(() => {
        const getMovies = localStorage.getItem('filmes')    
        //console.log(getMovies)    //aray
        const moviesJson = JSON.parse(getMovies) || [];
        //console.log(moviesJson)    //json
        setFilmes(moviesJson)

    }, [])

    function removedSaved(id){
        let filterMovies =  filmes.filter((item)=>{
            return( item.id !== id)
        })
        setFilmes(filterMovies);
        localStorage.setItem('filmes', JSON.stringify(filterMovies));
        toast.success('Filme excluido com sucesso !! ')
    }

   
    return (
        <div className="container_MoviesSaved">
            {filmes.length === 0 ? 
                <div className="anyMovie">
                    <h2>Você não possui nenhum filme salvo !</h2>
                </div>
            : ''}
            <ul className="MoviesSaved_ul">
                {filmes.map((item) => {
                    return( 
                        <li className="MoviesSaved_li" key={item.id} >
                            <h3>{item.nome}</h3>

                            <div className="MoviesSaved_buttons">
                                <Link to={`/filme/${item.id}`}> Ver Detalhes </Link>
                                <button onClick={() => removedSaved(item.id)}> Excluir </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            
        </div>
    )
}
