import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbarwrapper=styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 gap:20px;
 background:orange;
 color:white;
 padding:20px;
`;

const StyledLink=styled(Link)`
  color:teal;
`;
export const Navbar=()=>{
    return(
        <Navbarwrapper>
            <StyledLink to="/">DASHBOARD</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
        </Navbarwrapper>
    )
}