import {useState} from "react";
import './reg.css'

export const Reg = () => {
     const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    const handleSubmit = (e) => {
         e.preventDefault()
        console.log(email)
    }

return(
    <>
    <form onSubmit={handleSubmit}>
        <p className="authText">Регистрация</p>
        <fieldset>
    <label>email
        <input value={email} className="regText" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>
    </label>
        <label>password
        <input className="regText" value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="" id="password" name="password" pattern="[a-z0-5]{6, }"/>
        </label>
        </fieldset>
    </form>
        <div className="footer">
            <button type="submit">Регистрация</button>
        </div>
        </>
);
}

export default Reg;