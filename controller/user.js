const express = require("express");

const router = express.Router();

const userService = require('../services/user')

const userValivator = require('../validationHelper/user')

const {  query, body, param, validationResult } = require('express-validator');

router.post('/',
  userValivator,
  (req, res) => {

    const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.params.id}!`);
  }

  res.send({ errors: result.array() });
   
//   res.send(req.body)
//   res.send(req.params)
//   res.send(req.query)
})
// router.get('/',   (req, res) => {
//     userService.hello('abishek')
// //   res.send(req.body)
// //   res.send(req.params)
//   res.send(userService.hello('abishek'))
// //   res.send(req.query)
// })

router.post('/', (req, res) => {

    // const obj = {
    //     id: 1,
    //     name: "abishek",
    //     age: "27"
    // }
    res.send('Hello World!')
})
router.put('/', (req, res) => {

    // const obj = {
    //     id: 1,
    //     name: "ram",
    //     age: "27",
    //     experience: 
    // }
    res.send('Hello World!')
})
router.delete('/', (req, res) => {

    // const obj = {
    //     id: 1,
    //     name: "ram",
    //     age: "27",
    //     experience: 
    // }
    res.send('Hello World!')
})

module.exports = router