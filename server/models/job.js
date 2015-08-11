var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/applicationTracker");

autoIncrement.initialize(connection);

var JobSchema = new mongoose.Schema({
	id: {type: Number, required: true},
	applied_on: {type: Date, default: Date.now},
	job_name: {type: String, trim: true},
	job_url: {type: String, trim: true},
	priority: {type: String, trim: true},
	recruiter_name: {type: String, trim: true},
	hiring_manager_name: {type: String, trim: true},
	followed_up: {type: Boolean, default: false},
	followed_up_date: {type: Date}
});

JobSchema.plugin(autoIncrement.plugin, {model: 'Job', field: 'id'});

mongoose.model('Job', JobSchema);
JobSchema.path('job_name').required(true, "Job name is required");
JobSchema.path('job_url').required(true, "Job URL is required");