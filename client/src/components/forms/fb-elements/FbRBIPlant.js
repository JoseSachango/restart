import React, {useState,useEffect,useRef} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button } from '@mui/material';
import CustomDisabledButton from '../custom-elements/CustomDisabledButton';
import CustomOutlinedButton from '../custom-elements/CustomOutlinedButton';
import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
import PlantSelect from './PlantSelect';
import GeneralSelect from './GeneralSelect';
import {ExcelRenderer, OutTable} from 'react-excel-renderer'
import * as XLSX from "xlsx"
import globalObject from '../../../globalObject';


const FbRBIPlant = (props) => {

  const [input,setInput] = useState()
  const [fileName,setFileName] = useState()
  const [columns,setColumns] = useState([])
  const [allData,setAllData] = useState([])
 
  const [rbiPlanFormObject,setRbiPlantFormObject] = useState({units:[],assets:[],circuits:[],picklistConfigs:[]})

 const handleInputChange =(event)=>{
    // console.log(event.target)
    const value = event.target.value
    const name = event.target.name
    setRbiPlantFormObject({...rbiPlanFormObject,[name]:value})
    console.log(JSON.stringify(rbiPlanFormObject))
 }
 const handleFormSubmit = (event)=>{
    event.preventDefault()
   
    //Create logic to change menu item array and dashboard information using the form object
 }

 const handleFile = async (e)=>{

  
  
      const [file] = e.target.files;
      setFileName(file.name)
      const data =  await file.arrayBuffer()
      const workbook = XLSX.readFile(data, {sheetRows:5})
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData = XLSX.utils.sheet_to_json(worksheet,{
        header: 1,
        defval:"",
      })

      setColumns(jsonData[0])
      setAllData(jsonData)
      globalObject.plantLevel = jsonData
      console.log(jsonData)
      console.log(jsonData[1][0])

   
  
  
  

 
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
         
            <PlantSelect
                
                val={columns}
            />
            <div style={{height:7}}>
                
            </div>
            {/**Pass in the menu items into the GeneralSelect component below using map function */}
            <GeneralSelect name="Unit"/>
            <div style={{height:7}}>

            </div>
            <GeneralSelect name="Asset Type"/>
            <div style={{height:7}}>
                
            </div>
            <GeneralSelect name="Asset"/>
            <div style={{height:7}}>
                
            </div>
            <GeneralSelect name="Circuit"/>


           
        
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
                  color="inherit"
                  sx={{
                    mb: {
                      xs: 1,
                      sm: 0,
                      lg: 0,
                    },
                  }}
                  onClick={handleFormSubmit}
                >
                 Fill RBI Matrix
                </Button>
          
           
               
          
                
            </Box>
            <div style={{height:10}}>

            </div>
            <div>
              
            <input type="file" onChange={handleFile}/>
            </div>
            <div style={{height:10}}>

            </div>
           
      
          
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbRBIPlant;
