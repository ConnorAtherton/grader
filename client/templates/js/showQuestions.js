var selectQuestions = ["1", "3", "4", "5", "6", "7"],
    textQuestion = ["2", "8", "9"];

var responseObj = {};

Template.showQuestions.rendered = function () {
};

Template.showQuestions.complete = function () {
  if(!Meteor.user())
    return false;

  return Meteor.user().questionsComplete;
}

Template.showQuestions.events({
  'click button': gatherData
});

function gatherData() {
  responseObj['user_id'] =  Meteor.userId();

  getTextareaAnswers();
  getSelectAnswers();

  responseObj['optionShown'] = Session.get('evaluation');

  // insert the evaluations object with the user_id
  Meteor.call('insertQuestions', responseObj);
  // add the questionsComplete prop on user obj
  Meteor.users.update({_id: Meteor.userId()}, {$set: {questionsComplete: true }});
}

function getTextareaAnswers() {
  textQuestion.forEach(function(value, index) {
        var str = ".question-" + value;
        grabTextValue(str, value);
  });
}

function getSelectAnswers() {
  selectQuestions.forEach(function(value, index) {
        var str = ".question-" + value;
        grabInputValues(str, value);
  });
      responseObj['user_id'] =  Meteor.userId();
}

function grabTextValue(name, key) {
  var value = $(name).find('textarea').val(),
      key = name.substring(1, name.length);

  return value ? responseObj[key] = value : responseObj[key] = null;
}

function grabInputValues(name, key) {
  var radio = $(name).find('input[type=radio]:checked').attr("value"),
      key = name.substring(1, name.length);

  return radio ? responseObj[key] = radio : responseObj[key] = null;
}
