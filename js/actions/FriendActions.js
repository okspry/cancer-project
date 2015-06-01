var AppDispatcher = require('../dispatcher/AppDispatcher');
var FriendConstants = require('../constants/FriendConstants');

var FriendActions = {
  deleteFriend: function(evt) {

    AppDispatcher.dispatch({
      actionType: FriendConstants.DELETE_FRIEND,
      friend: evt
    });

  }
};

module.exports = FriendActions;