const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    events: [Event]
  }

  type Event {
    eventInvitees: String
    eventDate: String
    eventTime: String
    eventLocation: String
    eventOutfit: String
    eventPrice: String
    eventCancelWindow: String
    eventMessage: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    events(email: String): [Event]
    event(eventId: ID!): Event
    me: User
    }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(
      eventInvitees: String, 
      eventDate: String, 
      eventTime: String,
      eventLocation: String,
      eventOutfit: String,
      eventPrice: String,
      eventCancelWindow: String,
      eventMessage: String
      ): Auth
  }
`;

module.exports = typeDefs;
