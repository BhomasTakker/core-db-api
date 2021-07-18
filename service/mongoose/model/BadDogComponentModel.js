const mongoose = require('mongoose');
const util = require('util');

const BadDogBaseModel = require('./BadDogBaseModel');
//Document Model for a specific collection
//Need go through this and add flesh out with full functionality
//i.e. a full create, find, find list, delete, etc, etc  


//BadDogComponentModel

const temp = [
    {
        "_id":"60b5280646e76c32e0e41c7b",
        "id":"gridItem17",
        "src":"BadDogAnythingEmbed",
        "name":"gridItem17",
        "modAtts":{
          "load":true
        },
        "modules":[
          {
              "name":"actions",
              "src":"Actions",
              "actions":[
                {
                    "load": [
                        {
                            "type": "event",
                            "msg": "API:REQUEST",
                            "server":"http://localhost:3500",
                            "path":"/api/social-media/twitter/oembed/",
                            "query":{
                              "filters":{
                                "url":"https://twitter.com/AOC"
                              },
                              "structure":{

                              },
                              "attributes":{},
                              "sort":{}
                            }
                            
                        }
                      ]
                  }
              ]
          }
        ]

      }
    
];
class BadDogComponentModel extends BadDogBaseModel{//Both should extend a BaseModel / this should not extend ComponentModel 

    //temp function to easilly add docs
    //pass either an object or an array
    createComponent(filters, callback = undefined){//This is dangerfield
        console.log("createComponent Called? "+temp[0]._id);
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        this.model.findOneAndUpdate({_id:temp[0]._id}, temp[0], callback); 
        return; 
    }
    //Overwriting because we need to change the other to convert to a 


    //_id.toHexString()?? - try this
    findById(filters, callback = undefined){ 
        console.log("findById BadDogComponentModel 111111");
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        console.log("findById BadDogComponentModel 222222 "+filters);
        
        //let r = mongoose.Schema.Types.ObjectId; 
        //let t = new r (filters._id); 
        //this.model.findById(filters._id, callback);
        this.model.findOne(filters, callback);
    }
    //I shouldn't have to do this?
    findOneAndUpdate(filters, callback = undefined){
        let _this = this; 
        console.log("UPDATE "+filters.update);
        console.log("UPDATE !! "+util.inspect(filters.find, false, 3, false));
        console.log("UPDATE !! "+util.inspect(filters.update, false, 3, false));
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('findOneAndUpdate Found doc '+doc );
            console.log("findOneAndUpdate Found doc  !! "+util.inspect(doc, false, 3, false));
            
        };
        this.model.findOneAndUpdate(filters.find,filters.update, callback);

    }
}

module.exports = BadDogComponentModel;