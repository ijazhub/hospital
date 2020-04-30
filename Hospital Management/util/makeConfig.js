const config = require('../config/config.js');

const makeConfiguration = () => {
	if (process.env.NODE_ENV === 'production') {
		return config.production;
	} else {
		return config.development;
	}
};
const configuration = makeConfiguration();
module.exports = configuration;
