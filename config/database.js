module.exports = {
	// the database url to connect
	//url : 'mongodb://ranji2612:war10ck_dev@kahana.mongohq.com:10063/app28446989'
	//url: 'mongodb://localhost:27017/poll'
	url: 'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT + '/' + process.env.OPENSHIFT_APP_NAME
  
	
	
}
