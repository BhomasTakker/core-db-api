const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
//const BaseActionSchema = require('./ActionSchema');

///leave simple for now
//need add sub schema conataining list of _ids for attempts 
const DBAssetSchema = new Schema({
    id:mongoose.Schema.Types.String,
    description:mongoose.Schema.Types.String
});
const BaseComponentListSchema = new Schema({
    
    id:mongoose.Schema.Types.String,
    description:mongoose.Schema.Types.String,
    assets:mongoose.Schema.Types.Array
});

module.exports = BaseComponentListSchema;