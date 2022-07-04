import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {isauthenticated,getusername,gettoken} from "../Redux/actions/profiledata"

export const Login=()=>{
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");
    const navigate=useNavigate();
    const {isAuth}=useSelector((state)=>state.profiledata);
    const dispatch=useDispatch();
    console.log(isAuth);
    const handlelogin=()=>{
        const payload={username,password};
        fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            if(res.token){
                dispatch(isauthenticated(true));
                dispatch(getusername(username));
                dispatch(gettoken(res.token));
                navigate("/");
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <label>Username
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password
                <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <button onClick={handlelogin}>LOGIN</button>
        </div>
    )
}

