import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

   export const addFav =(character) => {
      return async (dispatch) => {
      try{ 
         const endpoint = 'http://localhost:3001/rickandmorty/fav';
         const response = await axios.post(endpoint, character);
         dispatch ({
               type: ADD_FAV,
               payload: response.data,
         });
      } catch (error) {
         console.error('Error en la solicitud', error);
      }
   };
   };

   export const removeFav = (id) => {
      return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/` + id;
       const response = await axios.delete(endpoint);
          dispatch ({
             type: REMOVE_FAV,
             payload: response.data,
       });
    } catch (error) {
      console.error('Error en la solicitud', error);
   }
 }
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}