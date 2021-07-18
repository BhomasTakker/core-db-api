//const MongooseModel = require('./../MongooseModel');


//Generic ModelLoader / 
class SchemaLoader{
	constructor(initObj){
		
		this.initObj = initObj;
        //ref to schemas
        this.schemas = {}; 
		this.init(this.initObj);//here??
		
	}
	init(initObj){
		
		console.log("SchemaManager init "+initObj);
		//this.initialise();//here or called by base?
		this.loadFiles(initObj.load);//load array of models
	}
	loadFiles(ary){
        ary.map((lObj) => {
            this.loadFile(lObj);
        });
    }
    loadFile(lObj){
        //let res = require(lObj.src);
        let libObj = {...lObj};
		//this.initObj.library.addFile(libObj.id, libObj.src, libObj.type, require(libObj.src));//I mean checks!!
		
		//should add to lib
		const Schema = require(libObj.src);//and from DB? / DB loader

        //You don't new Schema - you just add this schema when creating a model
        this.schemas[libObj.id] = Schema;
        
		
    };

};
module.exports=SchemaLoader;