const mongoose=require( 'mongoose');

const CONSTANTS=require('../shared/constants");

mongoose.connect{CONSTANTS.mongoDBUrl+ CONSTANTS.mongoDBPort+ CONSTANTS.mongodbDBName}.then(()=>{
console.log("Connection created...");
}).catch(err=>{
console.log("Connection not created..", err);
})