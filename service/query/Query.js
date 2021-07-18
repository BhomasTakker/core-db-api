'use strict'
const _FILTERS = require('./../filters/filters');
const _uni = require('./../unirest/UnirestWrap');
const _qHash = require('./../queryhash/QueryHash'); 

const util = require('util');
//Go over / this would / will be restrictive
const _query = { 
    filters:{},
    initQuery:function(_URL, type, req, res, defaults = {}, headers = {}, filtersType = 'createQueryFilters'){//pass filters type!
        let query = _URL+type;//better way of doing this // I mean the action but meh / q mark addedin filters
        
        //Should probably not rely on query being here
        let qObj =  req.params.query ? JSON.parse(req.params.query) : {}; 

        let filts = qObj.filters ? qObj.filters : {};
        let defs = JSON.parse(JSON.stringify(defaults));//assign mods the object and returns so clone obj first else fudge defaults
        _query.filters = Object.assign(defs,filts);
        //add structure right?
        //filters = defaults assign(filters)!!


        //need set defaults / in here surely 
        let q;
        //should be create filters and pass that out?
        if(_FILTERS[filtersType])//bit dirty
        q = _FILTERS[filtersType](query, _query.filters);//qObj.filters
        else
        q = _FILTERS['createQueryFilters'](query, _query.filters);



        console.log("QUERY "+q);
        //Shoooooooood we?
        //ON IF?????
        _query.send(q, headers, res);

        return q; 
    },


    send:(query, headers, res) => {

        //this should be better / call once and perform check on result
        if(_qHash.checkQueryHash(query)){
            console.log("RESPONSEBOD "+util.inspect(_qHash.checkQueryHash(query),false,3,true))
            res.send(_qHash.checkQueryHash(query));
            return; 
        }
        _uni.uniGet(query,headers,res, function(responseBod){
            _qHash.setQueryHash(query,responseBod);
            //we need to interject with structure and sort
            console.log("RESPONSEBOD "+util.inspect(responseBod,false,3,true))
            res.send(responseBod);
        });//need form header / need return and set hash then respond
    }
}
module.exports = _query;