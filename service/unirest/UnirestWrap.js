const unirest = require('unirest');
const uni = { 
    uniGet:function(query,headers,res, callback){
        
        unirest.get(query)
        .headers({...headers})
        .then(function (response) {
                
            if(response.error)
                console.error(response.error);

            //console.log(response);
            callback(response.body);
            //res.send(response.body);//quite poss shouldn't 'send' here - use callback 
        });
        
    },
    uniPost:function(query,headers,res, callback){//res shouldn't be anywhere near here
        
        unirest.post(query)
        .headers({...headers})
        .then(function (response) {
                
            if(response.error)
                console.error(response.error);

            //console.log(response);
            callback(response.body);//if callback
            //res.send(response.body);//quite poss shouldn't 'send' here - use callback 
        });
        
    }
}
module.exports = uni;