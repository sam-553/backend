const { Schema } = require("mongoose")

const myschema = new Schema({
    item_id: { type: String, unique: true },
    item_name: String,
    item_price: String,
    offer: Boolean,

})
module.exports = model('product', myschema)