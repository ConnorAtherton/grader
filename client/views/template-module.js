Template.module.events({
  'dblclick .moduleEditMark': function(evt, tmp) {
    Session.set('editing_module_weight', null);
    Session.set('editing_module_mark', this._id);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#module-mark-input'));
  },

  'dblclick .moduleEditWeight': function(evt, tmp) {
    Session.set('editing_module_weight', this._id);
    Session.set('editing_module_mark', null);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#module-weight-input'));
  }
});

Template.module.events(okCancelEvents(
  '#module-mark-input',
  {
    ok: function (value) {

      // CREATE GLOBAL VALIDATE FILE
      value = (value <= 100 && value >= 0 && isNumber(value)) ? value : null;

      // grab input value and update the work collection
      Modules.update({_id: this._id}, { $set: { mark: value }});

      Session.set('editing_module_mark', null);
    },
    cancel: function () {
      Session.set('editing_module_mark', null);
    }
  })
)

Template.module.events(okCancelEvents(
  '#module-weight-input',
  {
    ok: function (value) {

      // CREATE GLOBAL VALIDATE FILE
      value = isNumber(value) ? value : null;

      // grab input value and update the work collection
      Modules.update({_id: this._id}, { $set: { weight: value }});

      Session.set('editing_module_weight', null);
    },
    cancel: function () {
      Session.set('editing_module_weight', null);
    }
  })
);

Template.module.editingModuleWeight = function () {
  return Session.equals('editing_module_weight', this._id);
};

Template.module.editingModuleMark = function () {
  return Session.equals('editing_module_mark', this._id);
};

