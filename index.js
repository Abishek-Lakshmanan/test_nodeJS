const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.use(express.json({ extended: false })); //Initializing bodyparser middleware

app.use("/api/user", require('./controller/user') )
// app.use("/api/vendor")

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {

//     const obj = {
//         id: 1,
//         name: "abishek",
//         age: "27"
//     }
//     res.send('Hello World!')
// })
// app.put('/', (req, res) => {

//     const obj = {
//         id: 1,
//         name: "ram",
//         age: "27",
//         experience: 
//     }
//     res.send('Hello World!')
// })
// app.delete('/', (req, res) => {

//     const obj = {
//         id: 1,
//         name: "ram",
//         age: "27",
//         experience: 
//     }
//     res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})