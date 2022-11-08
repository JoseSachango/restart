import React, {useState,useEffect} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button,MenuItem } from '@mui/material';

import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
import CustomSelect from '../custom-elements/CustomSelect';

import { useNavigate } from 'react-router-dom'
import API from '../../../utils/API';
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';


const FbAsset = (props) => {

 
  const navigate = useNavigate()
  const context = useGlobalContext()
  const contextUpdate = useGlobalContextUpdates()

  console.log("EER")
  console.log(context.databaseData.picklist2.data.values)
  const [picklist2,setpicklist2] = useState(context.databaseData.picklist2.data.values)
  const [currentPick,setCurrentPick] = useState(picklist2[1][0])
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

const handleNewCircuitClick=()=>{
  navigate("/form-layouts/form-layouts/circuits")
}

 
const handleClick1=()=>{
  navigate("/form-layouts/form-layouts")
}

const handleAddNewAssetClick=()=>{
  contextUpdate.currentPlantAssetSet(Array(67).fill(null).fill(context.plantCurrent[2],0,1))
  navigate("/form-layouts/form-layouts/asset")
}

context.plantCurrentAsset[0] = context.plantCurrent[2]
context.plantCurrentAsset[1] = context.plantCurrentArea[3]
const handleInputChangeAssetWorksheet=(event)=>{
  // console.log(event.target)
  const value = event.target.value
  const name = event.target.name
  switch(name){
    case "Plant":
      context.plantCurrentAsset[0] = value
      contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
      break;
    case "Plant Area":
      context.plantCurrentAsset[1] = value
      contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
      break;
    case "Asset ID":
      context.plantCurrentAsset[2] = value
      contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
      break;
    case "Equipment Type":
      //Create logic to select values from a pic list
      console.log("checheche")
      context.plantCurrentAsset[3] = value
      contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
      break;
    case "Description":
        context.plantCurrentAsset[4] = value
        contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
        break;
    case "PID":
      context.plantCurrentAsset[5] = value
      contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
      break;
    case "NOTES":
        context.plantCurrentAsset[6] = value
        contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
        break;


  }
}

const handleSave=()=>{
  API.postUserInfo("/configureplant/assetform",{assetLvlRow:context.plantCurrentAsset}).then(result=>{
    console.log(`Successfully posted user asset info: ${JSON.stringify(result)}`)
  }).catch(err=>{
    console.log(`Error occurred trying to post asset form data: ${err}`)
  })
}

const handleChange = (event) => {
  setCurrentPick(event.target.value);
  console.log(currentPick)
  const value = event.target.value
  const name = event.target.name
  switch(name){

    case "Equipment Type":
      //Create logic to select values from a pic list
      console.log("checheche")
      context.plantCurrentAsset[3] = value
      contextUpdate.currentPlantAssetSet(context.plantCurrentAsset)
      break;


  }
};


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
              onChange={handleInputChangeAssetWorksheet}
              id="Plant"
              name = "Plant"
              variant="outlined"
              defaultValue={context.plantCurrent[2]}
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
              onChange={handleInputChangeAssetWorksheet}
              id="Plant Area"
              name = "Plant Area"
              variant="outlined"
              defaultValue={context.plantCurrentArea[3]}
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
              onChange={handleInputChangeAssetWorksheet}
              id="Asset ID"
              name = "Asset ID"
              variant="outlined"
              defaultValue=""
              fullWidth
              required
              size="small"
        
            />
          
            {/* start */}
              <CustomFormLabel htmlFor="demo-simple-select">Equipment Type</CustomFormLabel>
              <CustomSelect
                labelId="Equipment Type"
                name = "Equipment Type"
                id="Equipment Type"
                value={currentPick}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist2.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem name="Equipment Type" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              {/* stop */}
             <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Description
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAssetWorksheet}
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
              PID
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAssetWorksheet}
              id="PID"
              name = "PID"
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
              NOTES
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeAssetWorksheet}
              id="NOTES"
              name = "NOTES"
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
                    onClick={handleNewCircuitClick}
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
                   Add New Circuit
                  </Button>
                  <Button
                    onClick={handleAddNewAssetClick}
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

export default FbAsset;
