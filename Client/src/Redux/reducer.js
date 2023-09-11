import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";


const initialState = {
 myFavorites: [],//original
 allCharacters: [] //copia
}

const reducer = (state = initialState, action) => {
  switch(action.type){
      // REDUCER | ADD_FAV
      case ADD_FAV:
        return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case REMOVE_FAV:
            return { 
                ...state, myFavorites: action.payload, allCharacters: action.payload };
            //     myFavorites: state.myFavorites.filter(fav => fav.id !== parseInt(action.payload)),
            //     allCharacters: state.allCharacters.filter(fav => fav.id !== parseInt(action.payload))
            // }
        
    
    case FILTER:
        const copy = [...state.allCharacters] 
        const allCharactersFiltered = action.payload === 'all' ? copy: copy.filter(Character => Character.gender == action.payload)
        return {
            ...state,
            myFavorites: [...allCharactersFiltered]
        } 
        
    case ORDER:
        if(action.payload === 'A')                         
        {const allCharactersFavCopy = [...state.allCharacters]
        const result =allCharactersFavCopy.sort((a, b) => a.id - b.id)
        return{
            ...state,
            myFavorites: [...result] 
        }
    }
    if(action.payload === 'D')
        {const allCharactersFavCopy = [...state.allCharacters]
        const result =allCharactersFavCopy.sort((a, b) => b.id - a.id)
        return{
            ...state,
            myFavorites: [...result ]
        }
    }

    

    default:
        return{...state}
  }
}
export default reducer;