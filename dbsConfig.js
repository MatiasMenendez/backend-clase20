import mongoose from "mongoose";

//MONGODB CONFIG
const URL = 'mongodb://localhost:27017/ecommerce'

export const db = mongoose.connect(URL, {
 useNewUrlParser: true
})

const chatSchema = new mongoose.Schema({
    author: {type: Object, required: true },
    text: {type: String, required: true},
    time: {type: String, required: true}
}, {
    versionKey: false 
})

export const msgsModel = mongoose.model("Msgs", chatSchema);


