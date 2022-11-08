import React, {useState,useEffect} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button } from '@mui/material';

import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
import { useNavigate } from 'react-router-dom'
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';
import API from '../../../utils/API';


const FbArea = (props) => {

  const [input,setInput] = useState()
  const [formObject,setFormObject] = useState({})
  const navigate = useNavigate()
  const context = useGlobalContext()
  const contextUpdate = useGlobalContextUpdates()

//  const handleInputChange =(event)=>{
//     // console.log(event.target)
//     const value = event.target.value
//     const name = event.target.name
//     setFormObject({...formObject,[name]:value})
//     // console.log(JSON.stringify(formObject))
//  }
//  const handleFormSubmit = (event)=>{
//     event.preventDefault()
//     alert(JSON.stringify(formObject))
//     //Create logic to change menu item array and dashboard information using the form object
//  }

 const handleNewAssetClick=()=>{
  navigate("/form-layouts/form-layouts/assets")
}
const handleClick1=()=>{
  navigate("/form-layouts/form-layouts")
}

const handleAddNewAreaClick=()=>{
  contextUpdate.currentPlantAreaSet(Array(5).fill(null).fill(context.plantCurrent[2],2,3).fill(context.plantCurrent[1],1,2))
  navigate("/form-layouts/form-layouts/area")
}

context.plantCurrentArea[0] = context.plantCurrent[0]
context.plantCurrentArea[1] = context.plantCurrent[1]
context.plantCurrentArea[2] = context.plantCurrent[2]

const handleInputChangeAreaWorksheet=(event)=>{
  // console.log(event.target)
  const value = event.target.value
  const name = event.target.name
  switch(name){
    case "Unit Sqn":
      context.plantCurrentArea[0] = value
      contextUpdate.currentPlantAreaSet(context.plantCurrentArea)
      break;
    case "Customer":
      context.plantCurrentArea[1] = value
      contextUpdate.currentPlantAreaSet(context.plantCurrentArea)
      break;
    case "Plant Name":
      context.plantCurrentArea[2] = value
      contextUpdate.currentPlantAreaSet(context.plantCurrentArea)
      break;
    case "Plant Area":
      context.plantCurrentArea[3] = value
      contextUpdate.currentPlantAreaSet(context.plantCurrentArea)
      break;
    case "Description":
        context.plantCurrentArea[4] = value
        contextUpdate.currentPlantAreaSet(context.plantCurrentArea)
        break;
    case "Margin":
      context.plantCurrentArea[5] = value
      contextUpdate.currentPlantAreaSet(context.plantCurrentArea)
      break;


  }
}

const handleSave=()=>{
  API.postUserInfo("/configureplant/areaform",{areaLvlRow:context.plantCurrentArea}).then(result=>{
    console.log(`Successfully posted user area info: ${JSON.stringify(result)}`)
  }).catch(err=>{
    console.log(`Error occurred trying to post area form data: ${err}`)
  })
}


  return (
    <div>
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
              Unit Sqn
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAreaWorksheet}
              
              id="Unit Sqn"
              name = "Unit Sqn"
              variant="outlined"
              //is unit sqn the same as plant sqn???
              defaultValue={context.plantCurrent[0]}
              fullWidth
              required
              size="small"
        
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Customer
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAreaWorksheet}
              id="Customer"
              name = "Customer"
              variant="outlined"
              defaultValue={context.plantCurrent[1]}
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
             Plant
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAreaWorksheet}
              id="Plant Name"
              name = "Plant Name"
              variant="outlined"
              defaultValue={context.plantCurrent[2]}
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
              Plant Area
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAreaWorksheet}
              id="Plant Area"
              name = "Plant Area"
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
              Description
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAreaWorksheet}
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
              onChange={handleInputChangeAreaWorksheet}
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
                    onClick={handleClick1}
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
                    onClick={handleNewAssetClick}
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
                    onClick={handleAddNewAreaClick}
                    variant="contained"
                    color="primary"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                   Add New Area
                  </Button>
               
                
             </Box>
            <div style={{height:10}}>

            </div>
            <div>
              <Button color="primary" variant="contained" onClick={handleSave}>
                Save
              </Button>
            </div>
      
          
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbArea;
