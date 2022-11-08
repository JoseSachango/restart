import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function GeneralSelect(props) {
  const [plant, setPlant] = React.useState('');
  const [rbiPlanFormObject,setRbiPlantFormObject] = React.useState({units:[],assets:[],circuits:[],picklistConfigs:[]})

  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    const value = event.target.value
    const name = event.target.name
    setRbiPlantFormObject({...rbiPlanFormObject,[name]:value})
    setPlant(value);
    
    console.log(JSON.stringify(rbiPlanFormObject))
  };

  


 const handleFormSubmit = (event)=>{
    event.preventDefault()
   
    //Create logic to change menu item array and dashboard information using the form object
 }

  return (
    <Box sx={{ minWidth: 120 }}>
    
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" name={props.name}>{props.name}</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={plant}
            name={props.name}
            label={props.name}
            onChange={handleChange}
            // onSelect={handleChange}
            // onClick={handleChange}
            >
            {/** Menu items below have to be dynamically generated used map and passed in as props */}
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Unit 2"}>Unit 2</MenuItem>
            <MenuItem value={"xxx"}>xxx</MenuItem>
            </Select>
        </FormControl>
      
       
     
    </Box>
  );
}
