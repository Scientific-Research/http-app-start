import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Raven from 'raven-js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Raven.config(
	'https://608141e72283bc15bbc702e6a53a2609@o4505755723628544.ingest.sentry.io/4505755742765056',
	{
		release: 'myapp@1.3.0',
		environment: 'development-test',
	}
).install();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
