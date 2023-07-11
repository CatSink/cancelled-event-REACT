const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]
  }

  input UserData {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Event {
    _id: ID
    eventDescription: String
    eventLocation: String
  }

  input EventData {
    _id: ID
    eventTitle: String
    eventDescription: String
    date: 

  }

  type eventResponse {
    success: Boolean
    event: Event
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(eventId: ID!): Event
    me: User
    }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(event: EventData): eventResponse
  }
`;

module.exports = typeDefs;
