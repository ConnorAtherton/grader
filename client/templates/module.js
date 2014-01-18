Template.module.events({
  'dblclick .moduleEditMark': function(evt, tmp) {
    Session.set('editing_module_mark', null);
    Session.set('editing_module_weight', null);
    Session.set('editing_module_mark', this._id);
    Session.set('editing_module_shortCode', null);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#module-mark-input'));
  },

  'dblclick .moduleEditWeight': function(evt, tmp) {
    Session.set('editing_module_mark', null);
    Session.set('editing_module_weight', this._id);
    Session.set('editing_module_mark', null);
    Session.set('editing_module_shortCode', null);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#module-weight-input'));
  },

  'dblclick .moduleEditName': function(evt, tmp) {
    Session.set('editing_module_name', this._id);
    Session.set('editing_module_weight', null);
    Session.set('editing_module_mark', null);
    Session.set('editing_module_shortCode', null);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#module-name-input'));
  },

  'dblclick .moduleEditShort': function(evt, tmp) {
    Session.set('editing_module_name', null);
    Session.set('editing_module_weight', null);
    Session.set('editing_module_mark', null);
    Session.set('editing_module_shortCode', this._id);

    Deps.flush() // force dom redraw so we can focus the edit field
    activateInput(tmp.find('#module-short-input'));
  }
});

Template.module.events(okCancelEvents(
  '#module-name-input',
  {
    ok: function (value) {

      // CREATE GLOBAL VALIDATE FILE
      // maybe regexp to make sure there is letters?

      // grab input value and update the work collection
      Modules.update({_id: this._id}, { $set: { name: value }});

      Session.set('editing_module_name', null);
    },
    cancel: function () {
      Session.set('editing_module_name', null);
    }
  })
)

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

Template.module.events(okCancelEvents(
  '#module-short-input',
  {
    ok: function (value) {

      // grab input value and update the work collection
      Modules.update({_id: this._id}, { $set: { shortCode: value }});

      Session.set('editing_module_shortCode', null);
    },
    cancel: function () {
      Session.set('editing_module_shortCode', null);
    }
  })
);

Template.module.editingModuleName = function () {
  return Session.equals('editing_module_name', this._id);
};

Template.module.editingModuleWeight = function () {
  return Session.equals('editing_module_weight', this._id);
};

Template.module.editingModuleMark = function () {
  return Session.equals('editing_module_mark', this._id);
};

Template.module.editingModuleShort = function () {
  return Session.equals('editing_module_shortCode', this._id);
};

