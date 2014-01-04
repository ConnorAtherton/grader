Template.work.events({
  'dblclick .workEditName': function(evt, tmp) {
    Session.set('selectedWork', this._id);
    Session.set('editing_work_name', this._id);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#work-name-input'));
  },
  'dblclick .workEditWeight': function(evt, tmp) {
    Session.set('selectedWork', this._id);
    Session.set('editing_work_weight', this._id);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#work-weight-input'));
  },
  'dblclick .workEditMark': function(evt, tmp) {
    Session.set('selectedWork', this._id);
    Session.set('editing_work_mark', this._id);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#work-mark-input'));
  }

});

Template.work.events(okCancelEvents(
  '#work-name-input',
  {
    ok: function (value) {

      // grab input value and update the work collection

      console.log('pressed enter', Session.get('selectedWork'));
      Session.set('editing_work_name', null);
      Session.set('selectedWork', null);
    },
    cancel: function () {
      console.log('pressed escape');
      Session.set('editing_work_name', null);
      Session.set('selectedWork', null);
    }
  }));

Template.work.events(okCancelEvents(
  '#work-weight-input',
  {
    ok: function (value) {

      // grab input value and update the work collection

      console.log('pressed enter', Session.get('selectedWork'));
      Session.set('editing_work_weight', null);
      Session.set('selectedWork', null);
    },
    cancel: function () {
      console.log('pressed escape');
      Session.set('editing_work_weight', null);
      Session.set('selectedWork', null);
    }
  }));

Template.work.events(okCancelEvents(
  '#work-mark-input',
  {
    ok: function (value) {

      // grab input value and update the work collection

      console.log('pressed enter', Session.get('selectedWork'));
      Session.set('editing_work_mark', null);
      Session.set('selectedWork', null);
    },
    cancel: function () {
      console.log('pressed escape');
      Session.set('editing_work_mark', null);
      Session.set('selectedWork', null);
    }
  }));


Template.work.editingName = function () {
  return Session.equals('editing_work_name', this._id);
};

Template.work.editingWeight = function () {
  return Session.equals('editing_work_weight', this._id);
};

Template.work.editingMark = function () {
  return Session.equals('editing_work_mark', this._id);
};

var activateInput = function (input) {
  input.focus();
  input.select();
};
