//https://mongoosejs.com/docs/models.html
//https://mongoosejs.com/docs/api.html#model_Model
const mongoose = require('mongoose');
const util = require('util');
//Document Model for a specific collection
//Need go through this and add flesh out with full functionality
//i.e. a full create, find, find list, delete, etc, etc  


//Base For all - clean this up!!!!!


class BadDogBaseModel{
	constructor(initObj){
		//this.lib = initObj.library;

        

        
        this.initObj = initObj;
        this.modelName = initObj.model; 
        this.schemaSrc = initObj.schema;
        //get schema from lib
        //would you ever pass down? 
        //would you ever want to load oneself? <- actually seems rather neat 
        
        //would we get connection via a connection library(all purpose library)

        console.log(this.modelName);
        //create a default error schema? 

        console.log("BadDogBaseModel Constructor - this.modelName "+this.modelName);
        console.log("BadDogBaseModel Constructor - this.schemaSrc "+this.schemaSrc);
        //Should be / Or also require Schema - We need to make a ModuleSchema, ComponentSchema, etc
        //this.schema = this.lib.getFile(this.modelSchema,"mongoose-schema");//pass in lib type
        this.schema = require(this.schemaSrc);//if and if
        //instead of mongoose use connection
        //feels like we need a connection component on DB
        this.model = mongoose.model(this.modelName, this.schema);//default connection
        //new model will return a document instance 
		//this.construct(this.initObj);
		
		this.init(this.initObj);
	}
	init(initObj){
        
        //We need to create a query module? - probably or several - stitch together 
        //or schema like and extend class stroke module
        //

        //would you specify a command or get etc on init? 
        //I think probably maybe / effectively command and filters

        //Add to lib here / ModelLoader prob should do this or at least specify
        //this.lib.addFile(initObj.jsonObj.id, '', 'mongoose-model', this);

        
    }
    //We are a template for all
    //we don't pass 'instances' we pass data and get data back in the form of actions to query or do with this template
    //effective messaging seems key 
    //get me this and return

    test(filters, callback = undefined){
        console.log("TEST FUNCTION CALLED");
        if(callback)callback(null,"TEST FUNCTION CALLED");
    }
    saveDocument(){//save model or doc / 
        this.model.save(function (err) {//what is - which document ? 
            if (err){ 
                console.log("Error Saving Document ");
                return this.handleError(err);
            }
            console.log('Saved doc');
        });
    }
    //Maybe 'dangerous' but I feel if all these take the same style then we can dynamic them
    //a whole set in one - I mean it's all going to be based on instruction or action
    createDocument(filters, callback = undefined){
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            //not returning anything...
            //it does all need going through
        };
        this.model.create(filters, callback); 
        return; 
        
    }
    handleError(err){
        console.log("ERROR "+err);
    } 
    newDocument(){
        //return new this.model
    }
    find(){

    }
    findById(filters, callback = undefined){ 
        console.log("So in here lll ll ");
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        console.log("So in here lll ll "+filters);
        this.model.findById(filters._id, callback);
    }
    findOne(filters, callback = undefined){//pass in callback? / callback = callback or
        let _this = this; 
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc '+doc );

            console.log("FILE DIR "+__dirname);
            
        };
        this.model.findOne(filters, callback);
    }
    replaceOne(filters, callback = undefined){
        let _this = this; 
        
        if(!callback)
        callback = function (err, doc) {
            if (err) return _this.handleError(err);
            console.log('Found doc no return callback'+doc );
            
        };
        this.model.replaceOne(filters.find,filters.update, callback);
    }
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
    insertMany(filters){
        //how do you work? / just insert an array of obs into the collection that the model represents
        this.model.insertMany([filters], function(err) {

        });
    }
    //Models have static deleteOne() and deleteMany() functions 
    //for removing all documents matching the given filter.
    deleteOne(filters){
        this.model.deleteOne(filters, function (err) {
            if (err) return handleError(err);
            console.log('Deleted 1 doc');
          });
    }
    deleteMany(filters){
        this.model.deleteOne(filters, function (err) {
            if (err) return handleError(err);
            console.log('Deleted at least 1 doc');
          });
    }
    //Each model has its own update method for modifying documents in the database 
    //without returning them to your application. See the API docs for more detail.
    updateOne(){
        //why two objects? I mean ...array but?
        //easy { find } { update }
        this.model.updateOne({ size: 'large' }, { name: 'T-90' }, function(err, res) {
            // Updated at most one doc, `res.modifiedCount` contains the number
            // of docs that MongoDB updated
          });
    }
    //this feels eventy
    //Change streams provide a way for you to listen to all inserts and updates going through your MongoDB database. 
    //Note that change streams do not work unless you're connected to a MongoDB replica set.
    watch(){
        this.model.watch().
        on('change', data => console.log(new Date(), data));
    }
};

module.exports = BadDogBaseModel;