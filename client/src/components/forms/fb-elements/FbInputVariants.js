import React, {useState,useEffect,useRef} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button } from '@mui/material';
import CustomDisabledButton from '../custom-elements/CustomDisabledButton';
import CustomOutlinedButton from '../custom-elements/CustomOutlinedButton';
import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
// import { rowContext } from '../../../views/form-layouts/FormLayouts';
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';
import { useNavigate } from 'react-router-dom'
import API from '../../../utils/API';

const FbInputVariants = (props) => {

  const navigate = useNavigate()
  const context = useGlobalContext()
  console.log("dss")
  console.log(context.plantCurrent)
  const contextUpdate = useGlobalContextUpdates()
  const handleClick=()=>{
      navigate("/form-layouts/form-layouts/area")
  }


//  const handleInputChange =(event)=>{
//     // console.log(event.target)
//     const value = event.target.value
//     const name = event.target.name
//     setPlantFormObject({...plantFormObject,[name]:value})
//     // console.log(JSON.stringify(formObject))
//  }

const handleInputChangePlantWorksheet=(event)=>{
  // console.log(event.target)
  const value = event.target.value
  const name = event.target.name
  switch(name){
    case "Plant Sqn":
      context.plantCurrent[0] = value
      contextUpdate.currentPlantSet(context.plantCurrent)
      break;
    case "Customer":
      context.plantCurrent[1] = value
      contextUpdate.currentPlantSet(context.plantCurrent)
      break;
    case "Name":
      context.plantCurrent[2] = value
      contextUpdate.currentPlantSet(context.plantCurrent)
      break;
    case "Location":
      context.plantCurrent[3] = value
      contextUpdate.currentPlantSet(context.plantCurrent)
      break;

  }
  


  
}

const handleSave=()=>{
  API.postUserInfo("/configureplant/plantform",{plantLvlRow:context.plantCurrent}).then(result=>{
    console.log(`Successfully posted user info: ${JSON.stringify(result)}`)
  }).catch(err=>{
    console.log(`Error occurred trying to post plant form data: ${err}`)
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
                    Plant Sqn
                  </CustomFormLabel>
                  <CustomTextField
                    onChange={handleInputChangePlantWorksheet}
                    id="Plant Sqn"
                    name = "Plant Sqn"
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
                      Customer
                  </CustomFormLabel>
                  <CustomTextField
                    onChange={handleInputChangePlantWorksheet}
                    id="Customer"
                    name = "Customer"
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
                    Name
                  </CustomFormLabel>
                  <CustomTextField
                    onChange={handleInputChangePlantWorksheet}
                    id="Name"
                    name = "Name"
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
                    Location
                  </CustomFormLabel>
                  <CustomTextField
                    onChange={handleInputChangePlantWorksheet}
                    id="Location"
                    name = "Location"
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
                        onClick={handleClick}
                        variant="contained"
                        color="inherit"
                        sx={{
                          mb: {
                            xs: 1,
                            sm: 0,
                            lg: 0,
                          },
                        }}
                      >
                        Add New Area
                      </Button>
                
                
                    
                      
                  </Box>
                  <div style={{height:10}}>

                  </div>
                  <div>
                    <Button onClick={()=>handleSave()} name="plant"color="primary" variant="contained" >
                      Save
                    </Button>
                  </div>
            
                
                </form>
              </CardContent>
            </Card>
      
     
    </div>
  );
};

export default FbInputVariants;
