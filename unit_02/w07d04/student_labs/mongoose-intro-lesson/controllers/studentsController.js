var Schema = require("../db/schema.js");
// Want access to these two models
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

// creating an index key
var studentsController = {
    index: function() {
      StudentModel.find({})
          .exec(function(err, docs) {
              if(err) { console.log(err); }

              docs.forEach(function(doc){
                console.log(doc);
              })
          });
    },
    // line 21 function gets two parameters
    show: function(req) {
        StudentModel.findOne({"name": req.name})
          .exec(function(err, docs) {
              if(err) { console.log(err); }

              console.log(docs);
          });
    }
    // not done
    update: function(req, update) {
        StudentModel.findOneAndUpdate({"name": req.name}, {name:
          update.name}, (function(err, docs) {
              if(err) { console.log(err); }

              console.log(docs);
          });
    }
};
// calling students Controller
studentsController.index();
studentsController.show({name: "becky"});
