'use strict';
module.exports = function(app) {
  	var jobs = require('../controllers/jobs.js');

// User
    // Index
	app.get('/jobs', function(request, response) { jobs.index(request, response); });
	// New
	app.get('/jobs/new', function(request, response) { jobs.create(request, response); });
	// Show
	app.get('/jobs/:id', function(request, response) { jobs.show(request, response); });
	// Edit 
	app.post('/jobs/:id/edit', function(request, response) { jobs.update(request, response); });
	// Create
	app.post('/jobs', function(request, response) { jobs.create(request, response); });	
	// Destroy app.delete('/jobs/:id')
	app.get('/jobs/:id/delete', function(request, response) { jobs.destroy(request, response); });
	// Update app.put/patch('/jobs/:id') 
	app.post('/jobs/update', function(request, response) { jobs.update(request, response); });



// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/jobs');
	});
	app.post('/*', function(request, response){
		response.redirect('/jobs');
	});

};