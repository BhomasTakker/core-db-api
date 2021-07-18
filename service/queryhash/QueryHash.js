let queryHash = {};

const qHash = { 
    queryHash:{},
    checkQueryHash:function(query,res){
        if(queryHash[query]){//pass a hash buster
            console.log("Hash return query "+query);
            return queryHash[query];//JSON.parse(queryHash[query]); 
        }
        return false; 
    },
    setQueryHash:function(query,responseObject){
        queryHash[query] = responseObject;
    }
}
module.exports = qHash;