import React from "react";
import { useNavigate } from "react-router-dom";

export const Register=()=>{
    const [name,setName]=React.useState("");
    const [username,setUsername]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [mobile,setMobile]=React.useState("");
    const [description,setDescription]=React.useState("");
    const navigate=useNavigate();
    const handleregister=()=>{
        const payload={name,email,password,username,mobile,description};
        if(name && email && password && username && mobile && description){
            fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>res.json())
            .then((res)=>{
                    navigate("/login");
            })
            .catch((err)=>{
                console.log(err);
                alert("An error has occured");
            });
        }else{
            alert("please enter all fields of data...")
        }
        
    }
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>Register</h1>
            <label>
                Name
                <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <br />
            <label>Email
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Username
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Mobile
                <input type="number" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            </label>
            <br />
            <label>
                Description
                <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </label>
            <br />
            <button onClick={handleregister}>LOGIN</button>
        </div>
    )
}


