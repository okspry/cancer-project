var FriendDispatcher = require('../dispatcher/FriendDispatcher');
var FriendConstants = require('../constants/FriendConstants');

var FriendActions = {
  deleteFriend: function(friend) {
    FriendDispatcher.dispatch({
      actionType: FriendConstants.DELETE_FRIEND,
      friend: friend
    });
  }
};

module.exports = FriendActions;