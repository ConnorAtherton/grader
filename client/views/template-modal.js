// Template.modal.events({
//   'click .saveWork': function(evt, tmp) {
//     console.log(this);
//     // get form variables
//     var name = tmp.find('input.workName').value,
//         weight = tmp.find('input.workWeight').value,
//         mark = tmp.find('input.workMark').value;

//     var curWork = this.work.workData;

//     curWork[name] = {
//       'weight': weight,
//       'mark': mark
//     };

//     Modules.update(this._id, {$set: {work: {workData: curWork} } });
//   }
// });

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
  }

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
  }
})
