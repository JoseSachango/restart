
import { Grid } from "@mui/material"
const squareStyle = {
    width: '100%',
    height: '100%',
  }
  export const Square = ({ Color, children }) => {
    // const backgroundColor = Color ? 'black' : 'white'
    // const color = Color ? 'white' : 'black'
    return (
      // <div
      //   style={{
      //     ...squareStyle,
      //     color,
      //     backgroundColor,
      //   }}
      // >
      //   {children}
      // </div>
      <Grid item style={{...squareStyle,color:"black",backgroundColor:"white"}}>
        {children}
      </Grid>
    )
  }