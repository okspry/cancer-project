var AppDispatcher = require('../dispatcher/AppDispatcher');
var FeedConstants = require('../constants/FeedConstants');

var FeedActions = {
	changeStatus: function(message) {
    AppDispatcher.handleAction({
      actionType: FeedConstants.CHANGE_STATUS,
      message: message
    });
  },
  changeShare: function(newValue) {
    AppDispatcher.handleAction({
      actionType: FeedConstants.CHANGE_SHARE,
      newValue: newValue
    });
  },
  post: function(item) {
    AppDispatcher.handleAction({
      actionType: FeedConstants.POST,
      item: item
    });
  },
  newTemplate: function() {
    AppDispatcher.handleAction({
      actionType: FeedConstants.NEW_TEMPLATE
    });
  },
  changeComment: function(index, comment) {
    AppDispatcher.handleAction({
      actionType: FeedConstants.CHANGE_COMMENT,
      comment: comment,
      index: index
    });
  },
  postComment: function(index, item) {
    AppDispatcher.handleAction({
      actionType: FeedConstants.POST_COMMENT,
      item: item,
      index: index
    });
  },
  clearCommentTemplate: function(index) {
    AppDispatcher.handleAction({
      actionType: FeedConstants.CLEAR_COMMENT_TEMPLATE,
      index: index
    });
  }
};

module.exports = FeedActions;