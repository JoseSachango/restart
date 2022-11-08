
import { Square } from './Square.js'
import {Grid} from "@mui/material"
export const MatrixSquare = ({ x, y, children, key }) => {

  {/**Create logic to replace the variable black to determine whether the square is yellow red or green. A swithc case would probably work */}
  const color = (x + y) % 2 === 1
  return (
    // <div
     
    //   role="Space"
    //   data-testid={`(${x},${y})`}
    //   style={{
    //     position: 'relative',
    //     width: '100%',
    //     height: '100%',
    //   }}
    // >
    //   <Square Color={color}>{children}</Square>
  
    // </div>
    <Grid item sm={1.5} xs={1.5} lg={1.5}
      data-testid={`(${x},${y})`}
      key={key}
      
    >
         <Square role="Space" Color={color}>{children}</Square>
    </Grid>
  )
}