app.controller('MainController', ['jobFactory', 'sessionFactory', '$location', function(jobFactory, sessionFactory, $location) {
	var that = this;
	that.jobs = [];
	that.job = {};

	that.index = function(){
		jobFactory.index(function(res){
			that.jobs = res;
		});
	};

	that.index();

	that.show = function(id){
		that.job = {};
		jobFactory.show(id, function(res){
			sessionFactory.setJob(res);
			$location.path('/jobs/show');
		});
	};

	that.create = function(){
		jobFactory.create(that.job, function(){
			that.index();
			$location.path('/jobs');
		});
	};

	that.update = function(){
		sessionFactory.getJob(function(job){
			jobFactory.update(job, function(res){
				$location.path('/');
			});
		});
	};

	that.destroy = function(id){
		jobFactory.destroy(id, function(res){
			console.log(res);
			that.index();
		});
	};
}]);