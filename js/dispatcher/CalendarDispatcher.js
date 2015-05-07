var Dispatcher = require('flux').Dispatcher;
var CalendarDispatcher = new Dispatcher();

CalendarDispatcher.dispatch({
	source: 'HIGHLIGHT_DUE',
	action: 'action'
});

module.exports = CalendarDispatcher;