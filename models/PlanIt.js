const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanItSchema = new Schema({
  title: {
    type: String,
    
  },
  location: {
    type: String,
    
  },
  members: {
    type: Array,
    ref: 'User'
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
const PlanIt = mongoose.model("PlanIt", PlanItSchema);

// Export the Headline model
module.exports = PlanIt;