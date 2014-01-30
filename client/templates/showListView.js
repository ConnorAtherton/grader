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
    var $module = $(evt.target).parent(),
        id = $module.data('id');

    if ($module.hasClass('open')) {
      $('.' + id).addClass('hide');
      $module.removeClass('open');
      return;
    }

    $module.addClass('open');

    $('.' + id).removeClass('hide');

  }
});
