const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const Comments = new Schema ({
    title: {
        type: String
    },
    body: {
        type: String
    },
    author: Schema.Types.ObjectId,
    ref: "User"

})

const Comment = mongoos.model("Comment", CommentSchema);
module.export = Comment; 