"use strict";
app.factory('jobFactory', ['$http', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/jobs').success(function(res){
			callback(res);
		});
	};

	factory.show = function(id, callback){
		$http.get('/jobs/' + id).success(function(res){
			callback(res);
		});
	};

	factory.create = function(postData, callback){
		$http.post('/jobs', postData)
			.success(function(res){
				callback(res);
			});
	};

	factory.update = function(postData, callback){
		$http.post('/jobs/update', postData)
			.success(function(res){
				callback(res);
			});
	};

	factory.destroy = function(id, callback){
		console.log(id);
		$http.get('/jobs/' + id + '/delete').success(function(res){
			callback(res);
		});
	};

	return factory;
}]);
