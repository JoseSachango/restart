import { MatrixSquare } from './MatrixSquare.js'
import { SquareContent } from './SquareContent.js'
import { useGlobalContext,useGlobalContextUpdates } from '../../Context.js'
import  React from 'react'
/** Styling properties applied to the board element */
const boardStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor:"blue"
 
}
/** Styling properties applied to each square element */
const squareStyle = { width: '12.5%', height: '12.5%', backgroundColor:"grey" }
/**
 * The chessboard component
 * @param props The react props
 */
export const Matrix = (props) => {
  const circuitnumber = {nine:0,ten:0,eleven:0,twelve:0,thirteen:0,seventeen:0,eighteen:0,nineteen:0,twenty:0,twentyone:0,twentyfive:0,twentysix:0,twentyseven:0,twentyeight:0,twentynine:0,thirtythree:0,thirtyfour:0,thirtyfive:0,thirtysix:0,thirtyseven:0,fourtyone:0,fourtytwo:0,fourtythree:0,fourtyfour:0,fourtyfive:0}
  let count = 0
  let nine = 0
  let ten = 0
  let eleven = 0
  let twelve = 0
  const context = useGlobalContext()
  const updateContext = useGlobalContextUpdates()

  // console.log("database data below in matrix component")
  // console.log(context.dashboarddata)
  if(context.dashboarddata){
    console.log("marker5555")
    // console.log(context.databaseData.circuit2.data.values)
    console.log(context.dashboarddata)
    console.log("Testtest5555")
    for(let i=1;i<context.dashboarddata.length;i++){
      console.log("l")
      if(context.dashboarddata[i][3]===context.currentasset&&context.dashboarddata[i][0]===context.currentPlantName){
        count++
        if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==1000){
          console.log("HHHHHH")
          circuitnumber.nine=circuitnumber.nine+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==1000){
          circuitnumber.seventeen=circuitnumber.seventeen+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==1000){
          circuitnumber.eighteen=circuitnumber.eighteen+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==1000){
          circuitnumber.nineteen=circuitnumber.nineteen+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.twenty=circuitnumber.twenty+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==10000){
          circuitnumber.twentyone=circuitnumber.twentyone+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==10000){
          circuitnumber.twentyfive=circuitnumber.twentyfive+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==10000){
          circuitnumber.twentysix=circuitnumber.twentysix+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.twentyseven=circuitnumber.twentyseven+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==100000){
          circuitnumber.twentyeight=circuitnumber.twentyeight+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==100000){
          circuitnumber.twentynine=circuitnumber.twentynine+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==100000){
          circuitnumber.thirtythree=circuitnumber.thirtythree+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.thirtyfour=circuitnumber.thirtyfour+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==1000000){
          circuitnumber.thirtyfive=circuitnumber.thirtyfive+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==1000000){
          circuitnumber.thirtysix=circuitnumber.thirtysix+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==1000000){
          circuitnumber.thirtyseven=circuitnumber.thirtyseven+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.fourtyone=circuitnumber.fourtyone+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==10000000){
          circuitnumber.fourtytwo=circuitnumber.fourtytwo+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==10000000){
          circuitnumber.fourtythree=circuitnumber.fourtythree+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==10000000){
          circuitnumber.fourtyfour=circuitnumber.fourtyfour+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.fourtyfive=circuitnumber.fourtyfive+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==10000){
          // console.log("top2")
          circuitnumber.ten=circuitnumber.ten+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==100000){
          // console.log("top3")
  
          circuitnumber.eleven=circuitnumber.eleven+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==1000000){
          // console.log("top4")
  
          circuitnumber.twelve=circuitnumber.twelve+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==10000000){
          // console.log("top5")
  
          circuitnumber.thirteen=circuitnumber.thirteen+1
        }
      }else if("Plant Level"===context.currentasset&&context.dashboarddata[i][0]===context.currentPlantName){
        if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==1000){
          console.log("HHHHHH")
          circuitnumber.nine=circuitnumber.nine+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==1000){
          circuitnumber.seventeen=circuitnumber.seventeen+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==1000){
          circuitnumber.eighteen=circuitnumber.eighteen+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==1000){
          circuitnumber.nineteen=circuitnumber.nineteen+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.twenty=circuitnumber.twenty+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==10000){
          circuitnumber.twentyone=circuitnumber.twentyone+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==10000){
          circuitnumber.twentyfive=circuitnumber.twentyfive+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==10000){
          circuitnumber.twentysix=circuitnumber.twentysix+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.twentyseven=circuitnumber.twentyseven+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==100000){
          circuitnumber.twentyeight=circuitnumber.twentyeight+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==100000){
          circuitnumber.twentynine=circuitnumber.twentynine+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==100000){
          circuitnumber.thirtythree=circuitnumber.thirtythree+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.thirtyfour=circuitnumber.thirtyfour+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==1000000){
          circuitnumber.thirtyfive=circuitnumber.thirtyfive+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==1000000){
          circuitnumber.thirtysix=circuitnumber.thirtysix+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==1000000){
          circuitnumber.thirtyseven=circuitnumber.thirtyseven+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.fourtyone=circuitnumber.fourtyone+1
        }else if(((1*(10**(-1)))>context.dashboarddata[i][60]>(1*(10**(-2))))&&context.dashboarddata[i][64]==10000000){
          circuitnumber.fourtytwo=circuitnumber.fourtytwo+1
        }else if(((1*(10**(-2)))>context.dashboarddata[i][60]>(1*(10**(-3))))&&context.dashboarddata[i][64]==10000000){
          circuitnumber.fourtythree=circuitnumber.fourtythree+1
        }else if(((1*(10**(-3)))>context.dashboarddata[i][60]>(1*(10**(-4))))&&context.dashboarddata[i][64]==10000000){
          circuitnumber.fourtyfour=circuitnumber.fourtyfour+1
        }else if(((1*(10**(-4)))>context.dashboarddata[i][60])&&context.dashboarddata[i][64]==1000){
          circuitnumber.fourtyfive=circuitnumber.fourtyfive+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==10000){
          // console.log("top2")
          circuitnumber.ten=circuitnumber.ten+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==100000){
          // console.log("top3")
  
          circuitnumber.eleven=circuitnumber.eleven+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==1000000){
          // console.log("top4")
  
          circuitnumber.twelve=circuitnumber.twelve+1
        }else if(context.dashboarddata[i][60]>(1*(10**(-1)))&&context.dashboarddata[i][64]==10000000){
          // console.log("top5")
  
          circuitnumber.thirteen=circuitnumber.thirteen+1
        }
      }
  
    }

    
    // console.log(`This is the number of ${context.currentasset}'s there are in the circuit worksheet: ${count}`)
    // console.log(JSON.stringify(circuitnumber))
    // updateContext.setCircuitNumber(circuitnumber)
  }
 
  function renderSquare(i) {
    const x = i % 4
    const y = Math.floor(i / 6)
    return (
      
        <MatrixSquare x={x} y={y} key={i} style={squareStyle}>
          {/**You need a global app object that keeps track of what x and y the probability of failure are located and if they match the same coordinates on the matrix the return true-> x===object.x && y===object.y */}
          <SquareContent  tr={i} lvl={"rand"} mid={"true"} cn={circuitnumber}>

          </SquareContent>
              
          
          {/**Place correct calculations values here. ie component with correct calculation value. */}
        </MatrixSquare>
     
    )
  }
  const squares = []


  
  for (let i = 0; i < 72; i += 1) {
    // figure out how to create a 6x4 matrix as opposed to a 3x8 matrix
    
    squares.push(renderSquare(i))
  
  }


    return (

      
        squares
      
     
       
       
   
    )
}