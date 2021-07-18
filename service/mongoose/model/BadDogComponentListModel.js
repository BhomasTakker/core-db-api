const mongoose = require('mongoose');
const util = require('util');

const BadDogBaseModel = require('./BadDogBaseModel');
//Document Model for a specific collection
//Need go through this and add flesh out with full functionality
//i.e. a full create, find, find list, delete, etc, etc  


//BadDogComponentModel

const temp = {
    "id":"BadDog:News:Main:UK",
    "description":"List of assets - load from DB, should load/check load? from DB",
    "assets":[
        {
          "_id": "60b5280646e76c32e0e41c6b",
          "id": "gridItem1",
          "description":""
        },
        {
          "_id": "60b5280646e76c32e0e41c6c",
          "id": "gridItem2"
        },
        {
          "_id": "60b5280646e76c32e0e41c73",
          "id": "gridItem9"
        },
        {
          "_id": "60b5280646e76c32e0e41c6d",
          "id": "gridItem3"
        },
        {
          "_id": "60b5280646e76c32e0e41c6f",
          "id": "gridItem5"
        },
        {
          "_id": "60b5280646e76c32e0e41c6e",
          "id": "gridItem4"
        },
        {
          "_id": "60b5280646e76c32e0e41c70",
          "id": "gridItem6"
        },
        {
          "_id": "60b5280646e76c32e0e41c71",
          "id": "gridItem7"
        },
        {
          "_id": "60b5280646e76c32e0e41c72",
          "id": "gridItem8"
        },
        {
          "_id": "60b5280646e76c32e0e41c73",
          "id": "gridItem9"
        },
        {
          "_id": "60b5280646e76c32e0e41c74",
          "id": "gridItem10"
        },
        {
          "_id": "60b5280646e76c32e0e41c75",
          "id": "gridItem11"
        },
        {
          "_id": "60b5280646e76c32e0e41c76",
          "id": "gridItem12"
        },
        {
          "_id": "60b5280646e76c32e0e41c77",
          "id": "gridItem13"
        },
        {
          "_id": "60b5280646e76c32e0e41c78",
          "id": "gridItem14"
        },
        {
          "_id": "60b5280646e76c32e0e41c79",
          "id": "gridItem15"
        },
        {
          "_id": "60b5280646e76c32e0e41c7a",
          "id": "gridItem16"
        },
        {
          "_id": "60b5280646e76c32e0e41c7b",
          "id": "gridItem17"
        }
      ]
}

class BadDogComponentListModel extends BadDogBaseModel{//Both should extend a BaseModel / this should not extend ComponentModel 

    //temp function to easilly add docs
    createList(filters, callback = undefined){
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
    //Overwriting because we need to change the other to convert to a 
    findById(filters, callback = undefined){ 
        console.log("findById 111111");
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        console.log("findById 222222 "+filters);
        
        //let r = mongoose.Schema.Types.ObjectId; 
        //let t = new r (filters._id); 
        //this.model.findById(filters._id, callback);
        this.model.findOne(filters, callback);
    }
    //Note to god damn / returns the UNUPDATED document probably want updateOne
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

module.exports = BadDogComponentListModel;