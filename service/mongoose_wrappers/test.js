
//generic mongoose api? 
var apiInterface = {
    //Filter search by given action

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
        let model = new reqMod(_API);//I think this is wrong / we need this server to serve these models right? 

        //model.action??
        this.test(model,req,res,_API);
    },
    handleError: function(err){
        console.log("ERROR:- "+err)
    },
    test: function(model, req, res, _api) {
        //model.test();
        console.log("We got here!!!!!");
        //res.send("We should be able to get data now - might be a little convoluted ???");

        //query.filters
        //need to caste _id as a mongoose _id before use it seems
        let filters = {
            _id:"60490d4e4439ad4608a85216"
        };
        model.findOne(filters, function(err,doc) {
            if(err)
            this.handleError(err);
            console.log("We found one! "+doc);
            res.send(doc);
        });
    }
};
module.exports = apiInterface;