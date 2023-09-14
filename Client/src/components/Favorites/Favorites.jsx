import style from './favorite.module.css'
import Card from "../Card/Card";
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";

const Favorites = () =>{
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites)
    const [aux, setAux] = useState(false);

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const handleMouseMove = e => {
    const favs = favsRef.current;
    if (!favs) return; // Evita errores si favsRef.current es null
    const favsRect = favs.getBoundingClientRect();
    const mouseX = e.clientX - favsRect.left - favsRect.width / 2;
    const mouseY = e.clientY - favsRect.top - favsRect.height / 2;

    favs.style.transform = `perspective(1000px) rotateX(${mouseY / 10}deg) rotateY(${mouseX / 10}deg)`;
  };

  const handleMouseLeave = () => {
    const favs = favsRef.current;
    if (!favs) return; // Evita errores si favsRef.current es null
    favs.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  const favsRef = useRef(null);

  useEffect(() => {
    const favs = favsRef.current;
    if (!favs) return; // Evitar errores si favsRef.current es null

    favs.addEventListener('mousemove', handleMouseMove);
    favs.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      favs.removeEventListener('mousemove', handleMouseMove);
      favs.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

    return (
       <div>

        <div className={style.filtro}>

        <select className={style.button} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>

            <select className={style.button} onChange={handleFilter}>
            <option value="all">all</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>

    <div className={style.favorites}>
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                    )
                })
            }
        </div>
            </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(
//     mapStateToProps,
//     null
// )(Favorites);
//export default (Favorites, myFavorites)

export default Favorites;