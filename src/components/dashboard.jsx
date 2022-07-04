import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Profile_data_fetching } from "../Redux/actions/profiledata";
export const Dashboard=()=>{
   
    const {profiledata,isLoading,isError,isAuth,token,username}=useSelector((state)=>state.profiledata);
    //console.log(profiledata,isLoading,isError,isAuth,token,username)
   // console.log(token,username)
    const dispatch=useDispatch();
    let parameter={username,token};
    //console.log(parameter)
    useEffect(()=>{
        dispatch(Profile_data_fetching({username,token}));
    },[dispatch]);
   
    
    console.log(profiledata,isLoading,isError)
    if(isLoading){
        return <h1>Loading ...</h1>
    }
    else if(isError){
        return <h1>SomeThing Went Wrong </h1>
    }
    // return
    if(profiledata.length!=0){
        return(
            <div>
                <h3>Name:{profiledata[0].name}</h3>
                <h3>Email:{profiledata[0].email}</h3>
                <h3>username:{profiledata[0].username}</h3>
                <h3>Mobile:{profiledata[0].mobile}</h3>
                <h3>Description:{profiledata[0].description}</h3>
            </div>
        )
    }
    
}



