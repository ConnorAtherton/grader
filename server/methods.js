Meteor.methods({
  insertQuestions: function (obj) {
    obj['timestamp'] = new Date().valueOf();
    Evaluations.insert(obj);
  }
})
