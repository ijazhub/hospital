	const config = {
		development: {
			configId: 'development',

			DATABASE: {
				CONNECTION_URI: 'mongodb://localhost/HospitalManagementSystem',
				HOST_NAME: 'localhost'
			},
			APP: {
				PORT: process.env.PORT || 4000,
				NAME: 'GOOD DEED MANAGEMENT SYSTEM',
				PROXY: 'http://172.17.2.218:8085'
			}
		}
	};
	module.exports = config;
