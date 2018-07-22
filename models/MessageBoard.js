const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageBoardSchema = new Schema({
  comments: {
    type: String
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
  //Admin and user connecting
});

// Create the Headline model using the headlineSchema
const MessageBoard = mongoose.model("MessageBoard", MessageBoardSchema);

// Export the Headline model
module.exports = MessageBoard;