import React, {useState,useEffect} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button } from '@mui/material';

import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';


const FbUnit = (props) => {

  const [input,setInput] = useState()
  const [formObject,setFormObject] = useState({})

 const handleInputChange =(event)=>{
    // console.log(event.target)
    const value = event.target.value
    const name = event.target.name
    setFormObject({...formObject,[name]:value})
    // console.log(JSON.stringify(formObject))
 }
 const handleFormSubmit = (event)=>{
    event.preventDefault()
    alert(JSON.stringify(formObject))
    //Create logic to change menu item array and dashboard information using the form object
 }


  return (
    <div  >
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Card
        sx={{
          p: 0,
        }}
        
      >
        <Box
          sx={{
            padding: '15px 30px',
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography fontWeight="500" variant="h4">
              {props.name}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: '30px',
          }}
        >
          <form>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Plant 
            </CustomFormLabel>
            <CustomTextField
              // onChange={handleInputChange}
              id="Plant"
              name = "Plant"
              variant="outlined"
              defaultValue=""
              fullWidth
              required
              size="small"
        
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Name
            </CustomFormLabel>
            <CustomTextField
              // onChange={handleInputChange}
              id="Name"
              name = "Name"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Description
            </CustomFormLabel>
            <CustomTextField
              // onChange={handleInputChange}
              id="Description"
              name = "Description"
              variant="outlined"
              defaultValue=""
              fullWidth
              required
              size="small"
        
            />
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Margin
            </CustomFormLabel>
            <CustomTextField
              // onChange={handleInputChange}
              id="Margin"
              name = "Margin"
              variant="outlined"
              defaultValue=""
              fullWidth
              required
              size="small"
        
            />

             <Box
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'flex',
                    lg: 'flex',
                  },
                  alignItems: 'center',
                  mt: 3,
                }}
              >
               
     
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                    }}
                  >
                    Back to Plant
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                   Add New Asset
                  </Button>
                  <Button
                    variant="contained"
                    color="info"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                    Help
                  </Button>
                
             </Box>
            <div style={{height:10}}>

            </div>
            <div>
              <Button color="primary" variant="contained" onClick={handleFormSubmit}>
                Add 
              </Button>
            </div>
      
          
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbUnit;
