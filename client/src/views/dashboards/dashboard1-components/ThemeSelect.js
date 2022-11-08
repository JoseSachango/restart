import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import { Select, MenuItem, InputBase } from '@mui/material';
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';
import CustomSelect from '../../../components/forms/custom-elements/CustomSelect';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '&  .MuiInputBase-root': {
    borderRadius: '5px',
  },
  '& .MuiInputBase-input': {
    backgroundColor: theme.palette.mode === 'light' ? 'white' : theme.palette.grey.A400,
    borderRadius: 5,
    fontSize: 15,
    padding: '8px 33px 8px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: '1px solid rgba(0,0,0,0.12)',
  },
}));

const ThemeSelect = () => {

  const context = useGlobalContext()
  const updateContext = useGlobalContextUpdates()
  const assetsfiltered = []
  

  const handleChange = (event) => {   
    updateContext.setCurrentAsset(event.target.value)

  };

  return (
  
    <CustomSelect
                labelId="demo-simple-select-label"
                name = "demo-simple-select-label"
                id="demo-simple-select-label"
                value={context.currentasset}
                onChange={handleChange}
                defaultValue={"Plant Level"}
                fullWidth
                size="small"
              >
                {context.databaseData && (context.databaseData.asset2.data.values.map((item,index)=>{
                  if(index!==0){
                    // return(
                      
                    //     <MenuItem key={index} name="demo-simple-select-label" value={item[3]}>{item[3]}</MenuItem>
                      
                      
                    // )
                    if(!assetsfiltered.includes(item[0])){
                      assetsfiltered.push(item[0])
                      console.log("This is the assetsfiltered variable:")
                      console.log(assetsfiltered)
                      return(
                      
                        <MenuItem key={index} name="demo-simple-select-label" value={item[3]}>{item[3]}</MenuItem>
                      
                      
                      )
                    }
                  }else if(index===0){
                    return (<MenuItem key={index} name="demo-simple-select-label" value={"Plant Level"}>{"Plant Level"}</MenuItem>)
                  }
                })

             
                
                )}
              
    </CustomSelect>
  );
};

export default ThemeSelect;
