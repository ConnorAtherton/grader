Template.showListView.modules = function () {
  return Modules.find({}, {sort: {name: 1}}).fetch();
}

Template.showListView.helpers({
  work: function (id) {
    return Work.find({module_id: id});
  }
});

Template.showListView.events({
  'click .listModule': function (evt, tmp) {
    var $module = $(evt.target).parent();

    if ($module.hasClass('open')) {
      $module.siblings('.listWork').addClass('hide');
      $module.removeClass('open');
      return;
    }
    $module.addClass('open');

    // hide all work
    $('listView').addClass('.hide');

    $module.siblings('.listWork').removeClass('hide');
  }
});
