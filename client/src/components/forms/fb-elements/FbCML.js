import React, {useState,useEffect} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button,MenuItem } from '@mui/material';
import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
import { useNavigate } from 'react-router';
import API from '../../../utils/API';
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';
import CustomSelect from '../custom-elements/CustomSelect';


const FbCML = (props) => {
  const navigate = useNavigate()
  const context = useGlobalContext()
  const contextUpdate = useGlobalContextUpdates()
  console.log("CML")
  console.log(context.databaseData)
  const [picklist2,setpicklist2] = useState(context.databaseData.picklist2.data.values)
  const [picklist1,setpicklist1] = useState(context.databaseData.picklist1.data.values)
  const [picklist3,setpicklist3] = useState(context.databaseData.picklist3.data.values)
  const [currentPick,setCurrentPick] = useState(picklist3[1][0])
  const handleClick1=()=>{
    navigate("/form-layouts/form-layouts")
  }
  const handleClick2=()=>{
    navigate("/form-layouts/form-layouts/circuits")
  }
  const handleAddNewCmlClick=()=>{
    contextUpdate.currentPlantCmlSet(Array(17).fill(null).fill(context.plantCurrentCml[0],0,1).fill(context.plantCurrentCml[1],1,2).fill(context.plantCurrentCml[2],2,3))
    navigate("/form-layouts/form-layouts/cml")
  }
  context.plantCurrentCml[0] = context.plantCurrentCircuit[0]
  context.plantCurrentCml[1] = context.plantCurrentCircuit[1]
  context.plantCurrentCml[2] = context.plantCurrentCircuit[2]
  context.plantCurrentCml[3] = context.plantCurrentCircuit[3]
  // context.plantCurrentCml[4] = context.plantCurrentCircuit[4]
  const handleInputChangeCmlWorksheet=(event)=>{
    const value = event.target.value
    const name = event.target.name
    switch(name){
      case "Plant":
        context.plantCurrentCml[0] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Plant Area":
        context.plantCurrentCml[1] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Asset ID":
        context.plantCurrentCml[2] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Circuit":
        //Create logic to select values from a pic list
        context.plantCurrentCml[3] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      
      case "CML ID":
        context.plantCurrentCml[4] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Description":
        context.plantCurrentCml[5] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Insp. 1 Date":
        context.plantCurrentCml[6] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Insp. Read. 1":
        context.plantCurrentCml[7] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Insp. Date 2":
        context.plantCurrentCml[8] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Insp. Read. 2":
        context.plantCurrentCml[9] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "ST CR":
        context.plantCurrentCml[10] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "LT CR":
        context.plantCurrentCml[11] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "CAR":
        context.plantCurrentCml[12] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "Est. CR":
        context.plantCurrentCml[13] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "T-MIN":
        context.plantCurrentCml[14] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "RL":
        context.plantCurrentCml[15] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;
      case "N B Thin":
        context.plantCurrentCml[16] = value
        contextUpdate.currentPlantCmlSet(context.plantCurrentCml)
        break;

      


    }
  }
  const handleSave=()=>{
    API.postUserInfo("/configureplant/cmlform",{cmlLvlRow:context.plantCurrentCml}).then(result=>{
      console.log(`Successfully posted user cml info: ${JSON.stringify(result)}`)
    }).catch(err=>{
      console.log(`Error occurred trying to post cml form data: ${err}`)
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
              Plant
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
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
                Plant Area
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Plant Area"
              name = "Plant Area"
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
              Asset ID
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Asset ID"
              name = "Asset ID"
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
              Circuit
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Circuit"
              name = "Circuit"
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
              CML ID
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="CML ID"
              name = "CML ID"
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
              onChange={handleInputChangeCmlWorksheet}
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
              Insp. 1 Date
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Insp. 1 Date"
              name = "Insp. 1 Date"
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
              Insp. Read. 1
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Insp. Read. 1"
              name = "Insp. Read. 1"
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
              Insp. Date 2
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Insp. Date 2"
              name = "Insp. Date 2"
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
              Insp. Read. 2
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Insp. Read. 2"
              name = "Insp. Read. 2"
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
              ST CR
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="ST CR"
              name = "ST CR"
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
              LT CR
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="LT CR"
              name = "LT CR"
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
              CAR
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="CAR"
              name = "CAR"
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
              Est. CR
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="Est. CR"
              name = "Est. CR"
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
              T-Min 
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="T-Min"
              name = "T-Min"
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
              RL
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="RL"
              name = "RL"
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
              N B Thin
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCmlWorksheet}
              id="N B Thin"
              name = "N B Thin"
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
                    onClick={handleClick2}
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                    }}
                  >
                    Back to Circuit
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleAddNewCmlClick}
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                   Add New CML
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

export default FbCML;
