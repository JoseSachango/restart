import React from 'react';
import { Grid } from '@mui/material';
import {
  WelcomeCard,
  BlogCard,
  SalesOverview,
  WeeklyStats,
  DailyActivities,
  Purchases,
  TotalEarnings,
  RevenueUpdates,
  MonthlyEarnings,
  Customers,
  TotalSales,
  ProductsPerformance,
  MedicalProBranding,
} from './dashboard3-components';
import globalObject from '../../globalObject';
import PageContainer from '../../components/container/PageContainer';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../../utils/API';
import { Navigate } from 'react-router-dom';
import { ContextProvider } from '../../Context';
import { useGlobalContext,useGlobalContextUpdates} from '../../Context';

const Dashboard1 = () => {
  // 2
  const contextObject = useGlobalContext()
  const updateContextObject = useGlobalContextUpdates()
  


  React.useEffect(() => {

    API.getUserInfo("/dashboards/dashboard1").then(res=>{
      console.log(`This is the response from the get request: ${JSON.stringify(res.data.plant.data.values)}`)
      console.log("space")
      console.log(`This is the response from the get request: ${JSON.stringify(res.data.area.data.values)}`)
      console.log("end response from get request")
   
      console.log(`This is the length of that response: ${res.data.plant.data.values.length}`)
      // setData(res.data)
      updateContextObject.setDatabaseData(res.data)
      updateContextObject.setDashboardData(res.data.circuit2.data.values)
      updateContextObject.setCurrentPlantName(res.data.plant.data.values[1][2])
      console.log("setting data")

      //I think the error I was getting was becase I didnt change the value in the condition on line 53 to the new one on line 47. It was still res.data.value.length
      if(res.data.plant.data.values.length<=1){
        // setDatabaseHasData(false)
        updateContextObject.databaseDataExists(false)
        console.log("sss")
        
      }
    })
   

  }, []);
  


  return(

    <>

    
    {!contextObject.databaseDataExistsValue&&(
        <Navigate to="/form-layouts/form-layouts"/>
      )}



      {contextObject.databaseDataExistsValue&&(
         <PageContainer title="Analytical Dashboard" description="this is Analytical Dashboard">
         <Grid container spacing={0}>
           {/* ------------------------- row 1 ------------------------- */}
           <Grid item xs={12} sm={4} lg={5}>
             <WelcomeCard />
           </Grid>
           <Grid item xs={12} sm={4} lg={3}>
             <Purchases />
           </Grid>
           <Grid item xs={12} sm={4} lg={4}>
             <TotalEarnings />
           </Grid>
           <Grid item xs={12} lg={8}>
             <RevenueUpdates obj={globalObject}/>
             {/* <p>{!data ? "Loading..." : data}</p> */}
           </Grid>
           <Grid item xs={12} lg={4}>
             <MonthlyEarnings />
             <Customers />
           </Grid>
           
       
           {/* ------------------------- row 3 ------------------------- */}
           
         </Grid>
       </PageContainer>
      )}
    
      
    
    </>
     
      
  
    
  )

};
export default Dashboard1;
