import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About  from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

const email = 'dami27cito@gmail.com';
const password = 'dami1234';

function App() {
   const location =useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

  const login = async(userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {const response = await axios.get(URL + `?email=${email}&password=${password}`)
         const { data, access } = response.data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {console.error('Error en la solicitud', error)};
   }
   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = async (id) => {
    try {  const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
          const { data } = response;
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
    } catch (error) {console.error('Error en la solicitud', error)};
   }
   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== id)
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
         
         <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path='/about' element={<About onClose={onClose}/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
