import React from 'react';
import { authentication } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Help, Clock, Projects } from 'grommet-icons';


function Home() {
    const navigate = useNavigate();
    const handleLogout = () => {
        authentication
        .signOut()
        .then(() => { 
            navigate("/")
        })
        .catch((error) => console.log(error));

    }
    return (
        <div>

            <button onClick={ () =>handleLogout() }>Logout</button>
        </div>
    )
}


export default Home;