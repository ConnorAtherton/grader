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

  'click .moduleTitle': function(evt) {
    var $module,
        moduleId;

    evt.preventDefault();

    $module = $(evt.target).closest('.module')
    moduleId = $module.attr('data-id')

    console.log('we are trying to view module ' + moduleId);

    // set session variables
    Session.set('selectedModule', moduleId);
    Session.set('viewingModule', true);
    Session.set('creatingModule', false);

    $('.content-inner > #viewModule').modal()

  },

  'click .createModule': function() {
    Session.set('creatingModule', true);
    Session.set('viewingModule', false);
    console.log('we are trying to create a module');
    // Short delay to let things settle before displaying the modal.
    Meteor.setTimeout(function(){
      $('#viewModule').modal('show')
    }, 100)
  }
});

Template.showDashboard.modules = function () {
  return Modules.find({}, {sort: {name: 1}}).fetch();
};

Template.showDashboard.rendered = function () {
  // reset all session variables
};


