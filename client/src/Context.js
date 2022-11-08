import React, {useContext,useState} from "react"
// import { RowContext } from "./views/form-layouts/FormLayouts";
import { useAuth0 } from '@auth0/auth0-react';
const Context = React.createContext()
const UpdateContext = React.createContext()


//custom hook
export function useGlobalContext(){
    return useContext(Context)
}
//custom hook
export function useGlobalContextUpdates(){
    return useContext(UpdateContext)
}
export function ContextProvider({children}){
    const [data, setData] = React.useState(null);
    const [currentPlant,setCurrentPlant] = React.useState(Array(4).fill(null))
    const [currentPlantArea,setCurrentPlantArea] = React.useState(Array(5).fill(null))
    const [currentPlantAsset,setCurrentPlantAsset] = React.useState(Array(7).fill(null))
    const [currentPlantCircuit,setCurrentPlantCircuit] = useState(Array(70).fill(null))
    const [currentPlantCml,setCurrentPlantCml] = useState(Array(17).fill(null))
    const [currentCoP1,setCurrentCoP1] = useState()
    const [currentCoP2,setCurrentCoP2] = useState()
    const [currentCoP3,setCurrentCoP3] = useState()
    const [currentPrP1,setCurrentPrP1] = useState()
    const [currentPrP2,setCurrentPrP2] = useState()
    const [currentPrP3,setCurrentPrP3] = useState()
    


    const [databaseHasData,setDatabaseHasData] = React.useState(true)
    const [equipmentType,setEquipmentType] = React.useState("")
    const [tableB,setTableB] = useState(Array(4).fill(null))
    const [tableD,setTableD] = useState(Array(2).fill(null))
    const [tableE,setTableE] = useState(Array(2).fill(null))
    const [tableF,setTableF] = useState(Array(2).fill(null))
    const [tableA,setTableA] = useState(Array(2).fill(null))
    const [tableC,setTableC] = useState(Array(6).fill(null))
    //create an array representing a row and pass it down to each form as a prop. Each change will effect the array and when your
    const [rowBeingCreated,setRowBeingCreated] = React.useState(Array(11).fill(null))
    const [addPlant,setAddPlant] = React.useState(true)
    const [addAsset,setAddAsset] = React.useState(false)
    const [addCircuit,setAddCircuit] = React.useState(false)
    const [input,setInput] = useState()
    const [plantFormArray,setPlantFormArray] = useState(Array(11).fill(null))
    const [dashboardview,setDashboardView] = useState("Circuits")
    const [dashboarddata,setDashboardData] = useState(null)
    const [currentasset,setCurrentAsset] = useState("")
    const [circuitnumber,setCircuitNumber] = useState({nine:0,ten:0,eleven:0,twelve:0,thirteen:0,seventeen:0,eighteen:0,nineteen:0,twenty:0,twentyone:0,twentyfive:0,twentysix:0,twentyseven:0,twentyeight:0,twentynine:0,thirtythree:0,thirtyfour:0,thirtyfive:0,thirtysix:0,thirtyseven:0,fourtyone:0,fourtytwo:0,fourtythree:0,fourtyfour:0,fourtyfive:0})
    const [currentPlantName,setCurrentPlantName] = useState("")
    const [currenttrd,setCurrentTrd] = useState("")
    const [initialtrd,setInitialTrd] = useState("")
    const [currentlvl,setCurrentLvl] = useState(0)
    const [newlvl,setCurrentNewlvl] = useState(0)
    const [cr,setCr] = useState(0)
    const [lastinspectiondate,setLastInspectionDate] = useState("")
    const [nextinspectiondate,setNextInspectionDate] = useState("")
    const [cofmax,setCurrentPickCoFMax] = useState(0)
    // React.useEffect(() => {
  
    //   API.getUserInfo("/dashboards/dashboard1").then(res=>{
    //     console.log(`This is the response from the get request: ${res.data.values}`)
    //     setData(res.data.values)
    //   })
    //   // fetch("/api")
    //   //   .then((res) => res.json())
    //   //   .then((data) => setData(data.message));
    // }, []);
  
  
    // const handleAddAssetClick=()=>{
    //   const auth = new google.auth.GoogleAuth({
    //     keyFile: "credentials.json",
    //     scopes: "https://www.googleapis.com/auth/spreadsheets"
    // })
    // const client = await auth.getClient()
    // const spreadsheetID= "14F8Yzrj_kFqpBycN8-MbzjoBE65OM_1Tkcb5bgeTM9I"
    // const googleSheets = google.sheets({version:"v4", auth:client})
    // const getRows = await googleSheets.spreadsheets.values.append({
    //           auth:auth,
    //           spreadsheetId:spreadsheetID,
    //           range: "MEL",
    //           valueInputOption:"USER_ENTERED",
    //           resource:{
    //             values:[]
    //           }
    // })
    // res.json(getRows.data)
    // }
  
  
    const handleClickSave=(event)=>{
      // event.preventDefault()
      // setRowBeingCreated(e)
    }
  
  
  
    // const handleAddCircuitClick=()=>{
    //   const auth = new google.auth.GoogleAuth({
    //     keyFile: "credentials.json",
    //     scopes: "https://www.googleapis.com/auth/spreadsheets"
    // })
    // const client = await auth.getClient()
    // const spreadsheetID= "14F8Yzrj_kFqpBycN8-MbzjoBE65OM_1Tkcb5bgeTM9I"
    // const googleSheets = google.sheets({version:"v4", auth:client})
    // const getRows = await googleSheets.spreadsheets.values.append({
    //           auth:auth,
    //           spreadsheetId:spreadsheetID,
    //           range: "MEL",
    //           valueInputOption:"USER_ENTERED",
    //           resource:{
    //             values:[]
    //           }
    // })
    // res.json(getRows.data)
    // }


    // const handleSetRow=()=>{
    //     setRowBeingCreated()
    // }

    const handleInputChange2=(event)=>{
        // console.log(event.target)
        const value = event.target.value
        const name = event.target.name
        switch(name){
          case "Plant Name":
            plantFormArray[0] = event.target.value
            setPlantFormArray = plantFormArray
            break;
          
      
        }
        
    }
    const handleFormSubmit = (event)=>{
          event.preventDefault()
          //Create logic to change menu item array and dashboard information using the form object
    }


    const damageFactorCalculationThinning=()=>{

    }

    const useContextValues = {row:rowBeingCreated,plant:addPlant, asset:addAsset, circuit:addCircuit, databaseData:data,plantArray:plantFormArray,databaseDataExistsValue:databaseHasData,plantCurrent:currentPlant,plantCurrentArea:currentPlantArea,plantCurrentAsset:currentPlantAsset,plantCurrentCircuit:currentPlantCircuit,plantCurrentCml:currentPlantCml,tableA:tableA,tableB:tableB,tableC:tableC,tableD:tableD,tableE:tableE,tableF:tableF,currentCoP1,currentCoP2,currentCoP3,currentPrP1,currentPrP2,currentPrP3,dashboardview,dashboarddata,currentasset,circuitnumber,currentPlantName,currenttrd,currentlvl,newlvl,initialtrd,cr,lastinspectiondate,nextinspectiondate,cofmax}
    const useContextFunctions = {setDatabaseData:setData,formSubmit:handleFormSubmit,inputChange:handleInputChange2,updateRow:setRowBeingCreated,databaseDataExists:setDatabaseHasData,currentPlantSet:setCurrentPlant,currentPlantAreaSet:setCurrentPlantArea,currentPlantAssetSet:setCurrentPlantAsset,currentPlantCircuitSet:setCurrentPlantCircuit,currentPlantCmlSet:setCurrentPlantCml,setTableA:setTableA,setTableB:setTableB,setTableC:setTableC,setTableD:setTableD,setTableE:setTableE,setTableF:setTableF,setCurrentCoP1,setCurrentCoP2,setCurrentCoP3,setCurrentPrP1,setCurrentPrP2,setCurrentPrP3,setDashboardView,setDashboardData,setCurrentAsset,setCircuitNumber,setCurrentPlantName,setCurrentTrd,setCurrentLvl,setCurrentNewlvl,setInitialTrd,setCr,setLastInspectionDate,setNextInspectionDate,setCurrentPickCoFMax}
    const useCalculations = {damageFactorCalculationThinning}

    return(

        <Context.Provider value={useContextValues}>
            <UpdateContext.Provider value={useContextFunctions}>
                {children}
            </UpdateContext.Provider>
          
        </Context.Provider>
    )

}
  