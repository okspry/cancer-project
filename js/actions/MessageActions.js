var AppDispatcher = require('../dispatcher/AppDispatcher');
var MessageConstants = require('../constants/MessageConstants');

var MessageActions = {
	changeRecipient: function(newValue) {
    AppDispatcher.handleAction({
      actionType: MessageConstants.CHANGE_RECIPIENT,
      newValue: newValue
    });
  },
	changeSubject: function(newValue) {
    AppDispatcher.handleAction({
      actionType: MessageConstants.CHANGE_SUBJECT,
      newValue: newValue
    });
  },
  changeMessage: function(newValue) {
    AppDispatcher.handleAction({
      actionType: MessageConstants.CHANGE_MESSAGE,
      newValue: newValue
    });
  },
  send: function(item) {
    AppDispatcher.handleAction({
      actionType: MessageConstants.SEND,
      item: item
    });
  },
  newTemplate: function() {
    AppDispatcher.handleAction({
      actionType: MessageConstants.NEW_TEMPLATE
    });
  },
  selectThread: function(index) {
    AppDispatcher.handleAction({
      actionType: MessageConstants.SELECT_THREAD,
      index: index
    });
  }
};

module.exports = MessageActions;