import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      events {
        _id
        eventInvitees
        eventDate
        eventTime
        eventLocation
        eventOutfit
        eventPrice
        eventCancelWindow
        eventMessage
        eventCreator
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      events {
        _id
        eventInvitees
        eventDate
        eventTime
        eventLocation
        eventOutfit
        eventPrice
        eventCancelWindow
        eventMessage
        eventCreator
      }
    }
  }
`;