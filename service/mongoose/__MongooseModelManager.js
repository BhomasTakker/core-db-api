//const MongooseModel = require('./../MongooseModel');


//Generic ModelLoader / 
class ModelLoader{
	constructor(initObj){
		
		this.initObj = initObj;
		this.init(this.initObj);//here??
		
	}
	init(initObj){
		
		console.log("ModelManager init "+initObj);
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
		const Model = require(libObj.src);//and from DB? / DB loader

        let model = new Model(libObj);

		/*modelFile.models.map((mod) => {
			
            //let schema = new MongooseModel(inObj);//currently adds itself to the library
			//we should probably add to the library
			console.log("MODEL LOADED "+schema);
		});*/

		
    };

};
module.exports=ModelLoader;