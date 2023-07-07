const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  eventTitle: {
    type: String,
    required: 'Give your plans a name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  eventDescription: {
    type: String,
    required: 'Let your friend(s) know the plan!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  eventCreator: {
    type: String,
    required: true,
    trim: true,
  },
  invitees: {
    type: String,
    required: true,
  },
  {
    
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;
