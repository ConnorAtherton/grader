////////////////////////////////////////////////////////////
// Modal template
////////////////////////////////////////////////////////////
"use strict";

Template.modal.rendered = function () {
  var form = $('#addModuleParsley');
  form.parsley();
  console.log(form.length);
};

Template.modal.events({
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

  'click .addWork': addWork

});

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
        work = Work.find({module_id: id});

    return work;
  }
})

function saveModule(evt, tmp) {

  evt.preventDefault();

  $('#addModuleParsley').parsley('validate');

  if (!$( '#addModuleParsley' ).parsley( 'isValid' )) {
    console.log('Is not valid');
    return;
  }

  // check for errors
  // get form variables
  var name = tmp.find('input.moduleName').value,
      weight = tmp.find('input.moduleWeight').value,
      mark = tmp.find('input.moduleMark').value,
      shortCode = tmp.find('input.moduleShort').value,
      incomplete = tmp.find('.incomplete'),
      user = Meteor.user();

  // wrap node in jquery so when can use .is()
  incomplete = $(incomplete);

  if(incomplete.is(':checked')) {
    // no mark
    mark = null;
  }

      Modules.insert({
        name: name,
        user_id: user._id,
        weight: weight,
        mark: mark,
        shortCode: shortCode,
      });

      // reset the session
      resetSession();

      // close the modal
      $(evt.target).closest('#viewModule')
                      .modal('hide');
}

function addWork(evt, tmp) {

  evt.preventDefault();

  $('#addWorkParsley').parsley('validate');

  if (!$( '#addWorkParsley' ).parsley( 'isValid' )) {
    console.log('Is not valid');
    return;
  }

  // get form variables
  var name = tmp.find('input.workName').value,
      weight = tmp.find('input.workWeight').value,
      mark = tmp.find('input.workMark').value,
      incomplete = tmp.find('.incomplete'),
      user = Meteor.user();

  // wrap node in jquery so when can use .is()
  incomplete = $(incomplete);

  if (incomplete.is(':checked')) {
    // incomplete mark
    mark = null;
  }
  else if (mark === '') {
    // no mark
    mark = null;
  }

  Work.insert({
    user_id: user._id,
    module_id: this._id,
    name: name,
    weight: weight,
    mark: mark
  })

}

function resetSession() {
  Session.set('viewingModule');
  Session.set('creatingModule');
  Session.set('selectedModule');
}
