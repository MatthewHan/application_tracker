var Job = mongoose.model('Job');

module.exports = (function() {
	return {
		index: function(request, response){
			Job.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					response.json(results);
				}
			});
		},
		
		new: function(request, response){
			console.log("Server / Ctrl / Users - New");
		},
		
		create: function(request, response){
			console.log("Server / Ctrl / Users - Create");
			var newJob = new Job(request.body);
			newJob.save(function(err, user){
				if(err){
					response.json(err);
				}
				else{
					response.json({success:true});
				}
			});
		},
		
		edit: function(request, response){
			console.log("Server / Ctrl / Users - Edit");
		},
		
		update: function(request, response){
			Job.findOneAndUpdate(
				{id:request.body.id}, 
				request.body, 
				{upsert:true}, 
				function(err, result){
					if(err){
						console.log(err);
					} else {
						console.log(result);
						response.json(result);
					}
				
			});
		},

		show: function(request, response){
			Job.findOne({id: request.params.id}, function(err, result){
				if(err){
					response.json(err);
				} else {
					response.json(result);
				}
			});
		},

		destroy: function(request, response){
			Job.find({id: request.params.id})
				.remove()
				.exec(function(err, resp){
					if(err){
						console.log(err);
					} else {
						console.log(resp);
						response.json(resp);
					}
				});
		}
	};
})();