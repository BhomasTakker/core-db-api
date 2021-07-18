'use strict';
const controller = require('./controller');//get our controller object / self executing function 
const routes = require('./routes/routes.json');//Load our routes json file / all routes info

module.exports = function(app) {
     
    //Load routes file from json (Should be DB) and cycle through each
    routes.get.forEach((route) => {
        app.route(route.route)//spin through a/multiple json files to get api routes 
        .get(controller[route['api-interface']]);//attach object function from controller for each route
    });
    routes.post.forEach((route) => {
        app.route(route.route)//spin through a/multiple json files to get api routes 
        .post(controller[route['api-interface']]);//attach object function from controller for each route
    });
};
