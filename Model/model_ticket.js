import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    intitule : {type : String, required : true},
    description : {type : String, required : true},
    deadline : {type : Date, required : true},
    etat : {
        type : String,
        enum : ['open','closed'],
        default : 'open'},
    attachment: {type : String, required : false},
    remarks: {type : String, required : false}
})

const ticket = mongoose.model("Ticket", ticketSchema)

export default ticket ; 