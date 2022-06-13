const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User"
    },
    productId: {
        type: ObjectId,
        ref: "product"
    },

    amount: {
        type: Number,
        required: true
    },
    isFreeAppUser: {
        type:Boolean

    }

})
module.exports=mongoose.model("order",orderSchema)