import style from './card.module.css'
import { Link, useLocation,} from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'; 
import { useState, useEffect, useRef } from 'react';


function Card({id, name, species, gender, image, onClose,}) {

   const [isFav, setIsFav] = useState(false);
   const {pathname} = useLocation();
   const dispatch = useDispatch()
   const myFavorites = useSelector(state => state.myFavorites)
   const cardRef = useRef(null);

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

   const handleMouseMove = (e) => {
      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();
      const mouseX = e.clientX - cardRect.left - cardRect.width / 2;
      const mouseY = e.clientY - cardRect.top - cardRect.height / 2;
      
      card.style.transform = `perspective(1000px) rotateX(${mouseY / -10}deg) rotateY(${mouseX / 10}deg)`;
    }
  
    const handleMouseLeave = () => {
      const card = cardRef.current;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }

   return (
      <div
      className={`${style.card}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
         
      <button className={style.boton} onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>

         { pathname!== '/favorites' && <button className={style.boton} onClick={() => onClose(id)}>X</button>}
         
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
