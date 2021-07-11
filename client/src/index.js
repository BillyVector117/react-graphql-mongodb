import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// GraphQL dependencies
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks' // Wrap App

// Define GraphQL client Provider to wrap all application, then 
// generate a new conection to GraphQL-API
const client = new ApolloClient({
  uri: 'http://localhost:3100/'
})
// All application (App component) will have access at GraphQL-API
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
