'use strict';
const util = require('util');

const _INTS = require('./routes/routes.json'); //Routes json / same as used in routes
const interfaces = (() => {//self executing function / create available interfaces and return hash
//return object of route responses 
    let hashObj = {}; //Empty hash
    _INTS.get.forEach((file) => {//loop each route
        let required = require(file.src);//Load api interface js module

        //if this is mongoose specific - or our mongoose
        //then pass model details here? 
        
        hashObj[file['api-interface']] = function(req,res){//attach api call to function hash
            //getData
            required.requestData(req, res, file.apiDetails);//Each api interface has a single point of entry 
            //Pass the api details to use for given interface
        };

    });
    _INTS.post.forEach((file) => {//loop each route
        let required = require(file.src);//Load api interface js module

        hashObj[file['api-interface']] = function(req,res){//attach api call to function hash
            
            required.postData(req, res, file.apiDetails);//Each api interface has a single point of entry 
        };

    });
    return hashObj; 
})(); 

 module.exports = interfaces;