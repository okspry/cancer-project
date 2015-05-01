var Dispatcher = require('flux').Dispatcher;
var FriendDispatcher = new Dispatcher();

FriendDispatcher.dispatch({
	source: 'DELETE_FRIEND',
	action: 'action'
});

module.exports = FriendDispatcher;