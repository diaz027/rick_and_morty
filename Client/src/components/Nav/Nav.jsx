import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css'

const Nav = ({onSearch}) => {
    return (
        <div className={style.navbar}>

        <nav>
            
            <div className={style.searchBarContainer}>
                <SearchBar  onSearch={onSearch}/>
            </div>
                <NavLink to='/about'>
            <button className={style.button}>MI CARTA</button>
                </NavLink>
            
            <NavLink to='/home'>
            <button className={style.button}>HOME</button>
            </NavLink>

            <NavLink to='/favorites'>
            <button className={style.button}>FAVORITE</button>
            </NavLink>
        </nav>
        </div>
    )
}

export  default  Nav;