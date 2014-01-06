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
  },
  'click .deleteWork' : function(evt, tmp) {
    Work.remove(this._id);
  }

});

Template.work.events(okCancelEvents(
  '#work-name-input',
  {
    ok: function (value) {

      // grab input value and update the work collection
      Work.update({_id: this._id}, { $set: { name: value }});

      Session.set('editing_work_name', null);
      Session.set('selectedWork', null);
    },
    cancel: function () {
      Session.set('editing_work_name', null);
      Session.set('selectedWork', null);
    }
  }));

Template.work.events(okCancelEvents(
  '#work-weight-input',
  {
    ok: function (value) {

      // grab input value and update the work collection
      Work.update({_id: this._id}, { $set: { weight: value }});

      Session.set('editing_work_weight', null);
      Session.set('selectedWork', null);
    },
    cancel: function () {
      Session.set('editing_work_weight', null);
      Session.set('selectedWork', null);
    }
  }));

Template.work.events(okCancelEvents(
  '#work-mark-input',
  {
    ok: function (value, evt, selector) {

      // if the string is not a number it is null
      value = isNumber(value) ? value : null;

      // grab input value and update the work collection
      Work.update({_id: this._id}, { $set: { mark: value }});

      Session.set('editing_work_mark', null);
      Session.set('selectedWork', null);
    },
    cancel: function () {
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
