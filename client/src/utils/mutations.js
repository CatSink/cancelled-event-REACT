import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $eventInvitees: String
    $eventDate: String
    $eventTime: String
    $eventLocation: String
    $eventOutfit: String
    $eventPrice: String
    $eventCancelWindow: String
    $eventMessage: String
    ) {addEvent(
      eventInvitees: $eventInvitees
      eventDate: $eventDate
      eventTime: $eventTime
      eventLocation: $eventLocation
      eventOutfit: $eventOutfit
      eventPrice: $eventPrice
      eventCancelWindow: $eventCancelWindow
      eventMessage: $eventMessage
      ) {
      event {
        id
        
      }
    }
  }
`;