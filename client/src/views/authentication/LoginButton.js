import React from 'react'
import Button from '@mui/material/Button'
import {useAuth0} from '@auth0/auth0-react'




const LoginButton = () =>{
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();



    return (
        
            <Button onClick={()=>loginWithRedirect()}
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
            
            
            sx={{
              pt: '10px',
              pb: '10px',
            }}
            >
                Log In
            </Button>

        
        
    )
}


export default LoginButton