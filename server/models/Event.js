const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const EVENT_MAX_DATE = "2024-01-01";

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
    
  }
  // startAt: {
  //   type: Date,
  //   required: true,
  //   validate: {
  //     validator: function (value) {
  //       const greaterThanToday = value > new Date() - 1000 * 60 * 60 * 26;
  //       const limitTo2023 = value < new Date(EVENT_MAX_DATE);
  //       return greaterThanToday && limitTo2023;
  //     },
  //   },
  // },
  // endAt: {
  //   type: Date,
  //   required: true,
  //   validate: {
  //     validator: function (value) {
  //       return value > this.startAt;
  //     },
  //     message: "should be greater than 'startAt' field",
  //   },
  // },
});

const Event = model('Event', eventSchema);

module.exports = Event;
