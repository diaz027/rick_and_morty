import { useState } from "react";
import style from './searchbar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.conteiner}>
         <input className={style.input} type='search' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={() => {onSearch(id); setId('')}}>AGREGAR</button>
      </div>
   );
}
