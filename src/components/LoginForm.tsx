import { SyntheticEvent, useState } from "react"

export const LoginForm=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submitForm=(ev:SyntheticEvent)=>{
        ev.preventDefault();
    const target=ev.target as HTMLFormElement;
    console.log(target,{
        email,
        password
    });
    }
    return(
        <form className="flex flex-col gap-4 text-black" onSubmit={submitForm}>
            <input onChange={(ev)=>{setEmail(ev.target.value)}} value={email} type="email" placeholder="Enter your email"></input>
            <input onChange={(ev)=>{setPassword(ev.target.value)}} value={password} type="password" placeholder="Enter your password"></input>
            <button>Submit</button>        
        </form>
    )
}