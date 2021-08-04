import React from 'react'
import './style.scss'

import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="container">
            <Link to='/'><h2>Filmaria</h2></Link>
            <Link to='/saved'><button className='btn' type="button"> Salvos</button></Link>
        </div>
    )
}
