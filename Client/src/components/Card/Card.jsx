import style from './card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'; 
import { useState, useEffect } from 'react';


function Card({id, name, species, gender, image, onClose,}) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({id, name, species, gender, image, onClose}));
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}> 
         
      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>

          <button onClick={() => onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={style.imag} src={image} alt='' /> 
      </div>
   );
}

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// const mapDispatchProps = (dispatch) => {
//    return{
//       addFav: (character) => {dispatch(addFav(character))},
//       removeFav: (id) => {dispatch(removeFav(id))}
//    }
// }

// export default connect(
//    mapStateToProps,
//    mapDispatchProps
// )(Card);

export default Card;