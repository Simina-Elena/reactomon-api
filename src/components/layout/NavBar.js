import React from 'react'
import style from './MainNavigation.module.css'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <header className={style.header}>
            <div className={style.logo}>Pokemon</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/pokemons">Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/types">Types</Link>
                    </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default NavBar
