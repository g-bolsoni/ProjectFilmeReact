/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import {useParams,useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify'

import './style.scss'

export default function MovieDetails() {
    const {id} = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading ]= useState(true);
    useEffect(()=>{
      async function loadFilme(){
        const response = await api.get(`r-api/?api=filmes/${id}`);
        console.log(`response.data = ${response} `);

        if(response.data.length === 0){
          //tentou acessar com um id e não exite vai para home
          history.replace('/');
          console.log('history  aqui na voz');

          return;
        }
        console.log(response.data);
        setFilme(response.data);
        setLoading(false);
      }
      loadFilme();

      return(()=>{
        console.log('Componente desmontado')
      })
    },[history,id])

    function saveMovie(){
      const movieslist = localStorage.getItem('filmes');
      let savedMovies =  JSON.parse(movieslist) || [];
      //console.log('Salvar filme '+savedMovies);
      // verficar se está salvo
      const hasMovie = savedMovies.some((saveMovie) => saveMovie.id === filme.id);
      if(hasMovie){
        toast.error('Este filme ja está salvo em sua lista! ');
        return;
      }
      savedMovies.push(filme);
      localStorage.setItem('filmes', JSON.stringify(savedMovies));
      toast.success('Filme salvo com sucesso !!')
    }



    if (loading) {
      return(
        <section className="loader"> 
          <div className="spinner"> 
          </div>
        </section>
      )
    }
    
    return (
        <div className="container_details">
          <h1>{filme.nome}</h1>
          <div className="img">
            <img src={filme.foto} alt={filme.nome}/>
          </div>
          <div className="sinopse">
            <h2> Sinopse</h2>
            <p>{filme.sinopse}</p>
          </div>

          <div className="btns">
            <button onClick={saveMovie} className="btn btn1">Salvar</button>
            <a target="_blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailler`} rel="noreferrer">
              <button className="btn btn2">Trailler</button>
            </a>
          </div>
        </div>
    )
}