var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  email: { type: String, trim: true },
  password: { type: String, trim: true },
  salt: { type: String, trim: true },
  auth_token: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);
UserSchema.path('first_name').required(true, "First Name is required");
UserSchema.path('last_name').required(true, "Last Name is required");
UserSchema.path('email').required(true, "Email is required");
UserSchema.path('password').required(true, "Password is required");


var JobSchema = new mongoose.Schema({
	applied_on: {type: Date, default: Date.now},
	job_name: {type: String, trim: true},
	job_url: {type: String, trim: true},
	priority: {type: String, trim: true},
	recruiter_name: {type: String, trim: true},
	hiring_manager_name: {type: String, trim: true},
	followed_up: {type: Boolean, default: false},
	followed_up_date: {type: Date}
});

mongoose.model('Job', JobSchema);
JobSchema.path('job_name').required(true, "Job name is required");
JobSchema.path('job_url').required(true, "Job URL is required");