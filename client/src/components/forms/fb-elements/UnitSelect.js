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

export default function UnitSelect() {
  const [unit, setUnit] = React.useState('');

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
    
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={unit}
            label="Unit"
            onChange={handleChange}
            >
            <MenuItem value={10}>Atmos Tri Cities</MenuItem>
            <MenuItem value={20}>Atmos La Pan</MenuItem>
            <MenuItem value={30}>xxx</MenuItem>
            </Select>
        </FormControl>
      
       
     
    </Box>
  );
}
