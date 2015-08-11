app
.controller('MainController', function($scope, taskFactory) {
	var that = this;
	that.tasks = [];

	taskFactory.getTasks(function(data){
		that.tasks = data;
	});

	that.addTask = function(){
		that.newTask.createdAt = new Date();
		that.tasks.push(that.newTask);
		that.newTask = {};
	};

	that.removeTask = function(task){
		that.tasks.splice(that.tasks.indexOf(task), 1);
	};
});