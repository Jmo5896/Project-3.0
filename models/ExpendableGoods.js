const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpendableGoodsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  comments: {
    type: String
  },
 completed: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number
  },
  quantity_needed: {
    type: Number,
    min: [1, 'please enter a quantity']
  },
  quantity_actual: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  Admin_id: {
    type: Schema.Types.ObjectId,
    ref: 'Admin'
  }
  
});

// Create the Headline model using the headlineSchema
const ExpendableGoods = mongoose.model("ExpendableGoods", ExpendableGoodsSchema);

// Export the Headline model
module.exports = ExpendableGoods;
