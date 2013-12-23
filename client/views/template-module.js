// Template.module.events({
//   'click .deleteModule': function (evt, tmp) {
//     // delete the module
//     console.log(this._id);
//     Modules.remove(this._id);
//   },

//   'click .editModule': function (evt, tmp) {
//     // fill the title of the module
//     $(tmp).find('#moduleModal').modal();
//   },

//   'click .updateModule': function (evt, tmp) {
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
