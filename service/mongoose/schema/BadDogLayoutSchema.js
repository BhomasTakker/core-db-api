const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
//const BaseActionSchema = require('./ActionSchema');

///for Model Layout
const BaseLayoutSchema = new Schema({
    
    columns:mongoose.Schema.Types.Number,
    rows:mongoose.Schema.Types.Number,
    height:mongoose.Schema.Types.Number,
    grid:mongoose.Schema.Types.Array

});

module.exports = BaseLayoutSchema;