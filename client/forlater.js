// app.get("/",(req,res)=>{
//     res.render("index.js")
// })
// app.post('/',async (req,res)=>{
//     const auth = new google.auth.GoogleAuth({
//         keyFile: "credentials.json",
//         scopes: "https://www.googleapis.com/auth/spreadsheets"
//     })
//     const client = await auth.getClient()
//     const spreadsheetID= "14F8Yzrj_kFqpBycN8-MbzjoBE65OM_1Tkcb5bgeTM9I"
//     const googleSheets = google.sheets({version:"v4", auth:client})
//     const metaData = await googleSheets.spreadsheets.get({
//         auth:auth,
//         spreadsheetId:spreadsheetID 

//     })
//     const getRows = await googleSheets.spreadsheets.values.get({
//         auth:auth,
//         spreadsheetId:spreadsheetID,
//         range: "MEL!A:A"
//     })
//     await googleSheets.spreadsheets.values.append({
//         auth:auth,
//         spreadsheetId:spreadsheetID,
//         range: "MEL!A:A",
//         valueInputOption: "USER_ENTERED",
//         resource:{
//             values:[
//                 ["Hellow World Plant"],
//                 ["Hellow World Plant"]
//             ]
//         }
//     })

//     res.send(getRows.data)
// })

// app.listen(PORT,(req,res)=>{
//     console.log(`running on port ${PORT}`)
// })