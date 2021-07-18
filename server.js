//This really ius just a test 
//web/micro services need creating in packages

const express = require('express');// 
//https://expressjs.com/en/resources/middleware/cors.html
const cors = require('cors');
const app = express();//create simple server 
const port = process.env.PORT || 4500;//

const MongooseManager = require('./service/mongoose/MongooseConnectionManager'); 

let monObj = {
   server:"mongodb://127.0.0.1",
   database:"baddog-V1",
   connectionOptions:{ "useFindAndModify":false, "useNewUrlParser": true , "useUnifiedTopology": true, "autoIndex": false},
   models:[]
};

let db_connection = new MongooseManager(monObj);//load in controller

app.use(cors());//set server up for cors enable <- this is all routes/whole server 
app.use(express.json());//in order to use the body of posts  / is it needed? 

const routes = require('./api/routes');//create routes 
routes(app);//pass app for adding routes to
app.listen(port, function() {//listen on port and do nothing 
   console.log('Server started on port: ' + port);
});