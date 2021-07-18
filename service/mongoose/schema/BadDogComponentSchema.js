const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
//const BaseActionSchema = require('./ActionSchema');


//Would you specialise into particular Compponents? It might help with verification ?? 
const BaseComponentSchema = new Schema({
    //We probably want to get rid of id as a thing no? 
    name:mongoose.Schema.Types.String,
    id:mongoose.Schema.Types.String,
    src:mongoose.Schema.Types.String,
    
    modules:mongoose.Schema.Types.Array,

    modAtts:mongoose.Schema.Types.Mixed,
    
    comment:mongoose.Schema.Types.String
    

    //components:[mongoose.Schema.Types.ObjectId],
    //assets:[mongoose.Schema.Types.ObjectId],
    //modules:[mongoose.Schema.Types.ObjectId]
    
});
//BaseComponentSchema.add({modules:[BaseComponentSchema]});
//BaseComponentSchema.add({assets:[BaseComponentSchema]});
//BaseComponentSchema.add({actions:[mongoose.Schema.Types.Mixed]});//how you do this? / action probably ought to be a schema
//BaseComponentSchema.add({components:[BaseComponentSchema]});

/*
BaseComponentSchema.add({modules:[{
    type: Schema.Types.ObjectId,
    ref: 'Module'
  }]});
BaseComponentSchema.add({assets:[{
    type: Schema.Types.ObjectId,
    ref: 'Asset'
  }]});
  
BaseComponentSchema.add({components:[{
    type: Schema.Types.ObjectId,
    ref: 'Component'
  }]});
  */
//I swear to God we can add everything here 
//actions perhaps, attributes, extends, lists?, etc

//this would make the most generic schema possible
//to be fair if we did core:{name:'', id:''} & module:{root:''}
//all of this can be taken from a database
//when create take a 'physical' copy of the full json 
module.exports = BaseComponentSchema;