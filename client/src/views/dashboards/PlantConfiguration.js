import React from 'react';
import { Grid } from '@mui/material';
import {
  WelcomeCard,
  BlogCard,
  Earnings,
  MonthlySales,
  SalesOverview,
  TotalSales,
  ProductPerformance,
  WeeklyStats,
  DailyActivities,
} from './dashboard1-components';

import PageContainer from '../../components/container/PageContainer';
import { useAuth0 } from '@auth0/auth0-react';

const PlantConfiguration = () => {
  // 2
  const {isAuthenticated} =useAuth0()
  return(
   
      <PageContainer title="Analytical Dashboard" description="this is Analytical Dashboard">
        <Grid container spacing={0}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={6}>
            <WelcomeCard />
            <Grid container spacing={0}>
              <Grid item xs={12} lg={6} sm={6}>
                <Earnings />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <MonthlySales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <TotalSales />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          {/* ------------------------- row 3 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>
          <Grid item xs={12} lg={4}>
            <DailyActivities />
          </Grid>
        </Grid>
      </PageContainer>
  
    
  )

};
export default PlantConfiguration;
