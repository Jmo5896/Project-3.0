const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GearSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
   completed: {
      type: Boolean,
      default: false
    },
    quantity_needed: {
      type: Number,
      required: true,
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
  const Gear = mongoose.model("Gear", GearSchema);
  
  // Export the Headline model
  module.exports = Gear;