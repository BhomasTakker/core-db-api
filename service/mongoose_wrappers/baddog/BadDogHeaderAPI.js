
//generic mongoose api? 
//this seems potentially an unrequired level of abstraction 
var apiInterface = {
    
    requestData: function(req, res, _api) {
        const _API = require(_api);
        
        let reqMod = require(_API.src);
        //not sure why model would be dynamic
        let model = new reqMod(_API);//I think this is wrong / we need this server to serve these models right? 

        let action = req.params.action; 
        let query = JSON.parse(req.params.query); 
        let filters = query.filters; 

        //Whatever the 'action' endpoint is call that function
        //May not be the best way but whatever man
        model[action](filters, (err,doc) => {

            if(err){
                console.log("ERROR BadDogHeaderAPI:- bleh ")
                res.send(err)
                return;
            };
            console.log("We found BadDogHeaderAPI one! "+doc);
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
        let filters = req.body;// query.filters; 

        console.log('DELETING BODY!!!!!!');
        console.log(req.body);

        //Whatever the 'action' endpoint is call that function
        //May not be the best way but whatever man
        model[action](filters, (err,doc) => {

            if(err){
                console.log("ERROR:- bleh "); 
                res.send(err)
                return;
            };
            console.log("We found one! "+doc);
            res.send(doc);
        });

    }
};
module.exports = apiInterface;