/** ------------------ IMPORTING MONGOOSE ------------------ **/
const mongoose = require('mongoose');

//Create Schema
const fileSchema = new mongoose.Schema({
  fileName: {
    type: String
  },
  filePath : {
    type:String
  },
  file: {
    type: String
  }
}, {
  timestamps: {
    options: { timeZone: 'Asia/Kolkata' }
  }
});




/** ------------------ MAKING MODEL ------------------ **/
const files = mongoose.model("files", fileSchema);

/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = files;