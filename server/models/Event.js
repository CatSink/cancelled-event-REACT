const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  eventInvitees: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  eventTime: {
    type: String,
  },
  eventLocation: {
    type: String
  },
  eventOutfit: {
    type: String
  },
  eventPrice: {
    type: String
  },
  eventCancelWindow: {
    type: String
  },
  eventMessage: {
    type: String
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;
