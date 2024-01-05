const {  query, body} = require('express-validator');

function user() {
   return [ body("name", "Name is not present here").isString().notEmpty(),
    query("id", "Id is not present here").notEmpty()]
}

module.exports = user()