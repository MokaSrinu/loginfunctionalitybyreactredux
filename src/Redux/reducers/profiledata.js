import {Profile_Data_Failure,Profile_Data_Loading,Profile_Data_Success,Is_Authenticated,User_name,Token} from "../actions/profiledata";

export const ProfileReducer=(store={profiledata:[],isLoading:false,isError:false,isAuth:false,username:"",token:""},{type,payload})=>{
    switch(type){
        case Profile_Data_Loading:
            return{
                ...store,
                isLoading:true,
                isError:false,
                profiledata:[]
            };
        case  Profile_Data_Success:
            return{
                ...store,
                isLoading:false,
                isError:false,
                profiledata:[payload]
            };
        case  Profile_Data_Failure:
            return{
                ...store,
                isLoading:false,
                isError:true,
                profiledata:[]
            }; 
        case   Is_Authenticated:
            return{
               ...store,
               isAuth:payload
            };  
        case User_name:
            return{
                ...store,
                username:payload
            }  
        case Token:
            return{
                ...store,
                token:payload
            }      
        default:
            return store;         
    }
}