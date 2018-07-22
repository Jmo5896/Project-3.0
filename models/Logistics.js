const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogisticsSchema = new Schema({
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
const Logistics = mongoose.model("Logistics", LogisticsSchema);

// Export the Headline model
module.exports = Logistics;