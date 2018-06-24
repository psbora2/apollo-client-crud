import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from 'react-router-dom'
import client from './store/client'


ReactDOM.render(	<ApolloProvider client={client}>
								    <Router>
								      <App/>
								    </Router>
								  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
