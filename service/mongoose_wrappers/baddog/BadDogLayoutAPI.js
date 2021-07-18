
//generic mongoose api? 
//this seems potentially an unrequired level of anstraction 
var apiInterface = {
    //Filter search by given action
    //change to get Data
    requestData: function(req, res, _api) {
        const _API = require(_api);
        
        console.log("We got here");
        //res.send("We here "+req.params.query);
        console.log("_api.src "+_API.src);
        console.log("_api.id "+_API.id);
        console.log("_api.name "+_API.name);
        console.log("_api.model "+_API.model);
        console.log("_api.schema "+_API.schema);


        let reqMod = require(_API.src);
        //not sure why model would be dynamic
        let model = new reqMod(_API);//I think this is wrong / we need this server to serve these models right? 

        let action = req.params.action; 
        let query = JSON.parse(req.params.query); 
        let filters = query.filters; 

        //Whatever the 'action' endpoint is call that function
        //May not be the best way but whatever man
        model[action](filters, (err,doc) => {//if otherwise check us???

            if(err){console.log("ERROR:- bleh "); res.send("ERROR")};
            console.log("We found one! "+doc);
            res.send(doc);
        });
        //model.action??
        //this.test(model,req,res,_API);
    },
    postData: function(req, res, _api){
        const _API = require(_api);
        let reqMod = require(_API.src);
        //not sure why model would be dynamic
        let model = new reqMod(_API);//I think this is wrong / we need this server to serve these models right? 

        let action = req.params.action; 
        let query = JSON.parse(req.params.query); //How would we/would we use query in this instance 
        console.log("ACTION "+action);
        let filters = req.body;// query.filters; 

        //Whatever the 'action' endpoint is call that function
        //May not be the best way but whatever man
        model[action](filters, (err,doc) => {

            if(err){console.log("ERROR:- bleh "); res.send(err)};
            console.log("We found one! "+doc);
            res.send(doc);
        });

    }
};
module.exports = apiInterface;