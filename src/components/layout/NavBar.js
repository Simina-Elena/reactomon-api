import React, {useContext} from 'react'
import style from './MainNavigation.module.css'
import {Link} from 'react-router-dom'
import ThemeToggler from '../../ThemeToggler'


function NavBar(props) {
    
    return (
        <div>
            <header className={style.header}>
            <div className={style.logo}>Reactomon</div>
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
            <ThemeToggler/>
            </header>
        </div>
    )
}

export default NavBar
