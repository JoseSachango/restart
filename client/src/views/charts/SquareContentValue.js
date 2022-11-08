
import { Grid,Box } from "@mui/material"
import { useGlobalContext,useGlobalContextUpdates } from "../../Context"
export const SquareValue = (props) => {
  const context = useGlobalContext()
  const updateContext = useGlobalContextUpdates()
  let col = {backgroundColor:"purple",border:"2px solid"}
  if(!props.lvl){
    col = {backgroundColor:"white",border:"2px solid",borderColor:"white"}
  }
  if(props.id===6||props.id===7||props.id===14||props.id===15||props.id===22||props.id===23||props.id===30||props.id===31||props.id===38||props.id===39||props.id===46||props.id===47||props.id===38||props.id===48||props.id===49||props.id===50||props.id===51||props.id===52||props.id===53||props.id===56||props.id===57||props.id===58||props.id===59||props.id===60||props.id===61||props.id===64||props.id===65||props.id===66||props.id===67||props.id===68||props.id===69){
    col = {backgroundColor:"white",border:"2px solid"}
  }
  if(props.id===1){
    col = {backgroundColor:"white",borderLeft:"2px solid",borderTop:"2px solid"}
  }
  if(props.id===2){
    col = {backgroundColor:"white",borderTop:"2px solid"}
  }
  if(props.id===3){
    col = {backgroundColor:"white",borderTop:"2px solid"}
  }
  if(props.id===4){
    col = {backgroundColor:"white",borderTop:"2px solid"}
  }
  if(props.id===5){
    col = {backgroundColor:"white",borderTop:"2px solid"}
  }
  if(props.id===24){
    col = {backgroundColor:"white",borderLeft:"2px solid"}
  }
  if(props.id===16){
    col = {backgroundColor:"white",border:"2px solid",borderColor:"white",borderLeft:"2px solid"}
  }
  if(props.id===8){
    col = {backgroundColor:"white",border:"2px solid",borderColor:"white",borderLeft:"2px solid",borderTop:"2px solid"}
  }
  if(props.id===32){
    col = {backgroundColor:"white",border:"2px solid",borderColor:"white",borderLeft:"2px solid",borderTop:"0px solid"}
  }
  if(props.id===40){
    col = {backgroundColor:"white",border:"2px solid",borderColor:"white",borderLeft:"2px solid",borderBottom:"2px solid"}
  }
  if(props.id===9||props.id===10||props.id===19||props.id===20||props.id===28||props.id===37||props.id===45){
    col = {backgroundColor:"#e040fb",border:"2px solid",borderColor:"white",borderLeft:"2px solid"}
  }
  if(props.id===11||props.id===12||props.id===13||props.id===21||props.id===29){
    col = {backgroundColor:"#d50000",border:"2px solid",borderColor:"white",borderLeft:"2px solid"}
  }
  if(props.id===17||props.id===18||props.id===26||props.id===27||props.id===35||props.id===36||props.id===44){
    col = {backgroundColor:"#ffff00",border:"2px solid",borderColor:"white",borderLeft:"2px solid"}
  }
  if(props.id===25||props.id===33||props.id===41||props.id===42||props.id===43||props.id===34){
    col = {backgroundColor:"#76ff03",border:"2px solid",borderColor:"white",borderLeft:"2px solid"}
  }


  return (
  
              
      
                <Grid item style={col}>
                 
                 {((props.id===9)||(props.id===10)||(props.id===11)||(props.id===12)||(props.id===13)||(props.id===17)||(props.id===18)||(props.id===19)||(props.id===20)||(props.id===21)||(props.id===25)||(props.id===26)||(props.id===27)||(props.id===28)||(props.id===29)||(props.id===33)||(props.id===34)||(props.id===35)||(props.id===36)||(props.id===37)||(props.id===41)||(props.id===42)||(props.id===43)||(props.id===44)||(props.id===45)||(props.id===24))&&(
    <Grid item lg={12} style={{textAlign:"center",height:"70px",paddingTop:"20px"}}>
    { (props.id===3&&col.backgroundColor==="white") && ("CoF")}
    { (props.id===24&&col.backgroundColor==="white") && (<div style={{height:"100px",borderColor:"white"}}>PoF</div>)}
    { (props.id===14&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>1</div>)}
    { (props.id===22&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>2</div>)} 
    { (props.id===30&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>3</div>)}
    { (props.id===38&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>4</div>)}
    { (props.id===46&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>5</div>)} 
    { (props.id===23&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"1.0E-02 - 1.0E-01"}</div>)}
    { (props.id===15&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"> 1.0E-01"}</div>)}
    { (props.id===31&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"1.0E-03 - 1.0E-02"}</div>)}
    { (props.id===39&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"1.0E-04 - 1.0E-03"}</div>)}
    { (props.id===47&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"< 1E-04"}</div>)}
    { (props.id===48&&col.backgroundColor==="white") && (<div style={{fontSize:16}}>ECON.</div>)}
    { (props.id===56&&col.backgroundColor==="white") && (<div style={{fontSize:16,whiteSpace:"pre-wrap"}}>ENVI.</div>)}
    { (props.id===64&&col.backgroundColor==="white") && (<div style={{fontSize:16,whiteSpace:"pre-wrap"}}>HSE.</div>)}
    { (props.id===49&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>Less than 10,000 USD</div>)}
    { (props.id===50&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>10,000 to 100,000 USD</div>)}
    { (props.id===51&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>100,000 to 1,000,000 USD</div>)}
    { (props.id===52&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>1,000,000 to 10,000,000 USD</div>)}
    { (props.id===53&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>More than 10,000,000 USD</div>)} 
    { (props.id===57&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>1 / Slight Impact</div>)} 
    { (props.id===58&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>2 / Minor Impact</div>)}
    { (props.id===59&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>3 / Local Impact</div>)}
    { (props.id===60&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>4 / Major Impact</div>)}
    { (props.id===61&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>5 / Extensive Impact</div>)}
    { (props.id===65&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>1 / None</div>)} 
    { (props.id===66&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>2 / Low</div>)}
    { (props.id===67&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>3 / Medium</div>)} 
    { (props.id===68&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>4 / Medium - High</div>)}
    { (props.id===69&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>5 / High</div>)}
    { (props.id===63&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>
    <Box>
        <Grid item style={{textAlign:"center",backgroundColor:"white",border:"1px solid",fontSize:6}} xs={12}>
          Risk Categories
        </Grid>
        <Grid item style={{textAlign:"center",backgroundColor:"#d50000",border:".5px solid",fontSize:6}} xs={12}>
          High
        </Grid>
        <Grid item style={{textAlign:"center",backgroundColor:"#e040fb",border:".5px solid"}} xs={12}>
          Medium High
        </Grid>
        <Grid item style={{textAlign:"center",backgroundColor:"#ffff00",border:".5px solid"}} xs={12}>
          Medium
        </Grid>
        <Grid item style={{textAlign:"center",backgroundColor:"#76ff03",border:".5px solid"}} xs={12}>
          Low
        </Grid>


    </Box>
    </div>)}
    { (props.id===8&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)} 
    { (props.id===16&&col.backgroundColor==="white") && (<div ></div>)}   
    { (props.id===32&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
    { (props.id===40&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}
    { (props.id===3&&col.backgroundColor==="purple") && (props.id)}
    { (props.id===2&&col.backgroundColor==="purple") && (props.id)}
    { (props.id===1&&col.backgroundColor==="purple") && (props.id)}
    { (props.id===4&&col.backgroundColor==="purple") && (props.id)}
    { (props.id===5&&col.backgroundColor==="purple") && (props.id)}
    { (props.id===9) && (props.c.nine)}
    { (props.id===10) && (props.c.ten)}
    { (props.id===11) && (props.c.eleven)}                         
    { (props.id===12&& (props.c.twelve)) && (<div style={{textAlign:"center",height:"70px",padding:"20px"}}>{props.c.twelve}</div>)}
    { (props.id===13&& (props.c.thirteen)) && (props.c.thirteen)}
    { (props.id===17&& (props.c.seventeen)) && (props.c.seventeen)}
    { (props.id===18&& (props.c.eighteen)) && (props.c.eighteen)}
    { (props.id===19&& (props.c.nineteen)) && (props.c.nineteen)}
    { (props.id===20&& (props.c.twenty)) && (props.c.twenty)}
    { (props.id===21&& (props.c.twentyone)) && (props.c.twentyone)}
    { (props.id===25&& (props.c.twentyfive)) && (props.c.twentyfive)}
    { (props.id===26&& (props.c.twentysix)) && (props.c.twentysix)}
    { (props.id===27&& (props.c.twentyseven)) && (props.c.twentyseven)}
    { (props.id===28 && (props.c.twentyeight)) && (props.c.twentyeight)}
    { (props.id===29&& (props.c.twentynine)) && (props.c.twentynine)}
    { (props.id===33&& (props.c.thirtythree)) && (props.c.thirtythree)}
    { (props.id===34&& (props.c.thirtyfour)) && (props.c.thirtyfour)}
    { (props.id===35&& (props.c.thirtyfive)) && (props.c.thirtyfive)}
    { (props.id===36&& (props.c.thirtysix)) && (props.c.thirtysix)}
    { (props.id===37&& (props.c.thirtyseven)) && (props.c.thirtyseven)}
    { (props.id===41&& (props.c.fourtyone)) && (props.c.fourtyone)}
    { (props.id===42&& (props.c.fourtytwo)) && (props.c.fourtytwo)}
    { (props.id===43&& (props.c.fourtythree)) && (props.c.fourtythree)}
    { (props.id===44&& (props.c.fourtyfour)) && (props.c.fourtyfour)}
    { (props.id===45&& (props.c.fourtyfive)) && (props.c.fourtyfive)}                     
    { (props.id!==3&&props.id!==1&&props.id!==2&&props.id!==4&&props.id!==5&&props.id!==0&&props.id!==6&&props.id!==7&&props.id!==24&&props.id!==8&&props.id!==16&&props.id!==32&&props.id!==40&&props.id!==14&&props.id!==22&&props.id!==30&&props.id!==38&&props.id!==46&&props.id!==48&&props.id!==56&&props.id!==64&&props.id!==49&&props.id!==50&&props.id!==51&&props.id!==52&&props.id!==53&&props.id!==9&&props.id!==10&&props.id!==11&&props.id!==12&&props.id!==13&&props.id!==17&&props.id!==18&&props.id!==19&&props.id!==20&&props.id!==21&&props.id!==25&&props.id!==26&&props.id!==27&&props.id!==28&&props.id!==29&&props.id!==33&&props.id!==34&&props.id!==35&&props.id!==36&&props.id!==37&&props.id!==41&&props.id!==42&&props.id!==43&&props.id!==44&&props.id!==45&&props.id!==15&&props.id!==23&&props.id!==31&&props.id!==39&&props.id!==47&&props.id!==54&&props.id!==62&&props.id!==70&&props.id!==55&&props.id!==71&&props.id!==57&&props.id!==58&&props.id!==59&&props.id!==60&&props.id!==61&&props.id!==65&&props.id!==66&&props.id!==67&&props.id!==68&&props.id!==69&&props.id!==63) && (props.id)}
    { (props.id===1&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}
    { (props.id===2&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}    
    {/* { (props.id===3&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                          */}
    { (props.id===4&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
    { (props.id===5&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
    { (props.id===0&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
    { (props.id===6&&col.backgroundColor==="white") && (<div style={{fontSize:12}}>Qualitative</div>)} 
    { (props.id===7&&col.backgroundColor==="white") && (<div style={{fontSize:12}}>Quantitative</div>)}                          

    {/* { (props.id===1&&col.backgroundColor==="purple") && (props.id)} */}
    
    
</Grid>
)}

{( ((props.id===0)||(props.id===1)||(props.id===2)||(props.id===3)||(props.id===4)||(props.id===5)||(props.id===6)||(props.id===7)||(props.id===8)||(props.id===14)||(props.id===15)||(props.id===16)||(props.id===22)||(props.id===23)||(props.id===30)||(props.id===31)||(props.id===32)||(props.id===38)||(props.id===39)||(props.id===40)||(props.id===46)||(props.id===47)||(props.id===48)||(props.id===49)||(props.id===50)||(props.id===51)||(props.id===52)||(props.id===53)||(props.id===54)||(props.id===55)||(props.id===56)||(props.id===57)||(props.id===58)||(props.id===59)||(props.id===60)||(props.id===61)||(props.id===62)||(props.id===63)||(props.id===64)||(props.id===65)||(props.id===66)||(props.id===67)||(props.id===68)||(props.id===69)||(props.id===70)||(props.id===71)))&&(
<Grid item lg={12} style={{textAlign:"center",height:"70px",paddingTop:"20px"}}>
{ (props.id===3&&col.backgroundColor==="white") && ("CoF")}
{ (props.id===24&&col.backgroundColor==="white") && (<div >PoF</div>)}
{ (props.id===14&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>1</div>)}
{ (props.id===22&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>2</div>)} 
{ (props.id===30&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>3</div>)}
{ (props.id===38&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>4</div>)}
{ (props.id===46&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>5</div>)} 
{ (props.id===23&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"1.0E-02 - 1.0E-01"}</div>)}
{ (props.id===15&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"> 1.0E-01"}</div>)}
{ (props.id===31&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"1.0E-03 - 1.0E-02"}</div>)}
{ (props.id===39&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"1.0E-04 - 1.0E-03"}</div>)}
{ (props.id===47&&col.backgroundColor==="white") && (<div style={{fontSize:8}}>{"< 1E-04"}</div>)}
{ (props.id===48&&col.backgroundColor==="white") && (<div style={{fontSize:16}}>ECON.</div>)}
{ (props.id===56&&col.backgroundColor==="white") && (<div style={{fontSize:16,whiteSpace:"pre-wrap"}}>ENVI.</div>)}
{ (props.id===64&&col.backgroundColor==="white") && (<div style={{fontSize:16,whiteSpace:"pre-wrap"}}>HSE.</div>)}
{ (props.id===49&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>Less than 10,000 USD</div>)}
{ (props.id===50&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>10,000 to 100,000 USD</div>)}
{ (props.id===51&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>100,000 to 1,000,000 USD</div>)}
{ (props.id===52&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>1,000,000 to 10,000,000 USD</div>)}
{ (props.id===53&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>More than 10,000,000 USD</div>)} 
{ (props.id===57&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>1 / Slight Impact</div>)} 
{ (props.id===58&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>2 / Minor Impact</div>)}
{ (props.id===59&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>3 / Local Impact</div>)}
{ (props.id===60&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>4 / Major Impact</div>)}
{ (props.id===61&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>5 / Extensive Impact</div>)}
{ (props.id===65&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>1 / None</div>)} 
{ (props.id===66&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>2 / Low</div>)}
{ (props.id===67&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>3 / Medium</div>)} 
{ (props.id===68&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>4 / Medium - High</div>)}
{ (props.id===69&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>5 / High</div>)}
{ (props.id===63&&col.backgroundColor==="white") && (<div style={{fontSize:9,whiteSpace:"pre-wrap"}}>
<Box>
  <Grid item style={{textAlign:"center",backgroundColor:"white",border:".5px solid"}} xs={12}>
  <div style={{fontSize:7,whiteSpace:"pre-wrap"}}>Risk Categories</div>
  </Grid>
  <Grid item style={{textAlign:"center",backgroundColor:"#d50000",border:".5px solid"}} xs={12}>
  <div style={{fontSize:7,whiteSpace:"pre-wrap"}}>High</div>
  </Grid>
  <Grid item style={{textAlign:"center",backgroundColor:"#e040fb",border:".5px solid"}} xs={12}>
  <div style={{fontSize:7,whiteSpace:"pre-wrap"}}>Medium High</div>
  </Grid>
  <Grid item style={{textAlign:"center",backgroundColor:"#ffff00",border:".5px solid"}} xs={12}>
  <div style={{fontSize:7,whiteSpace:"pre-wrap"}}>Medium</div>
  </Grid>
  <Grid item style={{textAlign:"center",backgroundColor:"#76ff03",border:".5px solid"}} xs={12}>
  <div style={{fontSize:7,whiteSpace:"pre-wrap"}}>Low</div>
  </Grid>
</Box>
</div>)}
{ (props.id===8&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)} 
{ (props.id===16&&col.backgroundColor==="white") && (<div ></div>)}   
{ (props.id===32&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
{ (props.id===40&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}
{ (props.id===3&&col.backgroundColor==="purple") && (props.id)}
{ (props.id===2&&col.backgroundColor==="purple") && (props.id)}
{ (props.id===1&&col.backgroundColor==="purple") && (props.id)}
{ (props.id===4&&col.backgroundColor==="purple") && (props.id)}
{ (props.id===5&&col.backgroundColor==="purple") && (props.id)}
{ (props.id===9) && (props.c.nine)}
{ (props.id===10) && (props.c.ten)}
{ (props.id===11) && (props.c.eleven)}                   
{ (props.id===12&& (props.c.twelve)) && (<div style={{textAlign:"center",height:"70px",padding:"20px"}}>{props.c.twelve}</div>)}
{ (props.id===13&& (props.c.thirteen)) && (props.c.thirteen)}
{ (props.id===17&& (props.c.seventeen)) && (props.c.seventeen)}
{ (props.id===18&& (props.c.eighteen)) && (props.c.eighteen)}
{ (props.id===19&& (props.c.nineteen)) && (props.c.nineteen)}
{ (props.id===20&& (props.c.twenty)) && (props.c.twenty)}
{ (props.id===21&& (props.c.twentyone)) && (props.c.twentyone)}
{ (props.id===25&& (props.c.twentyfive)) && (props.c.twentyfive)}
{ (props.id===26&& (props.c.twentysix)) && (props.c.twentysix)}
{ (props.id===27&& (props.c.twentyseven)) && (props.c.twentyseven)}
{ (props.id===28 && (props.c.twentyeight)) && (props.c.twentyeight)}
{ (props.id===29&& (props.c.twentynine)) && (props.c.twentynine)}
{ (props.id===33&& (props.c.thirtythree)) && (props.c.thirtythree)}
{ (props.id===34&& (props.c.thirtyfour)) && (props.c.thirtyfour)}
{ (props.id===35&& (props.c.thirtyfive)) && (props.c.thirtyfive)}
{ (props.id===36&& (props.c.thirtysix)) && (props.c.thirtysix)}
{ (props.id===37&& (props.c.thirtyseven)) && (props.c.thirtyseven)}
{ (props.id===41&& (props.c.fourtyone)) && (props.c.fourtyone)}
{ (props.id===42&& (props.c.fourtytwo)) && (props.c.fourtytwo)}
{ (props.id===43&& (props.c.fourtythree)) && (props.c.fourtythree)}
{ (props.id===44&& (props.c.fourtyfour)) && (props.c.fourtyfour)}
{ (props.id===45&& (props.c.fourtyfive)) && (props.c.fourtyfive)}                 
{ (props.id!==3&&props.id!==1&&props.id!==2&&props.id!==4&&props.id!==5&&props.id!==0&&props.id!==6&&props.id!==7&&props.id!==24&&props.id!==8&&props.id!==16&&props.id!==32&&props.id!==40&&props.id!==14&&props.id!==22&&props.id!==30&&props.id!==38&&props.id!==46&&props.id!==48&&props.id!==56&&props.id!==64&&props.id!==49&&props.id!==50&&props.id!==51&&props.id!==52&&props.id!==53&&props.id!==9&&props.id!==10&&props.id!==11&&props.id!==12&&props.id!==13&&props.id!==17&&props.id!==18&&props.id!==19&&props.id!==20&&props.id!==21&&props.id!==25&&props.id!==26&&props.id!==27&&props.id!==28&&props.id!==29&&props.id!==33&&props.id!==34&&props.id!==35&&props.id!==36&&props.id!==37&&props.id!==41&&props.id!==42&&props.id!==43&&props.id!==44&&props.id!==45&&props.id!==15&&props.id!==23&&props.id!==31&&props.id!==39&&props.id!==47&&props.id!==54&&props.id!==62&&props.id!==70&&props.id!==55&&props.id!==71&&props.id!==57&&props.id!==58&&props.id!==59&&props.id!==60&&props.id!==61&&props.id!==65&&props.id!==66&&props.id!==67&&props.id!==68&&props.id!==69&&props.id!==63) && (props.id)}
{ (props.id===1&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}
{ (props.id===2&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}    
{/* { (props.id===3&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                          */}
{ (props.id===4&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
{ (props.id===5&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
{ (props.id===0&&col.backgroundColor==="white") && (<div style={{color:"transparent"}}>1</div>)}                         
{ (props.id===6&&col.backgroundColor==="white") && (<div style={{fontSize:12}}>Qualitative</div>)} 
{ (props.id===7&&col.backgroundColor==="white") && (<div style={{fontSize:12}}>Quantitative</div>)}                          



</Grid>
)}


              
                  
                  
                </Grid> 
    
  
    
  )
}
