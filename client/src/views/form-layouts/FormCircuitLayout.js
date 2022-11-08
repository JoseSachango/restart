import React, {useRef} from 'react';
import { Grid } from '@mui/material';
import {
  FbOrdinaryForm,
  FbDefaultForm,
  FbBasicHeaderForm,
  FbReadonlyForm,
  FbDisabledForm,
  FbLeftIconForm,
  FbRightIconForm,
  FbInputVariants,
  FbAsset,
  FbCircuit,
  FbPickList,
  FbUnit,
  FbCML
} from '../../components/forms/fb-elements/index';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import API from '../../utils/API';
// import { google } from 'googleapis';
import {useGlobalContext,useGlobalContextUpdates} from '../../Context';
import { CircleSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Plant Configuration',
  },
];



const FormCircuitLayout = () => {
    const navigate = useNavigate()

    const handleClick=()=>{
        navigate("/form-layouts/form-layouts")
    }



  //create an array representing a row and pass it down to each form as a prop. Each change will effect the array and when your

  // React.useEffect(() => {

  //   API.getUserInfo("/dashboards/dashboard1").then(res=>{
  //     console.log(`This is the response from the get request: ${res.data.values}`)
  //     // setData(res.data.values)
  //   })
 
  // }, []);

// console.log('ddsaaa')
// const globalContext = useGlobalContext()
// const globalContextUpdate = useGlobalContextUpdates()
// console.log(globalContext.row)
// globalContext.row[0] = "Hello World"
// globalContextUpdate.updateRow(globalContext.row)

// console.log("ppp")
// console.log(globalContext)
 









  return(
    <PageContainer title="Form Layouts" description="this is innerpage">
    {/* breadcrumb */}
    <Breadcrumb title="New Circuit" items={BCrumb} />
    {/* end breadcrumb */}
    
   
      <Grid container spacing={0}>
        
          <Grid item lg={12} md={12} xs={12}>
            <FbCircuit name="Circuit" />
          </Grid>
           
      
      </Grid>
    
      
    
     
    </PageContainer>
  )


};

export default FormCircuitLayout;
