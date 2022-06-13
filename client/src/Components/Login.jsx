import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import styles from '../Sass/style.modules.scss'


export const Register = () => {
const [mensaje, setMensaje] = useState();
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const [input, setInput] = useState({
    email : "",
    password : "",
})

const {name, email, password} = input

const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) => {
    e.preventDefault()
    if( email !== '' && password !== ''){
        const Usuario = {
            name,
            email,
            password
        }
        setLoading(true)
        await axios 
        .post("http://localhost:3001/login", Usuario)
        .then(({data}) => {
            setMensaje(data.mensaje);
            setInput({name : "", email : "" , password : ""});
            setTimeout(() => {
                setMensaje("")
                setLoading(false)
                navigate("/login")
            },3000)
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
            setMensaje("Algo salio mal")
            setTimeout(() => {
                setMensaje("")
                setLoading(false)
            },3000)
        })
        setLoading(false)
    }
}

return(
    <div className={styles.todoContainer}>
     <div className={styles.containerRegister}>
        <h1>Bienvenido</h1>
        <h3>Inicia sesion</h3>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
                <label htmlFor="correo">Correo</label>
                <input 
                onChange={(e) => handleChange(e)}
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="Correo.." 
                />
               
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="contraseña">Contraseña</label>
                <input 
                onChange={(e) => handleChange(e)}
                type="password"
                value={password}
                id="password"
                name="password"
                placeholder="contraseña.." 
                />
            </div>
            <button type="submit">{loading ? "cargando..." :  "Iniciar Sesion"}</button>
            <p>Aun no tienes cuenta? </p>
            <b onClick={() => navigate("/register")}>Registrate</b>
        </form>
    </div>
    {mensaje && <div className={styles.toast}>{mensaje}</div>}
</div>
)
}


export default Register