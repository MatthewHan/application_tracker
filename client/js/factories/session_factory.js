'use strict';
app.factory('sessionFactory', function(){
	var factory = {};
	var job = {};

	factory.setJob = function(jobInfo){
		console.log('in set job');
		job = jobInfo;
	};
	
	factory.getJob = function(callback){
		console.log('in get job');
			callback(job);
	};
	return factory;
});