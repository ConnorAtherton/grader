"use strict"

////////////////////////////////////////////////////////////
// Modal template
////////////////////////////////////////////////////////////

Template.modal.rendered = function () {

}

Template.modal.events({
  'click #saveChanges': function (evt) {
    var $form = $('#manage-roles-form');

    console.log('Save the changes');
  },

  'click .closeModuleView': function() {
    $('#viewModule').modal('hide')

    Session.set('viewingModule', false);
    Session.set('creatingModule', false);
  },

  'click .closeModuleCreate': function() {
    $('#viewModule').modal('hide')

    Session.set('creatingModule', false);
    Session.set('viewingModule', false);
  },

  'click .saveModule': saveModule,

  'click .addWork': addWork,

})

Template.modal.helpers({
  module: function () {
    var moduleId = Session.get('selectedModule'),
        module = Modules.findOne({_id: moduleId});

    return module;
  },

  viewingModule: function() {
    return Session.get('viewingModule');
  },

  creatingModule: function() {
    return Session.get('creatingModule');
  },

  work: function() {
    // get current module
    var id = Session.get('selectedModule'),
        module = Modules.findOne({_id: id});

    var _names = _.keys(module.work.workData),
        _array = _.toArray(module.work.workData);

    for( var i = 0 ; i < _array.length; i++) {
      _array[i].name = _names[i];
    }

    return _array;
  }
})

function saveModule(evt, tmp) {

  // get form variables
  var name = tmp.find('input.moduleName').value,
      weight = tmp.find('input.moduleWeight').value,
      mark = tmp.find('input.moduleMark').value,
      incomplete = tmp.find('.incomplete');

  // wrap node in jquery so when can use .is()
  incomplete = $(incomplete);

  if(incomplete.is(':checked')) {
    // no mark
    mark = null;
  }

  /**

        TODO:
        - vALIDATE ALL input boxes
      **/

      var user = Meteor.user();

      Modules.insert({
        name: name,
        user_id: user._id,
        work: {
          name: name,
          weight: weight,
          overallMark: mark,
          workData: {}
        }
      })

      // close the modal
      $(evt.target).closest('#viewModule')
                      .modal('hide');

}

function addWork(evt, tmp) {

  // get form variables
  var name = tmp.find('input.workName').value,
      weight = tmp.find('input.workWeight').value,
      mark = tmp.find('input.workMark').value;

  var curWork = this.work.workData;

  curWork[name] = {
    'weight': weight,
    'mark': mark
  };

  var obj = {
    name : this.work.name,
    weight: this.work.wright,
    overallMark: this.work.overallMark,
    workData: curWork
  }

  Modules.update(this._id, { $set: { work: obj } });
}
