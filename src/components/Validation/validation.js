const validation = (userData) =>{
  const errors = {};
    
    if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/i.test(userData.email)){
            errors.email= 'el email ingresado no es valido mi  reina :p'
    }
   if(!userData.email){
    errors.email = 'debe ingresar un email';
   }
   if(userData.email.length > 35){
  errors.email = 'el email no debe superar los 35 caracteres'
   }
   if(!/^[a-zA-Z0-9]+$/i.test(userData.password)){
    errors.password = 'pone bien la contraseña mi reina'
   }
   if(userData.password.length < 6 || userData.password.length >  10){
    errors.password = 'la contraseña tiene que tener entre 6 y 10 carateres'
   }
  return errors;
}

export default validation;