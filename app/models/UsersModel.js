const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    id: { type: String, required: true },
    dni: { type: String, required: true },
    name: { type: String, required: true, maxlength: 25 },
    last_name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    phone: { type: Number },
    status: { type: Boolean, default: true },
    type: { type: Boolean, default: true },
    token: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Users', UsersSchema);