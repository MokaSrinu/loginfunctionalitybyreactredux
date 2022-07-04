export const Profile_Data_Loading="Profile_Data_Loading";
export const Profile_Data_Success="Profile_Data_Success";
export const Profile_Data_Failure="Profile_Data_Failure";
export const Is_Authenticated="Is_Authenticated";
export const User_name="User_name";
export const Token="Token"


export const profiledataLoading=()=>({
  type:Profile_Data_Loading
});
export const profiledataSuccess=(payload)=>({
    type:Profile_Data_Success,
    payload
  });
  export const profiledataError=()=>({
    type:Profile_Data_Failure
  });
  export const isauthenticated=(payload)=>({
    type:Is_Authenticated,
    payload
  })
  export const getusername=(payload)=>({
    type:User_name,
    payload
  })
  export const gettoken=(payload)=>({
    type:Token,
    payload
  })
  
  

  export const Profile_data_fetching=({username,token})=>
    async(dispatch)=>{
        try {
            //console.log(username,token);
            dispatch(profiledataLoading());
            let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                }
            });
            let data=await res.json();
            dispatch(profiledataSuccess(data));
        } catch (error) {
            //console.log(error)
            dispatch(profiledataError())
        }
    };
    
  