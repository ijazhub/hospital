const mongoose = require('mongoose');
const configuration = require('../util/makeConfig');
// const configuration = require('../config/config');
const makeDbConnection = () => {
	mongoose
		.connect(`${configuration.DATABASE.CONNECTION_URI}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('Connected with the database'))
		.catch((err) => {
			console.error('Something went wrong with it', err);
		});
	mongoose.Promise = global.Promise;
};
module.exports = makeDbConnection;
