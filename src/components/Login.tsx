import { useState } from "react";

const Loginuser=()=>{
    const [userlogin, userLoggedIn]=useState("User Login");
    return(
        <p>[userlogin(userLoggedIn)]</p>
    )
}

const Login=()=>{
    return(
        <button className="text-black" onClick={Loginuser}>Login</button>
    )

}
export default Login;
