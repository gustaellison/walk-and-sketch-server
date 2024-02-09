const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    date: { type: String, required: true },
    _tour: { type: Schema.Types.ObjectId, ref: 'Tour', required: true },
    _users: { type: Schema.Types.ObjectId, ref: "User", required: true }
    }, { timestamps: true })

    ticketSchema.index({ date: 1, _tour: 1, _users: 1 });


module.exports = mongoose.model("Ticket", ticketSchema)