Template.showDashboard.events({
  'click .createModal': function (evt, tmp) {

    // get modules name
    var name = tmp.find('input.name').value;

    if(name.trim() === '')
      return;

    var user = Meteor.user();

    Modules.insert({
      name: name,
      user_id: user._id,
      work: {
        name: name,
        weight: tmp.find('input.weight').value,
        overallMark: tmp.find('input.mark').value,
        workData: {}
      }
    })

    $(tmp).find('#createModal').modal();

    tmp.find('input.name').value = '';

  },

  'click .icon-pencil': function(evt) {
    var $module,
        moduleId;

    evt.preventDefault();

    $module = $(evt.target).closest('.module')
    moduleId = $module.attr('data-id')

    // set session variables
    Session.set('selectedModule', moduleId);
    Session.set('viewingModule', true);
    Session.set('creatingModule', false);

    Meteor.setTimeout(function(){
      $('#viewModule').modal('show')
    }, 100)

  },

  'click .createModule': function() {
    Session.set('creatingModule', true);
    Session.set('viewingModule', false);

    // Short delay to let things settle before displaying the modal.
    Meteor.setTimeout(function(){
      $('#viewModule').modal('show')
    }, 100)

  },

  'click .deleteModule': function() {
    Modules.remove(this._id);
  },

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
  },

  'click .showModuleInfo': showModuleInfo,
});

Template.showDashboard.events(okCancelEvents(
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
  }));

Template.showDashboard.events(okCancelEvents(
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

Template.work.events(okCancelEvents(
  '#module-weight-input',
  {
    ok: function (value) {

      // grab input value and update the work collection
      Modules.update({_id: this._id}, { $set: { weight: value }});

      Session.set('editing_module_weight', null);
    },
    cancel: function () {
      Session.set('editing_module_weight', null);
    }
  })
)

Template.showDashboard.modules = function () {
  return Modules.find({}, {sort: {name: 1}}).fetch();
};

Template.showDashboard.rendered = function () {
  // reset all session variables
};

Template.showDashboard.editingModuleWeight = function () {
  return Session.equals('editing_module_weight', this._id);
};

Template.showDashboard.editingModuleMark = function () {
  return Session.equals('editing_module_mark', this._id);
};

function showModuleInfo(evt, tmp) {
  var info = tmp.find('#moduleInfo');
  $(info).toggle(1);
}


