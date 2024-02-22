import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    intitule : {type : String, required : true},
    description : {type : String, required : true},
    deadline : {type : Date, required : true},
    etat : {
        type : String,
        enum : ['open','closed'],
        default : 'open'},
    attachment : {
        fileName: {type: String},
        filePath: {type: String},
        fileType: {type: String}
    },
    remarks: {type : String, required : false, default : ''}
})

const ticket = mongoose.model("Ticket", ticketSchema)

export default ticket ; 