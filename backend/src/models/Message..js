// mongoose section
import { Schema, model } from 'mongoose';
// Model Schema for Messages
const MessageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
})
export default model('Message', MessageSchema)