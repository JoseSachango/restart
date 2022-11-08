const {google} = require("googleapis")
const db = require("../models")
const passport = require("../config/passport")
module.exports = async function(app) {

  
    // GET route for getting all of the todos
    app.get("/dashboards/dashboard1", async function(req, res) {


      console.log("test 1 before app.get")
      console.log("hit hjit hit")

      db.User.findOne({
        where: {
          email:req.body,
          password: req.body
        }
      }).then((response)=>{
        console.log("The findOne function worked. This is the response: "+response)
      }).catch((err)=>{
        console.log("There was an error with the findOne function: "+err)
      })



      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
      const workbook = {}
      const getRowsPlantLevel = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "PLANT LEVEL"
      })
      const getRowsAreaLevel = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "AREA LEVEL"
      })
     const getRowsAssetLevel = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "ASSET LEVEL"
      })
      const getRowsAssetLevel2 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "ASSET LEVEL2"
      })
     const getRowsCircuitLevel = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "CIRCUIT LEVEL"
      })
      const getRowsCircuitLevel2 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "CIRCUIT LEVEL2"
      })
     const getRowsCmlLevel = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "CML LEVEL"
      })
      const getRowsCml2Level = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "CML LEVEL2"
      })
      const getRowsTableA = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "Table A - Tables for Thinning"
      })
      const getRowsTableB = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "Table B - Prior Probability for Thinning Corrosion Rate"
      })
      const getRowsTableC = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "Table C - Conditional Probability for Inspection Effectiveness"
      })
      const getRowsTableD = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "Table D - Coefficient of Variance"
      })
      const getRowsTableE = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "Table E - Corrosion Rate factors for Damage States"
      })
      const getRowsTableF = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "Table F - Tmin Structural for Piping"
      })
     const getRowsPicklist1 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 1 - MATERIALS"
      })
     const getRowsPicklist2 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 2 - EQUIP TYPE"
      })
     const getRowsPicklist3 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 3 - CIRC TYPE"
      })
      const getRowsPicklist4 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 4 - SYSTEMS"
      })
      const getRowsPicklist5 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 5 - STREAMS"
      })
      const getRowsPicklist6 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 6 - D TYPES"
      })
      const getRowsPicklist7 = await googleSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PICKLIST 7 - DMs"
      })
      //For some reason the code breaks down when trying to parse pick list 4 systems -> we get an internal server 500 error stating that the proxy in package.json is wrong
    //  const getRowsPicklist4 = await googleSheets.spreadsheets.values.get({
    //     auth:auth,
    //     spreadsheetId:spreadsheetID,
    //     range: "PICKLIST 4 - SYSTEMS"
    //   })
    //  const getRowsPicklist5 = await googleSheets.spreadsheets.values.get({
    //     auth:auth,
    //     spreadsheetId:spreadsheetID,
    //     range: "PICKLIST 5 - STREAMS"
    //   })
    //  const getRowsPicklist6 = await googleSheets.spreadsheets.values.get({
    //     auth:auth,
    //     spreadsheetId:spreadsheetID,
    //     range: "PICKLIST 6 - D TYPES"
    //   })
    //  const getRowsPicklist7 = await googleSheets.spreadsheets.values.get({
    //     auth:auth,
    //     spreadsheetId:spreadsheetID,
    //     range: "PICKLIST 7 - DMs"
    //   })
      workbook.plant = getRowsPlantLevel 
      workbook.area = getRowsAreaLevel
      workbook.asset = getRowsAssetLevel
      workbook.asset2 = getRowsAssetLevel2
      workbook.circuit = getRowsCircuitLevel
      workbook.circuit2 = getRowsCircuitLevel2
      workbook.getRowsTableA = getRowsTableA
      workbook.getRowsTableB = getRowsTableB
      workbook.getRowsTableC = getRowsTableC
      workbook.getRowsTableD = getRowsTableD
      workbook.getRowsTableE = getRowsTableE
      workbook.getRowsTableF = getRowsTableF
      workbook.cml = getRowsCmlLevel
      workbook.cml2 = getRowsCml2Level
      workbook.picklist1 = getRowsPicklist1
      workbook.picklist2 = getRowsPicklist2
      workbook.picklist3 = getRowsPicklist3
      workbook.picklist4 = getRowsPicklist4
      workbook.picklist5 = getRowsPicklist5
      workbook.picklist6 = getRowsPicklist6
      workbook.picklist7 = getRowsPicklist7
      // workbook.picklist4 = getRowsPicklist4
      // workbook.picklist5 = getRowsPicklist5
      // workbook.picklist6 = getRowsPicklist6
      // workbook.picklist17 = getRowsPicklist7

      console.log("marker")
      // console.log(metaData.data)
      console.log("end marker")
      // res.json(workbook.getRowsPlantLevel.data)
      res.json(workbook)
      

    });

    app.get("/configureplant/dfthinning", async function(req, res) {
      console.log("test 1 before app.get")
      console.log("hit")
      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
    
      const getRowsDFThinning = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "DF Thinning Calculator!C48"
      })


      res.json(getRowsDFThinning)

    })


    
    app.get("/configureplant/cr", async function(req, res) {
      console.log("test 1 before app.get")
      console.log("hit")
      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
    
      const getRowsCr = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "DF Thinning Calculator!C7"
      })


      res.json(getRowsCr)

    })

    app.get("/configureplant/lastinspectiondate", async function(req, res) {
      console.log("test 1 before app.get")
      console.log("hit")
      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
    
      const getRowsLastInspectionDate = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "DF Thinning Calculator!S15"
      })


      res.json(getRowsLastInspectionDate)

    })

    app.get("/configureplant/nextinspectiondate", async function(req, res) {
      console.log("test 1 before app.get")
      console.log("hit")
      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
    
      const getRowsNextInspectionDate = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "DF Thinning Calculator!T15"
      })


      res.json(getRowsNextInspectionDate)

    })


    app.get("/configureplant/trd", async function(req, res) {
      console.log("test 1 before app.get")
      console.log("hit")
      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
    
      const getRowsTrd = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "DF Thinning Calculator!P15"
      })


      res.json(getRowsTrd)

    })

    app.get("/configureplant/pof", async function(req, res) {
      console.log("test 1 before app.get")
      console.log("hit")
      // findAll returns all entries for a table when used with no options
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})
      // const metaData = await googleSheets.spreadsheets.get({
      //   auth:auth,
      //   spreadsheetId:spreadsheetID
      // })
    
      const getRowsPOF = await googleSheets.spreadsheets.values.get({
                auth:auth,
                spreadsheetId:spreadsheetID,
                range: "DF Thinning Calculator!C50"
      })


      res.json(getRowsPOF)

    })

    // change spreadsheet id for plant and area forms to the database new2 id********
    // console.log("before the post endpoint")
    app.post("/configureplant/plantform", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.append({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "PLANT LEVEL",
        valueInputOption: "USER_ENTERED",
        resource: {
          //had to change the name from value to values* to get passed an error
          values:[
            req.body.plantLvlRow
          ]
        }
      })
      res.json("It worked")

    })

    app.post("/configureplant/areaform", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()
      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.append({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "AREA LEVEL!A:C",
        valueInputOption: "USER_ENTERED",
        resource: {
          //had to change the name from value to values* to get passed an error
          values:[
            req.body.areaLvlRow
          ]
        }
      })
      res.json("It worked")

    })



    app.post("/configureplant/assetform", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      console.log(req.body.assetLvlRow.slice(0,3))
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.append({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "ASSET LEVEL2",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[
            req.body.assetLvlRow
          ]
        }
      })
      res.json("It worked")

    })




    app.post("/configureplant/circuitform", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.append({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "CIRCUIT LEVEL2",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[
            req.body.circuitLvlRow
          ]
        }
      })
      res.json("It worked")

    })



    app.post("/configureplant/cmlform", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.append({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "CML LEVEL2",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[
            req.body.cmlLvlRow
          ]
        }
      })
      res.json("It worked")

    })



    app.put("/configureplant/cop1", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C30",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/lastinspectiondate", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!S15",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })


    

    app.put("/configureplant/cop2", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C31",
        valueInputOption: "USER_ENTERED",
        resource:{
          values: [[req.body.calculationInput]]
        }
        
        
      })
   
      res.json("It worked")

    })

    app.put("/configureplant/cop3", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C32",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })


    app.put("/configureplant/prp1", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C27",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/prp2", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C28",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/prp3", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C29",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/ys", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C12",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/ts", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C13",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/s", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C14",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })


    app.put("/configureplant/alpha", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C15",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/originalthickness", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C5",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/specificmaterial", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C4",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })


    app.put("/configureplant/crsusceptibility1", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C7",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })


    app.put("/configureplant/innerdiameter", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C10",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/operatingpressure", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C11",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/trd", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C8",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })
    app.post("/configureplant/trd", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.append({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!C8",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

    app.put("/configureplant/gff", async function(req,res){
      console.log("req.body below")
      console.log(req.body)
      console.log("_")
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets"
      })
      const client = await auth.getClient()

      const spreadsheetID= "1HGHuUbzBkuGNFz49Jsb4HJWmTQXCwTXrCCLfYUfiIP4"
      const googleSheets = google.sheets({version:"v4", auth:client})

      console.log("about to append values to google sheets")
      await googleSheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:spreadsheetID,
        range: "DF Thinning Calculator!D57",
        valueInputOption: "USER_ENTERED",
        resource: {
          //The issue might be with data validation rule imposed on column D in the spreadhseet
          values:[[req.body.calculationInput]]
        }
      })
      res.json("It worked")

    })

  

   
  
 
    
 
  
  };
  