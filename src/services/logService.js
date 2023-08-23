import Raven from 'raven-js';

function init() {
	Raven.config(
		'https://608141e72283bc15bbc702e6a53a2609@o4505755723628544.ingest.sentry.io/4505755742765056',
		{
			release: 'myapp@1.3.0',
			environment: 'development-test',
		}
	).install();
}

function log(error) {
	Raven.captureException(error);
}

export default {
	init,
	log,
};
