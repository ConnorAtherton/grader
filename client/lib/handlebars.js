Handlebars.registerHelper('isNull', function (value) {
  return (value === null) ? 'Not complete' : value + '%';
});

Handlebars.registerHelper('workData', function(context, options) {
    var keys = _.keys(this.work.workData),
        data = _.toArray(this.work.workData);

    for (var i = 0; i < data.length; i++) {
        data[i].name = keys[i];
    }

    return data;
});

Handlebars.registerHelper('notComplete', function() {
  if(!Meteor.user())
    return true;

  return !Meteor.user().questionsComplete;
});

