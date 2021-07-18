const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BaseHeaderSchema = new Schema({
    
    buttons:mongoose.Schema.Types.Array,
    toolbar:mongoose.Schema.Types.Array,
    subHeader:mongoose.Schema.Types.Mixed
    
    
});

module.exports = BaseHeaderSchema;