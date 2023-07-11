import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Invite from '../src/pages/createInvite';
import LoggedIn from '../src/pages/userHome'
import CreatedEvents from '../src/pages/userInvites'
import NotFound from './pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route
              path="/userHome"
              element={<LoggedIn />}
            />
            <Route
              path="/userInvites"
              element={<CreatedEvents />}
            />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/createInvite"
              element={<Invite />}
            />
            <Route
              path="/Login"
              element={<Login />}
            />
            <Route
              path="/Signup"
              element={<Signup />}
            />
            <Route
              path="/Home"
              element={<Home />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
      

    </ApolloProvider>
    
  );
}

export default App;
