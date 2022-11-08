import React from 'react'
import Button from '@mui/material/Button'
import {useAuth0} from '@auth0/auth0-react'
import { Link } from 'react-router-dom'




const LogoutButton = () =>{
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();



    return (
        <Button onClick={()=>logout()}
        color="secondary"
        variant="contained"
        size="large"
        fullWidth

      
        sx={{
          pt: '10px',
          pb: '10px',
        }}
        >
            Log Out
        </Button>
    )
}


export default LogoutButton