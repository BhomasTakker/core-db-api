'use strict'
const filters = { 
    //createSOMETHINGFilters
    createFilters:function(query, filters){//is this a type of filters? 
        //If we can generalise this and have any 'required' filters taken care of by the api itself?
        let keys = Object.keys(filters);

        //this isn't standard
        //what for blah=meh&foo=bar
        //what's the name jazz for these things? This 'style' is a standard of api no?
        query += 'filters=';//Would we not if no filters? <- What about required areaType

        keys.forEach((key,i) => {
            //''+filters[key]+'='+filters.areaType;
            query+=''+key+'='+filters[key];
            if(i<keys.length-1)query+=';';
        });

        return query; 
    },
    createQueryFilters:function(query, filters){//call it something after the style standard of api
        let keys = Object.keys(filters);

        //this isn't standard
        //what for blah=meh&foo=bar
        //what's the name jazz for these things? This 'style' is a standard of api no?
        //query += 'filters=';//Would we not if no filters? <- What about required areaType

        //we need to add defaults
        keys.forEach((key,i) => {
            //''+filters[key]+'='+filters.areaType;
            if(i==0)query+='?';//this should be '?'
            else 
            query+='&';

            query+=key+'='+filters[key];
            //if(i<keys.length-1)query+=';';
        });

        return query; 
    },
    noFilters:function(query, filters){
        return query; 
    }
}
module.exports = filters;