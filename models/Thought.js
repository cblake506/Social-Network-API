const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //character limit
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    userName: {
      type: String,
      required: true,
    },
    // reactions: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'reactionSchema',
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
