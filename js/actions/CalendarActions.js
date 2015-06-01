var AppDispatcher = require('../dispatcher/AppDispatcher');
var CalendarConstants = require('../constants/CalendarConstants');

var CalendarActions = {
  confirmDone: function(item) {
    AppDispatcher.handleAction({
      actionType: CalendarConstants.CONFIRM_DONE,
      item: item
    });
  },
  removeItem: function(item) {
    AppDispatcher.handleAction({
      actionType: CalendarConstants.REMOVE_ITEM,
      item: item
    });
  }
};

module.exports = CalendarActions;