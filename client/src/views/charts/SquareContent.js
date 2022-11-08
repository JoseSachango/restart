
import { SquareValue } from './SquareContentValue.js'
import { Grid } from '@mui/material'
import { useGlobalContext,useGlobalContextUpdates } from '../../Context.js'

export const SquareContent = ({lvl,tr,mid,cn}) => {

    const context = useGlobalContext()
    const updateContext = useGlobalContextUpdates()

    // return(
    //   <SquareValue/>
    // )

    
  

 
        switch(tr){
            case 0:
                return(
                    <SquareValue id={0} lvl={false} mid={false} >
                        
                    </SquareValue>
                )
                // return(
                //     <div>
                        
                //     </div>
                // )
            
                break;
            case 1:
                return(
                    <SquareValue id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
            
                break;
            case 2:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue  >
                )
            
                break;
            case 3:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
            
                break;
            case 4:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
            
                break;
            case 5:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
            
                break;
            case 6:
                return(
                    <SquareValue  id={6} lvl={false} mid={false}>

                    </SquareValue>
                )
            
                break;
            case 7:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
            
                break;
            case 8:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false} >

                    </SquareValue>
                )
                break;
            case 9:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid}  c={cn}>

                    </SquareValue>
                )
                break;
            case 10:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn} >

                    </SquareValue>
                )
                break;
            case 11:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid}  c={cn} >

                    </SquareValue>
                )
                break;
            case 12:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid}  c={cn} >

                    </SquareValue>
                )
                break;
            case 13:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid}  c={cn}>

                    </SquareValue>
                )
                break;
            case 14:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
            case 15:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
            case 16:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
            case 17:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid}  c={cn}>

                    </SquareValue>
                )
                break;
            case 18:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
            case 19:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
            case 20:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
            case 21:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
            case 22:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
            case 23:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
            case 24:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={lvl}>

                    </SquareValue>
                )
                break;
                case 25:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 26:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 27:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 28:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 29:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 30:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 31:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 32:
                return(
                    <SquareValue  id={32} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 33:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 34:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 35:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 36:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 37:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 38:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 39:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 40:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 41:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 42:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 43:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 44:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 45:
                return(
                    <SquareValue  id={tr} lvl={lvl} mid={mid} c={cn}>

                    </SquareValue>
                )
                break;
                case 46:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 47:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 48:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 49:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 50:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 51:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 52:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 53:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 54:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 55:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 56:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 57:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 58:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 59:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 60:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 61:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 62:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 63:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 64:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 65:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 66:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 67:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 68:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 69:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 70:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 71:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                case 72:
                return(
                    <SquareValue  id={tr} lvl={false} mid={false}>

                    </SquareValue>
                )
                break;
                

            
              
        }
    
  
    
}
