import './style.scss';
import Monkey from '../../Images/monkey.png'
import {Link} from 'react-router-dom'

import React from 'react'

export default function NotFound() {
    return (
        <div className="NotFound_container">
            <div><img src={Monkey} alt="monkey"/></div>
            <div className="NotFound_text">
                <h2>Página não encontrada</h2>
                <h5> Talvez esteja procurando outra página !</h5>
                <p> <Link to="/"> <b>Clique aqui</b></Link> para voltar para a home</p>
            </div>
        </div>
    )
}
