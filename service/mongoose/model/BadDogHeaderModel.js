const mongoose = require('mongoose');
const util = require('util');

const BadDogBaseModel = require('./BadDogBaseModel');
//Document Model for a specific collection
//Need go through this and add flesh out with full functionality
//i.e. a full create, find, find list, delete, etc, etc  


//BadDogComponentModel

const temp = [
    {
        "buttons":[
            {
                "id":"Home",
                "value":"Home",
                "actions":[
                    {
                        "type": "action",
                        "target": "content-body",
                        "msg": "AROOO"
    
                    },
                    {
                        "comment":"Update to nothing rather than delete - I'm sure it sucks - target subheader? Surely that's a given",
                        "type": "action",
                        "msg": "UPDATE:SUB:HEADER",
                        "target":"bad-dog-nav-subheader"
                    }
                ]
            },
            {
                "id":"News",
                "value":"News",
                "actions":[
                    {
                        "type": "action",
                        "target": "BadDogGridBody",
                        "msg": "UPDATE:GRID",
                        "comment":"Use a mongoose _id for loading/setting these",
                        "gridItemsArray2":"news-layout",
                        "gridItemsArray":"60b4ec44fdc2022f38d39470",
                        "gridItemsList":"news-asset-list"
    
                    },
                    {
                        "type": "action",
                        "target":"bad-dog-nav-subheader",
                        "msg": "UPDATE:SUB:HEADER",
    
                        "comment":"need a mongoose id for setting this",
                        "headerObject":"news-navigation-bar"
                    }
                ]
            },
            {
                "id":"Trending",
                "value":"Trending",
                "actions":[
                    {
                        "type": "action",
                        "target": "content-body",
                        "msg": "AROOO"
                    },
                    {
                        "type": "action",
                        "msg": "UPDATE:SUB:HEADER",
                        "target":"bad-dog-nav-subheader"
                    }
                ]
            }
    
        ],
        "toolbar":[
          {
            "id":"EditPage",
            "value":"EditPage",
            "actions":[
                {
                    "type": "action",
                    "target": "BadDogGridBody",
                    "msg": "EDIT:VISIBLE",
                    "visible":true
                }
            ]
          },
          {
            "id":"NewPage",
            "value":"NewPage",
            "actions":[
                {
                    "type": "action",
                    "target": "content-body",
                    "msg": "AROOO"
                }
            ]
          }
        ],
        "subHeader":{
            "init":{
                "id": "bad-dog-nav-subheader",
                "src": "BadDogHeader",
                "srcType": "module",
                "initModule": true,
                "modAtts":{
                  "headerObject":"",
                  "buttonProps":{
                    "colorScheme": "teal",
                    "variant": "ghost",
                    "_focus": {
                      "bg": "teal.50",
                      "border": "0px"
                    }
                  },
                  "dividerProps": {
                    "borderColor": "gray.200",
                    "key": "layout-divider"
                  },
                  "hStackProps": {
                    "spacing": "0px"
                  },
                  "vStackProps": {
                    "spacing": "0px",
                    "align":"left"
                  }
                },
                "modules": [
                  {
                    "name": "actions",
                    "src": "Actions",
                    "actions": [
                        
                    ]
                  }
                ]
              }
            
        }

      }
    
];
class BadDogHeaderModel extends BadDogBaseModel{//Both should extend a BaseModel / this should not extend ComponentModel 

    //temp function to easilly add docs
    //pass either an object or an array
    HackUpdate(filters, callback = undefined){//This is dangerfield
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
    hackCreate(filters, callback = undefined){
        console.log("createLayout Called?");
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        this.model.create(temp, callback); 
        return; 
    }

    //_id.toHexString()?? - try this
    findById(filters, callback = undefined){ 
        //console.log("findById BadDogHeaderModel 111111");
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        //console.log("findById BadDogHeaderModel 222222 "+filters);
        
        //let r = mongoose.Schema.Types.ObjectId; 
        //let t = new r (filters._id); 
        //this.model.findById(filters._id, callback);
        this.model.findOne(filters, callback);
    }
    
}

module.exports = BadDogHeaderModel;