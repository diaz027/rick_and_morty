import style from './about.module.css'
import Card from '../Card/Card';
import imag from '../../assets/gorickyourself.png';

export default function About({onClose}){
const characters = {
       id: 999,
       name: 'Damian Diaz',
       species: 'Human',
       gender: 'Male',
       origin: {
        name: 'Earth (C-137)'
       },
       image: imag,
    }
    console.log(characters);
    return (
        <div className={style.AboutImg}>
            <Card id={characters.id}
            name={characters.name}
            species={characters.species}
            gender={characters.gender}
            image={characters.image}
            origin={characters.origin.name}
            onClose={onClose}/>
        </div>
    )
}
//export default about