var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.dispatch({
	source: 'DELETE_FRIEND',
	action: 'action'
});

module.exports = AppDispatcher;