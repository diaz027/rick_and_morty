import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
 myFavorites: [],//original
 allCharacters: [] //copia
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FAV:
        return {
            ...state,
            myFavorites:[...state.myFavorites, action.payload],//original
            allCharacters:[...state.allCharacters, action.payload]//copia
        }

    case REMOVE_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter(fav => fav.id !== parseInt(action.payload))
        }
    
    case FILTER:
        const copy = [...state.allCharacters] 
        const allCharactersFiltered = copy.filter(Character => Character.gender == action.payload)
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