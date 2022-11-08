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

import PageContainer from '../../components/container/PageContainer';
import globalObject from '../../globalObject';
import axios from 'axios';
import API from '../../utils/API';

const Dashboard3 = () => {

  const [data, setData] = React.useState(null);

  // React.useEffect(() => {

  //   API.getUserInfo("/dashboards/dashboard3").then(res=>{
  //     console.log(`This is the response from the get request: ${res.data.values}`)
  //     setData(res.data.values[1])
  //   })
  //   // fetch("/api")
  //   //   .then((res) => res.json())
  //   //   .then((data) => setData(data.message));
  // }, []);










  // 2
return(
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
)
 
};
export default Dashboard3;
