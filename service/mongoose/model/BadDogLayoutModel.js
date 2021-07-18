const mongoose = require('mongoose');
const util = require('util');

const BadDogBaseModel = require('./BadDogBaseModel');
//Document Model for a specific collection
//Need go through this and add flesh out with full functionality
//i.e. a full create, find, find list, delete, etc, etc  


//BadDogComponentModel

const temp = {
    columns:"12",
    rows:"12",
    height:100,
    grid:[
        [1,3,1,13, "gridItem1"],
        [3,7,1,7, "gridItem2"],
        [7,10,7,13, "gridItem3"],
        [10,13,1,13, "gridItem4"]
      ]
}

class BadDogLayoutModel extends BadDogBaseModel{//Both should extend a BaseModel / this should not extend ComponentModel 

    //temp function to easilly add docs
    createLayout(filters, callback = undefined){
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
}

module.exports = BadDogLayoutModel;