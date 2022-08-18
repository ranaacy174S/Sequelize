const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'rootschema',
    password:'mysql1730@S',

})

module.exports=pool.promise();