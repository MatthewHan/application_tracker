app.controller('sessionsController', ['sessionFactory', function(sessionFactory) {
	var that = this;
	that.job = {};

	sessionFactory.getJob(function(job){
		that.job = job;
		console.log(that.job);
	});
}]);