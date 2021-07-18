const Mongoose = require('mongoose');
//const ModelManager = require('./MongooseModelManager');
//const SchemaManager = require('./MongooseSchemaManager');


/*const componentModel = {
    load:[{
        id:"baddog-component-model",
        name:"baddog-component-model",
        src:"./model/BadDogComponentModel",
        model:"baddog-component-model",
        schema:"./../schema/BadDogComponentSchema"

    }]
    
}; 
const componentSchema = {
    load:[{
        id:"baddog-component-schema",
        name:"baddog-component-model",
        src:"./schema/BadDogComponentSchema"

    }]
    
};*/ 
//basic MongooseDB
class BasicMongoDB{//a single connection to a single DB split for more
	constructor(initObj){//I'm assuming we can have multiple for different reasons 
		
        this.connections = []; 

		
		//the only reason you couldn't do this here is because construct was loading things - it shouldn't now
		this.init(initObj);
	}
	init(initObj){
		
        //setup / func
        //Set up default mongoose connection
        var mongoDB = initObj.server+'/'+initObj.database;//Are you making a DB if not there?
        let connectionOptions = initObj.connectionOptions; 
        console.log("DB conn "+mongoDB);
        //mongoose.connect(mongoDB, { useNewUrlParser: true });
        //auto index disable for production!

        //connect to two instances - i.e. load balenced mongoDBs
        //mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);


        //need checks
        //this is the default connection
        //we need to pass an object of options
        this.defaultConnection = Mongoose.connect(mongoDB, connectionOptions);//.catch(error => handleError(error))
        this.connections.push(this.defaultConnection);

        //this and bind
        //const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);

        //mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);//connect to multiple servers / assume call again too?

        //create new connections to a seperate database 
        //const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);

        //Get the default connection
        var db = Mongoose.connection;

        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));//anything here but dispatch? 
        db.once('open', function() {
        // we're connected!
            console.log("We're connected to MongoDB web service");
        });


        //this.schemaManager = new SchemaManager(componentSchema);//not required
        //this.modelManager = new ModelManager(componentModel);
        
        //need to load mongoose models 

	}
    handleError(error){
        console.log("There was an error loading :( ");
    }
};

module.exports = BasicMongoDB;