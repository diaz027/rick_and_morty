import style from './form.module.css'
import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
    })

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
    }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

 return (
    <div className={style.body}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={userData.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        <hr />
        <label htmlFor="password">password:</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}

        <button>Submit</button>
    </form>
    </div>
 )
 }

 export default Form;