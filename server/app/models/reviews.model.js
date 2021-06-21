const mongoose= require('mongoose');

const ReviewSchema = new mongoose.Schema({
   username: String,
   author: String,
   chef: {
      type: Schema.Types.ObjectId,
      ref: 'ChefSchema',
      required: true
   }
})

module.exports = mongoose.model('Review', ReviewSchema);