import React, {useState,useEffect} from 'react';
import { Card, CardContent, Divider, Box, Typography, FormControl,Button,MenuItem, Grid } from '@mui/material';

import CustomTextField from '../custom-elements/CustomTextField';
import CustomFormLabel from '../custom-elements/CustomFormLabel';
import { useNavigate } from 'react-router-dom'
import API from '../../../utils/API';
import { useGlobalContext,useGlobalContextUpdates } from '../../../Context';
import CustomSelect from '../custom-elements/CustomSelect';
import ListSubheader from '@mui/material/ListSubheader';




const FbCircuit = (props) => {

 
  const navigate = useNavigate()
  const context = useGlobalContext()
  const contextUpdate = useGlobalContextUpdates()
  console.log("EER")
  console.log(context.databaseData)
  const [picklist2,setpicklist2] = useState(context.databaseData.picklist2.data.values)
  const [picklist1,setpicklist1] = useState(context.databaseData.picklist1.data.values)
  const picklist1filtered = []
  const picklist1filtered2 = []
  // const temp = picklist1.map((item,index)=>{
  //   if(!picklist1filtered.includes(item)){
  //     picklist1filtered.push(item)
  //     return item
  //   }
  // })
  // console.log("ABC")
  // console.log(picklist1filtered)
  // console.log(temp)
 
  const [picklist3,setpicklist3] = useState(context.databaseData.picklist3.data.values)
  const [picklist4,setpicklist4] = useState(context.databaseData.picklist4.data.values)
  const [picklist5,setpicklist5] = useState(context.databaseData.picklist5.data.values)
  const [picklist6,setpicklist6] = useState(context.databaseData.picklist6.data.values)
  const [picklist7,setpicklist7] = useState(context.databaseData.picklist7.data.values)
  const [alpha, setAlpha] = useState(context.databaseData.getRowsTableA.data.values)
  const [prpx, setPrPx] = useState(context.databaseData.getRowsTableB.data.values)
  const [copx, setCoPx] = useState(context.databaseData.getRowsTableC.data.values)
  const [ys,setYS] = useState(context.databaseData.getRowsTableC.data.values)
  const [currentPick,setCurrentPick] = useState(picklist3[1][0])
  const [currentPickPrP1,setCurrentPickPrP1] = useState("")
  const [currentPickPrP2,setCurrentPickPrP2] = useState("")
  const [currentPickPrP3,setCurrentPickPrP3] = useState("")
  const [currentPickCoP1,setCurrentPickCoP1] = useState("")
  const [currentPickCoP2,setCurrentPickCoP2] = useState("")
  const [currentPickCoP3,setCurrentPickCoP3] = useState("")
  const [currentPickYS,setCurrentPickYS] = useState("")
  const [currentPickTS,setCurrentPickTS] = useState("")
  const [currentPickS,setCurrentPickS] = useState("")
  const [currentPickAlpha,setCurrentPickAlpha] = useState("")
  const [currentPickSystem,setCurrentPickSystem] = useState("")
  const [currentPickStream,setCurrentPickStream] = useState("")
  const [currentPickStreamDescription,setCurrentPickStreamDescription] = useState("")
  const [currentPickLining,setCurrentPickLining] = useState("")
  const [generalMaterial,setCurrentPickGeneralMaterial] = useState("")
  const [specificMaterial,setCurrentPickSpecificMaterial] = useState("")
  const [damageMechanism1,setCurrentPickDamageMechanism1] = useState("")
  const [damageType1,setCurrentPickDamageType1] = useState("")
  const [damageMechanism2,setCurrentPickDamageMechanism2] = useState("")
  const [damageType2,setCurrentPickDamageType2] = useState("")
  const [damageMechanism3,setCurrentPickDamageMechanism3] = useState("")
  const [damageType3,setCurrentPickDamageType3] = useState("")
  const [gff,setCurrentPickGff] = useState(0)
  const [nps,setCurrentPickNPS] = useState("")
  const [pof,setCurrentPickPOF] = useState("")
  const [dfthinning,setCurrentPickDFThinning] = useState("")
  const [healthsafety,setCurrentPickHealthSafety] = useState("")
  const [economic,setCurrentPickEconomic] = useState("")
  const [environmental,setCurrentPickEvironmental] = useState("")
  const [cofmax,setCurrentPickCoFMax] = useState("")
  const [cofhealth,setCurrentPickCofhealth] = useState(0)
  const [cofenvi,setCurrentPickCofenvi] = useState(0)
  const [cofecon,setCurrentPickCofecon] = useState(0)
  const [risk,setCurrentPickRisk] = useState(0)
  // const [system,setCurrentPickSystem] = useState("")
  let CoFValues = Array(3).fill(null)
  const health = [1,2,3,4,5]
  const envi = [1,2,3,4,5]
  const econ =["Greater Than 10,000,000 USD","1,000,000 to 10,000,000 USD", "10,000 to 1,000,000 USD", "10,000 to 100,000 USD", "Less than 10,000 USD"]
  let CoFMax = 0







  API.getUserInfo("/configureplant/trd").then(result=>{
    console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
    // setCurrentTrd(result.data.data.values[0][0])
    console.log("BOOGIE")
    contextUpdate.setCurrentTrd(parseFloat(result.data.data.values[0][0]))
    contextUpdate.setInitialTrd(parseFloat(result.data.data.values[0][0])) 

    console.log("WOOGIE")

  }).catch(err=>{
    console.log(`Error occurred trying to post circuit form data: ${err}`)
  })





  const handleClick1=()=>{
    navigate("/form-layouts/form-layouts")
  }
  const handleClick2=()=>{
    navigate("/form-layouts/form-layouts/cml")
  }
  const handleAddNewCircuitClick=()=>{
    contextUpdate.currentPlantCircuitSet(Array(67).fill(null).fill(context.plantCurrentAsset[0],0,1).fill(context.plantCurrentAsset[1],1,2).fill(context.plantCurrentAsset[2],2,3).fill(context.plantCurrentAsset[3],3,4))
    navigate("/form-layouts/form-layouts/circuits")
  }


  //Area where calculations are performed
  context.plantCurrentCircuit[0] = context.plantCurrentAsset[0]
  context.plantCurrentCircuit[1] = context.plantCurrentAsset[1]
  context.plantCurrentCircuit[2] = context.plantCurrentAsset[2]
  context.plantCurrentCircuit[3] = context.plantCurrentAsset[3]
  context.plantCurrentCircuit[4] = context.plantCurrentAsset[4]

  const handleInputChangeCircuitWorksheet=(event)=>{
    const value = event.target.value
    const name = event.target.name
    switch(name){
      case "Plant":
        context.plantCurrentCircuit[0] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Plant Area":
        context.plantCurrentCircuit[1] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Asset ID":
        context.plantCurrentCircuit[2] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Equipment Type":
        //Create logic to select values from a pic list
        context.plantCurrentCircuit[3] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Asset Description":
        context.plantCurrentCircuit[4] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "Circuit":
        context.plantCurrentCircuit[5] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
    
      case "Circuit Type":
        context.plantCurrentCircuit[6] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "Circuit Description":
        context.plantCurrentCircuit[7] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "PID":
        context.plantCurrentCircuit[8] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "System":
        context.plantCurrentCircuit[9] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Stream #":
        context.plantCurrentCircuit[10] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "Stream Description":
        context.plantCurrentCircuit[11] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "Vapor/Liquid Ratio":
        context.plantCurrentCircuit[12] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "Manufacturer":
        context.plantCurrentCircuit[13] = value
            contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
            break;
      case "Serial #":
        context.plantCurrentCircuit[14] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          break;
      case "In-Service Date":
        console.log("In-Service Date")
        context.plantCurrentCircuit[15] = value
            contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
            break;
      case "General Material":
          context.plantCurrentCircuit[16] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          if(context.plantCurrentCircuit[17]!==null){
            for(let i=0;i<picklist1.length;i++){
              // for(let j=0;j<picklist1[0].length;j++){
                
              // }
              if(picklist1[i][0]===context.plantCurrentCircuit[16]&&picklist1[i][1]===context.plantCurrentCircuit[17]){
                API.updateUserInfo("/configureplant/ys",{calculationInput:picklist1[i][3]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/ts",{calculationInput:picklist1[i][4]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/s",{calculationInput:picklist1[i][5]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
              }
            }
          }
          break;
      case "Specific Material":
        context.plantCurrentCircuit[17] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          if(context.plantCurrentCircuit[16]!==null){
            for(let i=0;i<picklist1.length;i++){
              // for(let j=0;j<picklist1[0].length;j++){
                
              // }
              if(picklist1[i][0]===context.plantCurrentCircuit[16]&&picklist1[i][1]===context.plantCurrentCircuit[17]){
                API.updateUserInfo("/configureplant/ys",{calculationInput:picklist1[i][3]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/ts",{calculationInput:picklist1[i][4]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/s",{calculationInput:picklist1[i][5]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
              }
            }
          }
          break;
      case "Insulation":
        console.log("Insulation")
        context.plantCurrentCircuit[18] = value
            contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
            break;
      case "PWHT":
        context.plantCurrentCircuit[19] = value
              contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
              break;

      case "Lining":
        context.plantCurrentCircuit[20] = value
                contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
                break;
      case "Cladding":
        context.plantCurrentCircuit[21] = value
                  contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
                  break;
      case "Design Pressure":
        context.plantCurrentCircuit[22] = value
                    contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
                    break;
      case "Design Temperature":
        context.plantCurrentCircuit[23] = value
                      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
                      break;
      case "Operating Pressure":
        context.plantCurrentCircuit[24] = value
                        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
                        break;
      case "Operating Temperature In":
        context.plantCurrentCircuit[25] = value
                          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
                          break;
      case "Operating Temperature Out":
        context.plantCurrentCircuit[26] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Length":
        context.plantCurrentCircuit[27] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Inner Diameter":
        context.plantCurrentCircuit[28] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Outer Diameter":
        context.plantCurrentCircuit[29] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Original Thickness":
        context.plantCurrentCircuit[30] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Corrosion Allowance":
        context.plantCurrentCircuit[31] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Join Efficiency":
        context.plantCurrentCircuit[32] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Last Inspection Date":
          context.plantCurrentCircuit[74] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          API.updateUserInfo("/configureplant/lastinspectiondate",{calculationInput:value}).then(result=>{
            console.log(`Successfully updated user last inspection date info: ${JSON.stringify(result)}`)
          }).catch(err=>{
            console.log(`Error occurred trying to update circuit form data (last inspection date): ${err}`)
          })
          break;
      case "In-Service Date":
        console.log("In-Service Date")
        context.plantCurrentCircuit[33] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Reduce Repair Rate":
        context.plantCurrentCircuit[34] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Estimated Repair Time":
        context.plantCurrentCircuit[35] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Dead Leg":
        console.log("Dead Leg")
        context.plantCurrentCircuit[36] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "IP/MP":
        context.plantCurrentCircuit[37] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "SA":
        context.plantCurrentCircuit[38] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "NPS":
        console.log("NPS")
        context.plantCurrentCircuit[39] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Notes":
        context.plantCurrentCircuit[40] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Mechanism 1":
        context.plantCurrentCircuit[41] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Type 1":
        context.plantCurrentCircuit[42] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "PoF 1":
        context.plantCurrentCircuit[43] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Alpha":
        context.plantCurrentCircuit[43] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CR-Susceptibility 1":
        context.plantCurrentCircuit[44] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CR-Susceptibility Type-Source 1":
        context.plantCurrentCircuit[45] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Mechanism 2":
        context.plantCurrentCircuit[46] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Type 2":
        context.plantCurrentCircuit[47] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "PoF 2":
        context.plantCurrentCircuit[48] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CR-Susceptibility 2":
        console.log("CR-Susceptibility 2")
        context.plantCurrentCircuit[49] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CR-Susceptibility Type-Source 2":
        context.plantCurrentCircuit[50] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Mechanism 3":
        context.plantCurrentCircuit[51] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Type 3":
        context.plantCurrentCircuit[52] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "PoF 3":
        context.plantCurrentCircuit[53] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CR-Susceptibility 3":
        context.plantCurrentCircuit[54] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CR-Susceptibility Type-Source 3":
        context.plantCurrentCircuit[55] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "DF Thinning":
        context.plantCurrentCircuit[56] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "DF Cracking":
        context.plantCurrentCircuit[57] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "DF Total":
        context.plantCurrentCircuit[58] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "GFF":
        context.plantCurrentCircuit[59] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "PoF Total":
        context.plantCurrentCircuit[60] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      // case "Human":
      //   context.plantCurrentCircuit[61] = value
      //   contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      //   break;
      // case "ENVI":
      //   context.plantCurrentCircuit[62] = value
      //   contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      //   break;
      // case "ECO":
      //   context.plantCurrentCircuit[63] = value
      //   contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      //   break;
      case "CoF Max":
        // context.plantCurrentCircuit[64] = value
        // contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CoF Economic":
        setCurrentPickEconomic(value)
        context.plantCurrentCircuit[63] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CoF Health/Safety":
        setCurrentPickHealthSafety(value)
        context.plantCurrentCircuit[61] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "CoF Environmental":
        setCurrentPickEvironmental(value)
        context.plantCurrentCircuit[62] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Risk Total":
        context.plantCurrentCircuit[65] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Shape":
        context.plantCurrentCircuit[66] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "I 1":
        context.plantCurrentCircuit[67] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case " I 2":
        context.plantCurrentCircuit[68] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "I 3":
        context.plantCurrentCircuit[69] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;



    }
  }

  const handleChange = (event) => {
    
   
    console.log("handleChangehandleChange")
    console.log(currentPick)
    const value = event.target.value
    const name = event.target.name
    switch(name){
  
      case "Circuit Type":
        setCurrentPick(event.target.value);
        //Create logic to select values from a pic list
        // console.log("checheche2")
        // context.plantCurrentCircuit[6] = value
        // contextUpdate.currentPlantCircuitSet(context.plantCurrentCoP1)
        break;
      
      case "Co P1":
        setCurrentPickCoP1(event.target.value);
        // context.plantCurrentCoP1 = value
        // contextUpdate.currentPlantCoP1Set(context.plantCurrentCircuit)
        API.updateUserInfo("/configureplant/cop1",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "Co P2":
        setCurrentPickCoP2(event.target.value);

        // console.log("TRYTRYTRY")
        // context.currentCoP2 = value
        // contextUpdate.setCurrentCoP2(context.currentCoP2)
        API.updateUserInfo("/configureplant/cop2",{calculationInput:event.target.value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "Co P3":
        setCurrentPickCoP3(event.target.value);

        // context.plantCurrentCoP3 = value
        // contextUpdate.currentPlantCoP3Set(context.plantCurrentCoP3)
        API.updateUserInfo("/configureplant/cop3",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
  
      case "Pr P1":
        console.log("TRYTRYTRY")
        setCurrentPickPrP1(event.target.value);

        // context.plantCurrentPrP1 = value
        // contextUpdate.currentPlantCoP3Set(context.plantCurrentPrP1)
        API.updateUserInfo("/configureplant/prp1",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "Pr P2":
        setCurrentPickPrP2(event.target.value);

        API.updateUserInfo("/configureplant/prp2",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break
      case "Pr P3":
        setCurrentPickPrP3(event.target.value);

        API.updateUserInfo("/configureplant/prp3",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "YS":
          setCurrentPickYS(event.target.value);
  
          API.updateUserInfo("/configureplant/ys",{calculationInput:value}).then(result=>{
            console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
          }).catch(err=>{
            console.log(`Error occurred trying to post circuit form data: ${err}`)
          })
          break;
      case "TS":
            setCurrentPickTS(event.target.value);
    
            API.updateUserInfo("/configureplant/ts",{calculationInput:value}).then(result=>{
              console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
            }).catch(err=>{
              console.log(`Error occurred trying to post circuit form data: ${err}`)
            })
            break;
      case "S":
        setCurrentPickS(event.target.value);
    
        API.updateUserInfo("/configureplant/s",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "Alpha":
        setCurrentPickAlpha(event.target.value)
        API.updateUserInfo("/configureplant/alpha",{calculationInput:value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "System":
        setCurrentPickSystem(event.target.value)
        context.plantCurrentCircuit[9] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        // API.updateUserInfo("/configureplant/alpha",{calculationInput:value}).then(result=>{
        //   console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        // }).catch(err=>{
        //   console.log(`Error occurred trying to post circuit form data: ${err}`)
        // })
        break;
      case "Stream #":
        setCurrentPickStream(value)
        context.plantCurrentCircuit[10] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Stream Description":
        setCurrentPickStreamDescription(value)
        context.plantCurrentCircuit[11] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Lining":
        setCurrentPickLining(value)
        context.plantCurrentCircuit[20] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Mechanism 1":
        setCurrentPickDamageMechanism1(value)
        context.plantCurrentCircuit[41] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Type 1":
        setCurrentPickDamageType1(value)
        context.plantCurrentCircuit[42] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Mechanism 2":
        setCurrentPickDamageMechanism2(value)
        context.plantCurrentCircuit[46] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Type 2":
        setCurrentPickDamageType2(value)
        context.plantCurrentCircuit[47] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Mechanism 3":
        setCurrentPickDamageMechanism3(value)
        context.plantCurrentCircuit[51] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
      case "Damage Type 3":
        setCurrentPickDamageType3(value)
        context.plantCurrentCircuit[52] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        break;
     
      case "General Material":
        setCurrentPickGeneralMaterial(event.target.value)
        context.plantCurrentCircuit[16] = value
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          if(context.plantCurrentCircuit[17]!==null){
            for(let i=0;i<picklist1.length;i++){
              // for(let j=0;j<picklist1[0].length;j++){
                
              // }
              if(picklist1[i][0]===context.plantCurrentCircuit[16]&&picklist1[i][1]===context.plantCurrentCircuit[17]){
                API.updateUserInfo("/configureplant/ys",{calculationInput:picklist1[i][3]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/ts",{calculationInput:picklist1[i][4]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/s",{calculationInput:picklist1[i][5]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
              }
            }
          }
        break;
      case "Specific Material":
        setCurrentPickSpecificMaterial(event.target.value)
        context.plantCurrentCircuit[17] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        API.updateUserInfo("/configureplant/specificmaterial",{calculationInput:event.target.value}).then(result=>{
          console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
          if(context.plantCurrentCircuit[16]!==null){
            for(let i=0;i<picklist1.length;i++){
              // for(let j=0;j<picklist1[0].length;j++){
                
              // }
              if(picklist1[i][0]===context.plantCurrentCircuit[16]&&picklist1[i][1]===context.plantCurrentCircuit[17]){
                API.updateUserInfo("/configureplant/ys",{calculationInput:picklist1[i][3]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/ts",{calculationInput:picklist1[i][4]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
                API.updateUserInfo("/configureplant/s",{calculationInput:picklist1[i][5]}).then(result=>{
                  console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
                }).catch(err=>{
                  console.log(`Error occurred trying to post circuit form data: ${err}`)
                })
              }
            }
          }
        break;
      case "Original Thickness":
        context.plantCurrentCircuit[30] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        API.updateUserInfo("/configureplant/originalthickness",{calculationInput:value}).then(result=>{
          console.log(`Successfully updated user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "CR-Susceptibility 1":
        context.plantCurrentCircuit[44] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        API.updateUserInfo("/configureplant/crsusceptibility1",{calculationInput:value}).then(result=>{
          console.log(`Successfully updated user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
    
      case "Inner Diameter":
        context.plantCurrentCircuit[28] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        API.updateUserInfo("/configureplant/innerdiameter",{calculationInput:value}).then(result=>{
          console.log(`Successfully updated user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "Operating Pressure":
        context.plantCurrentCircuit[24] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        API.updateUserInfo("/configureplant/operatingpressure",{calculationInput:value}).then(result=>{
          console.log(`Successfully updated user circuit info: ${JSON.stringify(result)}`)
        }).catch(err=>{
          console.log(`Error occurred trying to post circuit form data: ${err}`)
        })
        break;
      case "NPS":
        setCurrentPickNPS(value)
        context.plantCurrentCircuit[39] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
         
        if(context.plantCurrentAsset[3]==="PIPE"&&value<2){
          console.log("World")
          setCurrentPickGff(2.8*(10**(-5)))
          context.plantCurrentCircuit[59] = 2.8*(10**(-5))
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          API.updateUserInfo("/configureplant/gff",{calculationInput:2.8*(10**(-5))}).then(result=>{
            console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
      
      
      
      
          }).catch(err=>{
            console.log(`Error occurred trying to post circuit form data: ${err}`)
          })
          
        }else{
          console.log("Hello1")
          setCurrentPickGff(8*(10**(-6)))
          context.plantCurrentCircuit[59] = 8*(10**(-6))
          contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
          API.updateUserInfo("/configureplant/gff",{calculationInput:8*(10**(-6))}).then(result=>{
            console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
      
      
      
      
          }).catch(err=>{
            console.log(`Error occurred trying to post circuit form data: ${err}`)
          })
        }
        break;
      case "CoF Health/Safety":
        setCurrentPickHealthSafety(value)
        context.plantCurrentCircuit[61] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        let temp1 = 0
        switch(value){
          case 1:
            console.log("hit1")
            console.log(cofhealth)
            setCurrentPickCofhealth(1000) 
            temp1 = 1000
            console.log(cofhealth)
            break;
          case 2:
            console.log(cofhealth)
            setCurrentPickCofhealth(10000) 
            temp1 = 10000
            console.log(cofhealth)
            break;
          case 3:
            console.log(cofhealth)
            setCurrentPickCofhealth(100000) 
            temp1 = 100000
            console.log(cofhealth)
            break;
          case 4:
            console.log(cofhealth)
            setCurrentPickCofhealth(1000000)
            temp1 = 1000000 
            console.log(cofhealth)
            break;
          case 5:
            console.log(cofhealth)
            setCurrentPickCofhealth(10000000)
            temp1 = 10000000 
            console.log(cofhealth)
            break;
        }
        CoFMax = Math.max(cofecon,cofenvi,temp1)
        console.log("RERERET1")
        console.log(CoFMax)
        setCurrentPickCoFMax(CoFMax)
        context.plantCurrentCircuit[64] = CoFMax
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit) 
        break;
      case "CoF Environmental":
        setCurrentPickEvironmental(value)
        context.plantCurrentCircuit[62] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        let temp2 = 0
        switch(value){
          case 1:
            console.log(cofenvi)
            setCurrentPickCofenvi(1000) 
            temp2 = 1000
            console.log(cofenvi)
            break;
          case 2:
            console.log(cofenvi)
            setCurrentPickCofenvi(10000) 
            temp2 = 10000
            console.log(cofenvi)
            break;
          case 3:
            console.log(cofenvi)
            setCurrentPickCofenvi(100000) 
            temp2 = 100000
            console.log(cofenvi)
            break;
          case 4:
            console.log(cofenvi)
            setCurrentPickCofenvi(1000000) 
            temp2 = 1000000
            console.log(cofenvi)
            break;
          case 5:
            console.log(cofenvi)
            setCurrentPickCofenvi(10000000) 
            temp2 = 10000000
            console.log(cofenvi)
            break;
        }
        CoFMax = Math.max(cofecon,temp2,cofhealth)
        console.log("RERERET2")
        console.log(CoFMax)
        setCurrentPickCoFMax(CoFMax)
        context.plantCurrentCircuit[64] = CoFMax
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit) 
        break;
      case "CoF Economic":
        setCurrentPickEconomic(value)
        context.plantCurrentCircuit[63] = value
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit) 
        let temp3 = 0
        switch(value){
          case "Greater Than 10,000,000 USD":
            console.log("hit3")
            console.log(cofecon)
            setCurrentPickCofecon(10000000) 
            temp3= 10000000 
            console.log(cofecon)
            break;
          case "1,000,000 to 10,000,000 USD":
            console.log(cofecon)
            setCurrentPickCofecon(1000000) 
            temp3= 1000000 
            console.log(cofecon)
            break;
          case "10,000,000 to 1,000,000 USD":
            console.log(cofecon)
            setCurrentPickCofecon(100000) 
            temp3= 100000 
            console.log(cofecon)
            break;
          case "10,000 to 100,000 USD":
            console.log(cofecon)
            setCurrentPickCofecon(10000)
            temp3= 10000  
            console.log(cofecon)
            break;
          case "Less than 10,000 USD":
            console.log(cofecon)
            setCurrentPickCofecon(1000) 
            temp3= 1000
            console.log(cofecon)
            break;
        }
        CoFMax = Math.max(temp3,cofenvi,cofhealth)
        console.log("RERERET3")
        console.log(CoFMax)
        setCurrentPickCoFMax(CoFMax)
        context.plantCurrentCircuit[64] = CoFMax
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit) 
        break;
      
     
  
    }
  };

  const handleSave=()=>{
    //Calculations performed when the save button is hit -> Shou

    // figure out if we're actually supposed to get data from cml level
   console.log("CoF Max")
   console.log(cofmax)
   console.log(context.plantCurrentCircuit[64])
    

    API.getUserInfo("/configureplant/dfthinning").then(result=>{
   
      console.log(`Successfully retrieved user df thinning info: ${parseFloat(result.data.data.values[0][0])}`)
      console.log("gff & pof")
      console.log(gff)
      console.log(result.data.data.values[0][0]*gff)
      console.log(cofmax)

      if(((3.06*(10**(-5)))>=(result.data.data.values[0][0]*gff))&&(cofmax==1000||cofmax==10000||cofmax==100000)){
        console.log("currentlvl 1") 
        console.log(result.data.data.values[0][0])
        console.log(gff)
        console.log((3.06*(10**(-4))))
        console.log((3.06*(10**(-3))))
        console.log(result.data.data.values[0][0]*gff)
        console.log((result.data.data.values[0][0]*gff)<(3.06*(10**(-4))))  
        contextUpdate.setCurrentLvl(1)
      }else if(((3.06*(10**(-5)))<=(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-4))))&&(cofmax==1000||cofmax==10000)){
        console.log("currentlvl 1")
        console.log(result.data.data.values[0][0])
        console.log(gff)
        console.log((3.06*(10**(-5))))
        console.log((3.06*(10**(-4))))
        console.log(result.data.data.values[0][0]*gff)
        console.log((result.data.data.values[0][0]*gff)<(3.06*(10**(-4))))
        console.log((3.06*(10**(-5)))<=(result.data.data.values[0][0]*gff))
        contextUpdate.setCurrentLvl(1)
      }else if(((3.06*(10**(-4)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-3))))&&(cofmax==1000)){
        console.log("currentlvl 1")
        console.log(result.data.data.values[0][0])
        console.log(gff)
        console.log((3.06*(10**(-4))))
        console.log((3.06*(10**(-3))))
        console.log(result.data.data.values[0][0]*gff)
        console.log((3.06*(10**(-4)))<(result.data.data.values[0][0]*gff))
        contextUpdate.setCurrentLvl(1)
      }else if(((3.06*(10**(-3)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-2))))&&(cofmax==1000||cofmax==10000)){
        console.log("currentlvl 2")
        console.log(cofmax)
        contextUpdate.setCurrentLvl(2)
      }else if(((3.06*(10**(-4)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-3))))&&(cofmax==10000||cofmax==100000)){
        console.log("currentlvl 2")
        console.log(cofmax)
        contextUpdate.setCurrentLvl(2)
      }else if(((3.06*(10**(-5)))<=(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-4))))&&(cofmax==100000||cofmax==1000000)){
        console.log("currentlvl 2")
        console.log(cofmax)
        contextUpdate.setCurrentLvl(2)
      }else if(((3.06*(10**(-5)))>=(result.data.data.values[0][0]*gff))&&(cofmax==1000000)){
        console.log("currentlvl 2")
        console.log(cofmax)
        contextUpdate.setCurrentLvl(2)
      }//
      else if(((3.06*(10**(-3)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-2))))&&(cofmax===100000||cofmax===1000000)){
        console.log("currentlvl 3")
       
        contextUpdate.setCurrentLvl(3)
      }else if(((3.06*(10**(-4)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-3))))&&(cofmax==1000000)){
        console.log("currentlvl 3")
       
        contextUpdate.setCurrentLvl(3)
      }else if(((3.06*(10**(-5)))<=(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-4))))&&(cofmax==10000000)){
        console.log("currentlvl 3")
       
        contextUpdate.setCurrentLvl(3)
      }else if(((3.06*(10**(-5)))>=(result.data.data.values[0][0]*gff))&&(cofmax==10000000)){
        console.log("currentlvl 3")
       
        contextUpdate.setCurrentLvl(3)
      }else if(((3.06*(10**(-2)))<(result.data.data.values[0][0]*gff))&&(cofmax==1000||cofmax==10000)){
        console.log("currentlvl 3")
       
        contextUpdate.setCurrentLvl(3)
      }else if(((3.06*(10**(-2)))<(result.data.data.values[0][0]*gff))&&(cofmax==100000||cofmax==1000000||cofmax==10000000)){
        console.log("currentlvl 4")
       
        contextUpdate.setCurrentLvl(4)
      }else if(((3.06*(10**(-3)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-2))))&&(cofmax===10000000)){
        console.log("currentlvl 4")
       
        contextUpdate.setCurrentLvl(4)
      }else if((((3.06*(10**(-4)))<(result.data.data.values[0][0]*gff))&&((result.data.data.values[0][0]*gff)<(3.06*(10**(-3)))))&&(cofmax===10000000)){
        console.log("currentlvl 4")
       
        contextUpdate.setCurrentLvl(4)
      }
      
        setCurrentPickDFThinning(parseFloat(result.data.data.values[0][0]))      
        context.plantCurrentCircuit[56] = parseFloat(result.data.data.values[0][0])
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        context.plantCurrentCircuit[58] = parseFloat(result.data.data.values[0][0])
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        console.log("Thinning")
        console.log(dfthinning)
        setCurrentPickPOF(parseFloat(result.data.data.values[0][0])*gff)
        context.plantCurrentCircuit[60] = parseFloat(result.data.data.values[0][0])*gff
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
        console.log(cofmax)
        console.log(parseFloat(result.data.data.values[0][0])*gff*cofmax)
        setCurrentPickRisk(parseFloat(result.data.data.values[0][0])*gff*cofmax)
        context.plantCurrentCircuit[65] = parseFloat(result.data.data.values[0][0])*gff*cofmax
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      
 
      
    }).catch(err=>{
      console.log(`Error occurred trying to post circuit form data: ${err}`)
    })

    API.updateUserInfo("/configureplant/gff",{calculationInput:gff}).then(result=>{
      console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)




    }).catch(err=>{
      console.log(`Error occurred trying to post circuit form data: ${err}`)
    })

  

    API.getUserInfo("/configureplant/cr").then(result=>{
      console.log(`Successfullyget user cr info: ${JSON.stringify(result)}`)
      contextUpdate.setCr(result.data.data.values[0][0])
     }).catch(err=>{
      console.log(`Error occurred trying to get cr form data: ${err}`)
    })

    
    API.getUserInfo("/configureplant/lastinspectiondate").then(result=>{
      console.log(`Successfullyget user cr info: ${JSON.stringify(result)}`)
      contextUpdate.setLastInspectionDate(result.data.data.values[0][0])
     }).catch(err=>{
      console.log(`Error occurred trying to get cr form data: ${err}`)
    })


 

  



  

  


  }

  const handleSave2=()=>{

    let newlvl = context.currentlvl
    contextUpdate.setCurrentNewlvl(context.currentlvl)
    console.log("newlvl variable right after it is assigned currentlvl")
    console.log(newlvl)
    console.log("This is the currentlvl variable after being used in newlvl assignment")
    console.log(context.currentlvl)
    
    let count = 0

  
    let trd = context.currenttrd
    let nextinspectiondate = ""
    console.log("Current lvl and new lvl variables:")
    console.log(context.currentlvl)
    console.log(newlvl)
    
   let testArr =[]
   for(let i=0;i<=trd;i+=.0005){
      testArr.push(i)
   }
   console.log("This is the testArr")
   console.log(testArr)

   let categoryMid = 0
   let categoryMidPlusOne =0
//------------------------------------------------
const binarySearch = async (arr)=>{
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var midPointPlusOne = midPoint+1
    var newArr = arr;
    console.log(arr);
    console.log("array midpoint value: " + arr[midPoint]);
    if(length<=1){
      console.log("Array finished")
      context.plantCurrentCircuit[73] = (context.initialtrd-trd)/context.cr
      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      context.plantCurrentCircuit[70] = trd
      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      await API.getUserInfo("/configureplant/nextinspectiondate").then(result=>{
        console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        contextUpdate.setNextInspectionDate(result.data.data.values[0][0])
        nextinspectiondate = result.data.data.values[0][0]
        context.plantCurrentCircuit[75] = nextinspectiondate
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      }).catch(err=>{
        console.log(`Error occurred trying to get circuit form data: ${err}`)
      })
      return arr
    }
    if (categoryMidPlusOne===categoryMid-1) {
      console.log("Jackpot!!! up at the top")
      console.log(categoryMid-1)
      console.log(categoryMidPlusOne)
      context.plantCurrentCircuit[73] = (context.initialtrd-trd)/context.cr
      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      context.plantCurrentCircuit[70] = trd
      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      await API.getUserInfo("/configureplant/nextinspectiondate").then(result=>{
        console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        contextUpdate.setNextInspectionDate(result.data.data.values[0][0])
        nextinspectiondate = result.data.data.values[0][0]
        context.plantCurrentCircuit[75] = nextinspectiondate
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      }).catch(err=>{
        console.log(`Error occurred trying to get circuit form data: ${err}`)
      })

      return categoryMid
    //if newlvl equal to current lvl equal to then take the left hand side of the midpoint
    }
    await API.updateUserInfo("/configureplant/trd",{calculationInput: newArr[midPoint] }).then(result2=>{
      console.log("mid value")
      console.log(newArr[midPoint])
      console.log(`Successfully posted user trd info: ${JSON.stringify(result2)}`)
    }).catch(err=>{
      console.log(`Error occurred trying to post circuit form data: ${err}`)
    })
    console.log("First PoF at midpoint")
    await API.getUserInfo("/configureplant/pof").then(result=>{ 
     console.log(`Successfully retrieved user pof info: ${parseFloat(result.data.data.values[0][0])}`)
     if(((3.06*(10**(-4)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===1000)||(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===1000||cofmax===10000))||(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000||cofmax===10000||cofmax===100000))){
       console.log("newlvl 1")
       console.log(result.data.data.values[0][0])
       console.log(cofmax)
       categoryMid = 1
       console.log(newlvl-context.currentlvl)
        
     }
     else if((((3.06*(10**(-2)))<result.data.data.values[0][0])&&(cofmax===10000000||cofmax===1000000||cofmax===100000))||(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===10000000))||(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===10000000))){
       console.log("newlvl 4")
       console.log(result.data.data.values[0][0])
       console.log(cofmax)
       categoryMid = 4
      //  contextUpdate.setCurrentNewlvl(3)
          
       console.log(newlvl-context.currentlvl)
     }
     else if(((3.06*(10**(-2)))<(result.data.data.values[0][0]))&&(cofmax===1000||cofmax===10000)||(((3.06*(10**(-5)))>=(result.data.data.values[0][0]))&&(cofmax===10000000))||(((3.06*(10**(-5)))<=parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===10000000))||(((3.06*(10**(-3)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000000||cofmax===100000))||((3.06*(10**(-4)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===1000000)){
       console.log("newlvl 3")
       console.log(result.data.data.values[0][0])
       console.log(cofmax)
       categoryMid = 3
       contextUpdate.setCurrentNewlvl(3)
       
       console.log(newlvl-context.currentlvl)
     }    
     else if(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000000)||(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===100000||cofmax===1000000))||(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===100000||cofmax===10000))||(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000||cofmax===10000))){
       console.log("newlvl 2")
       console.log(result.data.data.values[0][0])
       console.log(cofmax)
       categoryMid = 2
        
     }
 
   }).catch(err=>{
     console.log(`Error occurred trying to get user pof  data: ${err}`)
   })
   //--------------------------------------------------
   await API.updateUserInfo("/configureplant/trd",{calculationInput: newArr[midPointPlusOne] }).then(result2=>{
    console.log("midplusone array value")
    console.log(newArr[midPointPlusOne])
    console.log(`Successfully posted user trd info for midplusone: ${JSON.stringify(result2)}`)
  }).catch(err=>{
    console.log(`Error occurred trying to get user pof data: ${err}`)
  })
  console.log("First PoF at midpointplusone")
  await API.getUserInfo("/configureplant/pof").then(result=>{ 
   console.log(`Successfully retrieved user pof info: ${parseFloat(result.data.data.values[0][0])}`)
   if(((3.06*(10**(-4)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===1000)||(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===1000||cofmax===10000))||(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000||cofmax===10000||cofmax===100000))){
     console.log("newlvl 1")
     console.log(result.data.data.values[0][0])
     console.log(cofmax)
     categoryMidPlusOne = 1
     console.log(newlvl-context.currentlvl)
      
   }
   else if(((3.06*(10**(-4)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===10000000)||(((3.06*(10**(-2)))<result.data.data.values[0][0])&&(cofmax===10000000||cofmax===1000000||cofmax===100000))||(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===10000000))||(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===10000000))){
     console.log("newlvl 4")
     console.log(result.data.data.values[0][0])
     console.log(cofmax)
     categoryMidPlusOne = 4
    //  contextUpdate.setCurrentNewlvl(3)
        
     console.log(newlvl-context.currentlvl)
   }
   else if(((3.06*(10**(-2)))<(result.data.data.values[0][0]))&&(cofmax===1000||cofmax===10000)||(((3.06*(10**(-5)))>=(result.data.data.values[0][0]))&&(cofmax===10000000))||(((3.06*(10**(-5)))<=parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===10000000))||(((3.06*(10**(-3)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000000||cofmax===100000))||((3.06*(10**(-4)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===1000000)){
     console.log("newlvl 3")
     console.log(result.data.data.values[0][0])
     console.log(cofmax)
     categoryMidPlusOne = 3
     contextUpdate.setCurrentNewlvl(3)
     
     console.log(newlvl-context.currentlvl)
   }    
   else if(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000000)||(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===100000||cofmax===1000000))||(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===100000||cofmax===10000))||(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000||cofmax===10000))){
     console.log("newlvl 2")
     console.log(result.data.data.values[0][0])
     console.log(cofmax)
     categoryMidPlusOne = 2
      
   }
   
 }).catch(err=>{
   console.log(`Error occurred trying to post circuit form data: ${err}`)
 })
    




    //if newlvl is current lvl +1 then take the right hand side of the midpoint
    if (categoryMidPlusOne===categoryMid-1) {
      console.log("Jackpot!!!")
      console.log(categoryMid-1)
      console.log(categoryMidPlusOne)
      // var newArr = arr.slice(midPoint, arr.length);       
      //   return binarySearch(newArr, searchNumb);
      context.plantCurrentCircuit[73] = (context.initialtrd-trd)/context.cr
      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      context.plantCurrentCircuit[70] = trd
      contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      await API.getUserInfo("/configureplant/nextinspectiondate").then(result=>{
        console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        contextUpdate.setNextInspectionDate(result.data.data.values[0][0])
        nextinspectiondate = result.data.data.values[0][0]
        context.plantCurrentCircuit[75] = nextinspectiondate
        contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
      }).catch(err=>{
        console.log(`Error occurred trying to get circuit form data: ${err}`)
      })
      return categoryMid
    //if newlvl equal to current lvl equal to then take the left hand side of the midpoint
    } else if ((categoryMid === categoryMidPlusOne)&& (categoryMid!==context.currentlvl)) {
      console.log("Right side search")
      console.log(categoryMid)
      console.log(categoryMidPlusOne)
      console.log(arr.length)
      console.log(context.currentlvl)

      var newArr = arr.slice(midPoint, arr.length);
       await binarySearch(newArr);

        //if the pof at the midpoint and the pof at the midpoint +1 are different then that's our target
    } else if((categoryMid === categoryMidPlusOne)&&(categoryMid===context.currentlvl)){
      console.log("Left side search")
      console.log(categoryMid)
      console.log(categoryMidPlusOne)
      console.log(arr.length)
      console.log(context.currentlvl)
      var newArr = arr.slice(0, midPoint);
      await binarySearch(newArr);
    }
   }
   //------------------------------------Old recursion below
  //  const  testfunc= async (n,m,c)=>{













  //     if((n!==m)||c===200){    
  //       console.log("timetimetime")
  //       console.log(c)
  //       console.log((context.initialtrd-trd)/context.cr)
  //       console.log(context.initialtrd)
  //       console.log(trd)
  //       console.log(context.cr)
  //       context.plantCurrentCircuit[73] = (context.initialtrd-trd)/context.cr
  //       contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
  //       context.plantCurrentCircuit[70] = trd
  //       contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
  //       await API.getUserInfo("/configureplant/nextinspectiondate").then(result=>{
  //         console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
  //         contextUpdate.setNextInspectionDate(result.data.data.values[0][0])
  //         nextinspectiondate = result.data.data.values[0][0]
  //         context.plantCurrentCircuit[75] = nextinspectiondate
  //         contextUpdate.currentPlantCircuitSet(context.plantCurrentCircuit)
  //       }).catch(err=>{
  //         console.log(`Error occurred trying to get circuit form data: ${err}`)
  //       })
        
  //       return n
  //     }
  //     count++
  //     console.log("count")
  //     console.log(count)
  //     console.log("newlvl-currentlvl at the top")
  //     console.log((newlvl-context.currentlvl)===0)
  //     console.log("newlvl at the top")
  //     console.log(newlvl)
  //     console.log("current lvl at the top")
  //     console.log(context.currentlvl)
     
  //     if(trd!==null){
  //       console.log("currenttrd")
  //       console.log(trd)
      
  //      await API.updateUserInfo("/configureplant/trd",{calculationInput: parseFloat(trd)-.001}).then(result2=>{
  //         console.log(`Successfully posted user trd info: ${JSON.stringify(result2)}`)

        


          
  //       }).catch(err=>{
  //         console.log(`Error occurred trying to post circuit form data: ${err}`)
  //       })
  //       trd = parseFloat(trd)-.001
  //     }

  //     console.log("CHUCHU")

     
 
   
  //      await API.getUserInfo("/configureplant/pof").then(result=>{
     
  //       console.log(`Successfully retrieved user pof info: ${parseFloat(result.data.data.values[0][0])}`)
        
  //       // if(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000||cofmax===10000||cofmax===100000)){
  //       //   console.log("newlvl 1")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 1
  //       //    testfunc(1,m,c+1)
  //       // }
  //       // else if(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===1000||cofmax===10000)){
  //       //   console.log("newlvl 1")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 1
  //       //   console.log(newlvl-context.currentlvl)
  //       //    testfunc(1,m,c+1)
  //       // }
  //       if(((3.06*(10**(-4)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===1000)||(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===1000||cofmax===10000))||(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000||cofmax===10000||cofmax===100000))){
  //         console.log("newlvl 1")
  //         console.log(result.data.data.values[0][0])
  //         console.log(cofmax)
  //         newlvl = 1
  //         console.log(newlvl-context.currentlvl)
  //          testfunc(1,m,c+1)
  //       }
  //       // else if(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===10000000)){
  //       //   console.log("newlvl 4")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 4
  //       //   console.log(newlvl-context.currentlvl)
  //       //    testfunc(4,m,c+1)
  //       // }
  //       // else if(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===10000000)){
  //       //   console.log("newlvl 4")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 4
  //       //   console.log(newlvl-context.currentlvl)
  //       //    testfunc(4,m,c+1)
  //       // }
  //       // else if(((3.06*(10**(-2)))<result.data.data.values[0][0])&&(cofmax===10000000||cofmax===1000000||cofmax===100000)){
  //       //   console.log("newlvl 4")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 4
  //       //   console.log(newlvl-context.currentlvl)
  //       //    testfunc(4,m,c+1)
  //       // }
  //       else if(((3.06*(10**(-4)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===1000000)||(((3.06*(10**(-2)))<result.data.data.values[0][0])&&(cofmax===10000000||cofmax===1000000||cofmax===100000))||(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===10000000))||(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===10000000))){
  //         console.log("newlvl 4")
  //         console.log(result.data.data.values[0][0])
  //         console.log(cofmax)
  //         newlvl = 4
  //         // newlvl++
  //         contextUpdate.setCurrentNewlvl(3)
  //          testfunc(4,m,c+1)
          
  //         console.log(newlvl-context.currentlvl)
  //       }
  //       // else if(((3.06*(10**(-3)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000000||cofmax===100000)){
  //       //   console.log("newlvl 3")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 3
  //       //   // newlvl++
  //       //   contextUpdate.setCurrentNewlvl(3)
  //       //    testfunc(3,m,c+1)
          
  //       //   console.log(newlvl-context.currentlvl)
  //       // }
  //       // else if(((3.06*(10**(-5)))<=parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===10000000)){
  //       //   console.log("newlvl 3")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 3
  //       //   // newlvl++
  //       //   contextUpdate.setCurrentNewlvl(3)
  //       //    testfunc(3,m,c+1)
          
  //       //   console.log(newlvl-context.currentlvl)
  //       // }
  //       // else if(((3.06*(10**(-5)))>=(result.data.data.values[0][0]))&&(cofmax===10000000)){
  //       //   console.log("newlvl 3")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 3
  //       //   // newlvl++
  //       //   contextUpdate.setCurrentNewlvl(3)
  //       //    testfunc(3,m,c+1)
          
  //       //   console.log(newlvl-context.currentlvl)
  //       // }
  //       else if(((3.06*(10**(-2)))<(result.data.data.values[0][0]))&&(cofmax===1000||cofmax===10000)||(((3.06*(10**(-5)))>=(result.data.data.values[0][0]))&&(cofmax===10000000))||(((3.06*(10**(-5)))<=parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===10000000))||(((3.06*(10**(-3)))<parseFloat(result.data.data.values[0][0]))&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000000||cofmax===100000))){
  //         console.log("newlvl 3")
  //         console.log(result.data.data.values[0][0])
  //         console.log(cofmax)
  //         newlvl = 3
  //         // newlvl++
  //         contextUpdate.setCurrentNewlvl(3)
  //          testfunc(3,m,c+1)
          
  //         console.log(newlvl-context.currentlvl)
  //       }
  //       // else if(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000||cofmax===10000)){
  //       //   console.log("newlvl 2")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 2
  //       //    testfunc(2,m,c+1)
  //       // }
  //       // else if(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===100000||cofmax===10000)){
  //       //   console.log("newlvl 2")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 2
  //       //    testfunc(2,m,c+1)
  //       // }
  //       // else if(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===100000||cofmax===1000000)){
  //       //   console.log("newlvl 2")
  //       //   console.log(result.data.data.values[0][0])
  //       //   console.log(cofmax)
  //       //   newlvl = 2
  //       //    testfunc(2,m,c+1)
  //       // }
  //       else if(((3.06*(10**(-5)))>=result.data.data.values[0][0])&&(cofmax===1000000)||(((3.06*(10**(-5)))<=result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-4))))&&(cofmax===100000||cofmax===1000000))||(((3.06*(10**(-4)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-3))))&&(cofmax===100000||cofmax===10000))||(((3.06*(10**(-3)))<result.data.data.values[0][0])&&(result.data.data.values[0][0]<(3.06*(10**(-2))))&&(cofmax===1000||cofmax===10000))){
  //         console.log("newlvl 2")
  //         console.log(result.data.data.values[0][0])
  //         console.log(cofmax)
  //         newlvl = 2
  //          testfunc(2,m,c+1)
  //       }
        


  //       console.log("newlvl-currentlvl at the bottom")
  //       console.log((newlvl-context.currentlvl<1))
   
        
  //     }).catch(err=>{
  //       console.log(`Error occurred trying to post circuit form data: ${err}`)
  //     })


   

       
  //     // await API.getUserInfo("/configureplant/trd").then(result3=>{
  //     //   console.log(`Successfully retrieved minimum trd: ${JSON.stringify(result3)}`)
        
  //     // }).catch(err=>{
  //     //   console.log(`Error occurred trying to post circuit form data: ${err}`)
  //     // })
      

  //     // newlvl++
  //     console.log("newlvl after the get api call")
  //     console.log(newlvl)
  //     // console.log(context.newlvl)

    
  //  }

    // const testfuncresult = testfunc(newlvl,context.currentlvl,0)
    // console.log("testfuncresult")
    // console.log(testfuncresult)
    // console.log("This is the new lvl after finishing the while loop")
    // console.log(newlvl)
    // console.log("This is the currentlvl after finishing the while loop")
    // console.log(context.currentlvl)

    const binarySearchResults = binarySearch(testArr)
    console.log("binarySearch result")
    console.log(binarySearchResults)


   

  }

  const handleSave3=()=>{



    const testfunc2 = async ()=>{
      await API.postUserInfo("/configureplant/circuitform",{circuitLvlRow:context.plantCurrentCircuit}).then(result=>{
        console.log(`Successfully posted user circuit info: ${JSON.stringify(result)}`)
        
      }).catch(err=>{
        console.log(`Error occurred trying to post circuit form data: ${err}`)
      })
  
    }
   
    testfunc2()

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
        <Box
          sx={{
            padding: '15px 30px',
          }}
          display="flex"
          alignItems="center"
        >
          <Grid container >
            <Grid item xs={12} sm={6} lg={6} style={{textAlign:"center"}}>
           
              Inputs
         
            </Grid>
            <Grid item xs={12} sm={6} lg={6} style={{textAlign:"center"}}>
           
              Calculations
          
            </Grid>
          </Grid>
       
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: '30px',
          }}
        >
          <form>

            <Grid container>
              <Grid item xs={12} sm={5} lg={5} >
              <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Plant 
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Plant"
              name = "Plant"
              variant="outlined"
              defaultValue={context.plantCurrentAsset[0]}
              fullWidth
              required
              size="small"
        
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Plant Area
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Plant Area"
              name = "Plant Area"
              variant="outlined"
              defaultValue={context.plantCurrentAsset[1]}
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Asset ID
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Asset ID"
              name = "Asset ID"
              variant="outlined"
              defaultValue={context.plantCurrentAsset[2]}
              fullWidth
              required
              size="small"
        
            />
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="success-input"
            >
              Equipment Type
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Equipment Type"
              name = "Equipment Type"
              variant="outlined"
              defaultValue={context.plantCurrentAsset[3]}
              fullWidth
              required
              size="small"
        
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
               Asset Description
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Asset Description"
              name = "Asset Description"
              variant="outlined"
              defaultValue={context.plantCurrentAsset[4]}
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Circuit
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Circuit"
              name = "Circuit"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel htmlFor="demo-simple-select">Circuit Type</CustomFormLabel>
              <CustomSelect
                labelId="Circuit Type"
                name = "Circuit Type"
                id="Circuit Type"
                value={currentPick}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist3.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Circuit Type" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              <CustomFormLabel htmlFor="demo-simple-select">Pr P1</CustomFormLabel>
              <CustomSelect
                labelId="Pr P1"
                name ="Pr P1"
                id="Pr P1"
                value={currentPickPrP1}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {prpx[1].map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    
                        [<ListSubheader>{prpx[0][index]}</ListSubheader>,
                        <MenuItem name="Pr P1" value={item}>{item}</MenuItem>]

                   
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              <CustomFormLabel htmlFor="demo-simple-select">Pr P2</CustomFormLabel>
              <CustomSelect
                labelId="Pr P2"
                name ="Pr P2"
                id="Pr P2"
                value={currentPickPrP2}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {prpx[2].map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    
                    [<ListSubheader>{prpx[0][index]}</ListSubheader>,

                    <MenuItem name="Pr P2" value={item}>{item}</MenuItem>]

                                          
                    
                  )
                  }
                })}
              
              </CustomSelect>
              <CustomFormLabel htmlFor="demo-simple-select">Pr P3</CustomFormLabel>
              <CustomSelect
                labelId="Pr P3"
                name ="Pr P3"
                id="Pr P3"
                value={currentPickPrP3}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {prpx[3].map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    
                    [<ListSubheader>{prpx[0][index]}</ListSubheader>,

                    <MenuItem name="Pr P3" value={item}>{item}</MenuItem>]

                  
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              <CustomFormLabel htmlFor="demo-simple-select">Co P1</CustomFormLabel>
              <CustomSelect
                labelId="Co P1"
                name ="Co P1"
                id="Co P1"
                value={currentPickCoP1}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {copx[1].map((item,index)=>{
                  if(index!==0){
                  return(

                   
                      [<ListSubheader>{copx[0][index]}</ListSubheader>,
                      <MenuItem name="Co P1" value={item}>{item}</MenuItem>]
                   
                    
                    
                    
                  )
                  }
                })}
                
              </CustomSelect>
              <CustomFormLabel htmlFor="demo-simple-select">Co P2</CustomFormLabel>
              <CustomSelect
                labelId="Co P2"
                name ="Co P2"
                id="Co P2"
                value={currentPickCoP2}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {copx[2].map((item,index)=>{
                  if(index!==0){
                  return(
                    
                   
                    [<ListSubheader>{copx[0][index]}</ListSubheader>,
                    <MenuItem name="Co P2" value={item}>{item}</MenuItem>]
                   
                    
                  )
                  }
                })}
              
              </CustomSelect>
              
              <CustomFormLabel htmlFor="demo-simple-select">Co P3</CustomFormLabel>
              <CustomSelect
                labelId="Co P3"
                name ="Co P3"
                id="Co P3"
                value={currentPickCoP3}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {copx[3].map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    [<ListSubheader>{copx[0][index]}</ListSubheader>,
                    <MenuItem name="Co P3" value={item}>{item}</MenuItem>]
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>

{/* 
              <CustomFormLabel htmlFor="demo-simple-select">YS</CustomFormLabel>
              <CustomSelect
                labelId="YS"
                name ="YS"
                id="YS"
                value={currentPickYS}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist1.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    [<ListSubheader>{item[0]}</ListSubheader>,
                    <MenuItem name="YS" value={item[3]}>{item[3]}</MenuItem>]
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>

              <CustomFormLabel htmlFor="demo-simple-select">TS</CustomFormLabel>
              <CustomSelect
                labelId="TS"
                name ="TS"
                id="TS"
                value={currentPickTS}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist1.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    [<ListSubheader>{item[0]}</ListSubheader>,
                    <MenuItem name="YS" value={item[4]}>{item[4]}</MenuItem>]
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>

              <CustomFormLabel htmlFor="demo-simple-select">S</CustomFormLabel>
              <CustomSelect
                labelId="S"
                name ="S"
                id="S"
                value={currentPickS}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist1.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    [<ListSubheader>{item[0]}</ListSubheader>,
                    <MenuItem name="YS" value={item[5]}>{item[5]}</MenuItem>]
                    
                    
                  )
                  }
                })}
              
              </CustomSelect> */}

              <CustomFormLabel htmlFor="demo-simple-select">Alpha</CustomFormLabel>
              <CustomSelect
                labelId="Alpha"
                name ="Alpha"
                id="Alpha"
                value={currentPickAlpha}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {alpha.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                    [<ListSubheader>{item[0]}</ListSubheader>,
                    <MenuItem name="Alpha" value={item[1]}>{item[1]}</MenuItem>]
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
             
              
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Circuit Description
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Circuit Description"
              name = "Circuit Description"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CoF Health/Safety
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="CoF Health/Safety"
              name = "CoF Health/Safety"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
               <CustomSelect
                labelId="CoF Health/Safety"
                name ="CoF Health/Safety"
                id="CoF Health/Safety"
                value={healthsafety}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {health.map((item,index)=>{
                  
                  return(
                    
                    
                        [
                        <MenuItem name="CoF Health/Safety" value={item}>{item}</MenuItem>]

                   
                    
                    
                  )
                  
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CoF Environmental
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="ENVI."
              name = "ENVI."
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
               <CustomSelect
                labelId="CoF Environmental"
                name ="CoF Environmental"
                id="CoF Environmental"
                value={environmental}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {envi.map((item,index)=>{
                  
                  return(
                    
                    
                        [
                        <MenuItem name="CoF Environmental" value={item}>{item}</MenuItem>]

                   
                    
                    
                  )
                  
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CoF Economic
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="ECO."
              name = "ECO."
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
            <CustomSelect
                labelId="CoF Economic"
                name ="CoF Economic"
                id="CoF Economic"
                value={economic}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {econ.map((item,index)=>{
                  
                  return(
                    
                    
                        [
                        <MenuItem name="CoF Economic" value={item}>{item}</MenuItem>]

                   
                    
                    
                  )
                  
                })}
              
            </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                PID
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="PID"
              name = "PID"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                System
            </CustomFormLabel>
            <CustomSelect
                labelId="System"
                name = "System"
                id="System"
                value={currentPickSystem}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist4.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="System" value={item[2]}>{item[2]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Stream #
            </CustomFormLabel>
            <CustomSelect
                labelId="Stream #"
                name = "Stream #"
                id="Stream #"
                value={currentPickStream}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist5.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Stream #" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Stream Description
            </CustomFormLabel>
            <CustomSelect
                labelId="Stream Description"
                name = "Stream Description"
                id="Stream Description"
                value={currentPickStreamDescription}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist5.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Stream Description" value={item[1]}>{item[1]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Vapor/Liquid Ratio
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Vapor/Liquid Ratio"
              name = "Vapor/Liquid Ratio"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Manufacturer
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Manufacturer"
              name = "Manufacturer"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Serial #
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Serial #"
              name = "Serial #"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                In-Service Date
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="In-Service Date"
              name = "In-Service Date"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                General Material
            </CustomFormLabel>
            <CustomSelect
                labelId="General Material"
                name = "General Material"
                id="General Material"
                value={generalMaterial}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist1.map((item,index)=>{
                    if(index!==0){                   
                      if(!picklist1filtered.includes(item[0])){
                        picklist1filtered.push(item[0])
                        return(
                        
                          <MenuItem key={index} name="General Material" value={item[0]}>{item[0]}</MenuItem>
                        
                        
                        )
                      }
                    }
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Specific Material
            </CustomFormLabel>
            <CustomSelect
                labelId="Specific Material"
                name = "Specific Material"
                id="Specific Material"
                value={specificMaterial}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist1.map((item,index)=>{
                  if(index!==0){
                    if(!picklist1filtered2.includes(item[1])){
                      picklist1filtered2.push(item[1])
                      return(
                      
                        <MenuItem key={index} name="Specific Material" value={item[1]}>{item[1]}</MenuItem>
                      
                      
                      )
                    }
                  }
                })}
              
              </CustomSelect>
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Insulation 
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Insulation "
              name = "Insulation "
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                PWHT
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="PWHT"
              name = "PWHT"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Lining
            </CustomFormLabel>
            {/* <CustomSelect
                labelId="Lining"
                name = "Lining"
                id="Lining"
                value={currentPickLining}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist1.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Lining" value={item[1]}>{item[1]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect> */}
              <CustomTextField
              onChange={handleChange}
              value={currentPickLining}
              labelId="Lining"
              name = "Lining"
              id="Lining"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Cladding
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Cladding"
              name = "Cladding"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Design Pressure
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Design Pressure"
              name = "Design Pressure"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Design Temperature
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Design Temperature"
              name = "Design Temperature"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Operating Pressure
            </CustomFormLabel>
            <CustomTextField
              onChange={handleChange}
              id="Operating Pressure"
              name = "Operating Pressure"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Operating Temperature In
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Operating Temperature In"
              name = "Operating Temperature In"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Operating Temperature Out
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Operating Temperature Out"
              name = "Operating Temperature Out"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Length
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Length"
              name = "Length"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Inner Diameter
            </CustomFormLabel>
            <CustomTextField
              onChange={handleChange}
              id="Inner Diameter"
              name = "Inner Diameter"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Outer Diameter
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Outer Diameter"
              name = "Outer Diameter"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Original Thickness
            </CustomFormLabel>
            <CustomTextField
              onChange={handleChange}
              id="Original Thickness"
              name = "Original Thickness"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Corrosion Allowance
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Corrosion Allowance"
              name = "Corrosion Allowance"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Join Efficiency
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Join Efficiency"
              name = "Join Efficiency"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
                <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Last Inspection Date
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Last Inspection Date"
              name = "Last Inspection Date"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                In-Service Date
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="In-Service Date"
              name = "In-Service Date"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Reduce Repair Rate
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Reduce Repair Rate"
              name = "Reduce Repair Rate"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Estimated Repair Time
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Estimated Repair Time"
              name = "Estimated Repair Time"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Dead LEG
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Dead Leg"
              name = "Dead Leg"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                IP/MP
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="IP/MP"
              name = "IP/MP"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                SA
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="SA"
              name = "SA"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                NPS
            </CustomFormLabel>
            <CustomTextField

              onChange={handleChange}
              id="NPS"
              name = "NPS"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Notes
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Notes"
              name = "Notes"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Damage Mechanism 1
            </CustomFormLabel>
            <CustomSelect
                labelId="Damage Mechanism 1"
                name = "Damage Mechanism 1"
                id="Damage Mechanism 1"
                value={damageMechanism1}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist7.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Damage Mechanism 1" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Damage Type 1
            </CustomFormLabel>
            <CustomSelect
                labelId="Damage Type 1"
                name = "Damage Type 1"
                id="Damage Type 1"
                value={damageType1}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist6.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Damage Type 1" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
       
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CR-Susceptibility 1
            </CustomFormLabel>
            <CustomTextField
              onChange={handleChange}
              id="CR-Susceptibility 1"
              name = "CR-Susceptibility 1"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CR-Susceptibility Type-Source 1
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="CR-Susceptibility Type-Source 1"
              name = "CR-Susceptibility Type-Source 1"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Damage Mechanism 2
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Damage Mechanism 2"
              name = "Damage Mechanism 2"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
             <CustomSelect
                labelId="Damage Mechanism 2"
                name = "Damage Mechanism 2"
                id="Damage Mechanism 2"
                value={damageMechanism2}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist7.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Damage Mechanism 2" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Damage Type 2
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Damage Type 2"
              name = "Damage Type 2"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
              <CustomSelect
                labelId="Damage Type 2"
                name = "Damage Type 2"
                id="Damage Type 2"
                value={damageType2}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist6.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Damage Type 2" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
              
          
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CR-Susceptibility Type-Source 2
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="CR-Susceptibility Type-Source 2"
              name = "CR-Susceptibility Type-Source 2"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Damage Mechanism 3
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Damage Mechanism 3"
              name = "Damage Mechanism 3"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
              <CustomSelect
                labelId="Damage Mechanism 3"
                name = "Damage Mechanism 3"
                id="Damage Mechanism 3"
                value={damageMechanism3}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist7.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Damage Mechanism 3" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Damage Type 3
            </CustomFormLabel>
            {/* <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="Damage Type 3"
              name = "Damage Type 3"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            /> */}
              <CustomSelect
                labelId="Damage Type 3"
                name = "Damage Type 3"
                id="Damage Type 3"
                value={damageType3}
                onChange={handleChange}

                fullWidth
                size="small"
              >
                {picklist6.map((item,index)=>{
                  if(index!==0){
                  return(
                    
                      <MenuItem key={index} name="Damage Type 3" value={item[0]}>{item[0]}</MenuItem>
                    
                    
                  )
                  }
                })}
              
              </CustomSelect>
             
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CR-Susceptibility 3
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="CR-Susceptibility 3"
              name = "CR-Susceptibility 3"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                 CR-Susceptibility 3 Type-Source 3
            </CustomFormLabel>
            <CustomTextField
              onChange={handleInputChangeCircuitWorksheet}
              id="CR-Susceptibility 3 Type-Source 3"
              name = "CR-Susceptibility 3 Type-Source 3"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
             
              </Grid>
              <Grid item xs={0} sm={2} lg={2}>

              </Grid>
              <Grid item xs={12} sm={5} lg={5}>
              <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                DF Cracking
            </CustomFormLabel>
            <CustomTextField
              value={"N/A"}
              id="DF Cracking"
              name = "DF Cracking"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                DF Thinning
            </CustomFormLabel>
            <CustomTextField
              value={dfthinning}
              id="DF Thinning"
              name = "DF Thinning"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                PoF 
            </CustomFormLabel>
            <CustomTextField
              value={pof}
              id="PoF 1"
              name = "PoF 1"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
           
            <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                GFF
            </CustomFormLabel>
            <CustomTextField
              
              id="GFF"
              name = "GFF"
              variant="outlined"
              value={gff}
              fullWidth
              required
              size="small"
              
            />
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                DF Total
            </CustomFormLabel>
            <CustomTextField
              value={dfthinning}
              id="DF Total"
              name = "DF Total"
              variant="outlined"
              fullWidth
              required
              size="small"
              
            />
             
         
             
             
             
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                CoF Max
            </CustomFormLabel>
            <CustomTextField
              
              id="CoF Max"
              name = "CoF Max"
              variant="outlined"
              value={cofmax}
              fullWidth
              required
              size="small"
              
            />
             <CustomFormLabel 
              sx={{
                mt: 0,
              }}>
                Risk 
            </CustomFormLabel>
            <CustomTextField
              
              id="Risk Total"
              name = "Risk Total"
              variant="outlined"
              value={risk}
              fullWidth
              required
              size="small"
              
            />
     
            
              </Grid>
            </Grid>
            
             
        
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
                    onClick={handleClick1}
                    variant="contained"
                    color="secondary"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                    }}
                  >
                    Back to Plant
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleAddNewCircuitClick}
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                   Add New Circuit
                  </Button>
                  <Button
                    onClick={handleClick2}
                    variant="contained"
                    color="info"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                    Add New CML
                  </Button>
                
             </Box>
            <div style={{height:10}}>

            </div>
            <div>
              {/* <Button color="primary" variant="contained" onClick={handleSave} >
                Calculate
              </Button> */}
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
                    onClick={handleSave}
                    variant="contained"
                    color="secondary"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                    }}
                  >
                    Calculate Risk
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSave2}
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: 1,
                    }}
                  >
                   Calculate Next Inspection Date
                  </Button>
                
                
             </Box>
            </div>
            <div style={{height:10}}>

            </div>
            <div>
              <Button color="danger" variant="contained" onClick={handleSave3} >
                Save 
              </Button>
            </div>
      
          
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbCircuit;
