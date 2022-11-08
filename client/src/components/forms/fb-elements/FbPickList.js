import React, {useState,useEffect} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button } from '@mui/material';
import DataTable from './PickListTable';
import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';


const FbPickList = (props) => {

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
              Materials Table
            </CustomFormLabel>
            <div style={{height:10}}>

            </div>
            <DataTable/>
            <div style={{height:10}}>

            </div>
            <div>
              <Button color="primary" variant="contained" onClick={handleFormSubmit}>
                Save
              </Button>
            </div>
      
          
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbPickList;
