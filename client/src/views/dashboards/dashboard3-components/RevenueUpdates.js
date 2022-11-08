import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import ThemeSelect from '../dashboard1-components/ThemeSelect';
import DashboardCard from '../../../components/base-card/DashboardCard';
import { Matrix } from '../../charts/RBIMatrix';
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';

const RevenueUpdates = (props) => {
  const theme = useTheme();
  const contextObject = useGlobalContext()
  const updateContextObject = useGlobalContextUpdates()
  const currentPlantName = contextObject.currentPlantName
  let customer = ""
  let plantName = ""
  console.log("database data below")
  console.log(contextObject.databaseData)
  if(contextObject.databaseData){
    console.log("marker2")
    console.log(contextObject.databaseData.plant.data.values)
    console.log("Testtest")
    customer = contextObject.databaseData.plant.data.values[1][1]
    plantName = contextObject.databaseData.plant.data.values[1][2]
    
  }
  if(contextObject.currentPlantName.length>0){
    plantName = contextObject.currentPlantName
  }
// `${contextObject.databaseData[1][1]&&(contextObject.databaseData[1][1])} - ${contextObject.databaseData[1][2]&&(contextObject.databaseData[1][2])}`
  return (
    <DashboardCard style={{height:"300px"}} title={`${plantName}`} action={<ThemeSelect />}>
      {/* chart */}
      {/* <Box >
        <Matrix/>
      </Box> */}
      

      <Grid container style={{backgroundColor:"grey"}}>
        
         <Matrix obj={props.obj}/>
        
          
      </Grid>
       
      


      
    </DashboardCard>
  );
};

export default RevenueUpdates;
