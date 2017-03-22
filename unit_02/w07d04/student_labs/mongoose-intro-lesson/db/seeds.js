var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

StudentModel.remove({}, function(err){
  console.log(err);
});

ProjectModel.remove({}, function(err) {
  console.log(err);
});

var becky = new StudentModel({name: "becky"});
var brandon = new StudentModel({name: "brandon"});
var steve = new StudentModel({name: "steve"});

var project1 = new ProjectModel({title: "project 1!", unit: "js"});

var project2 = new ProjectModel({title: "project 2!", unit: "express"});
var project3 = new ProjectModel({title: "project 3!", unit: "angular"});

var project4 = new ProjectModel({title: "project 4!", unit: "rails"});

var students = [becky, brandon, steve];
var projects = [project1, project2, project3, project4];


students.forEach(function(student, i) {
  student.projects.push(projects[i], projects[i + 1]);

  student.save(function(err) {
    if(err) { console.log(err); }

  });
});
