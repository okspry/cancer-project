var React = require('react');
var CalendarWidget = require('./CalendarWidget');

var Calendar = React.createClass({
	render: function() {
		return (

			<CalendarWidget calendarItems={this.props.calendarItems} />

		)
	}
});

module.exports = Calendar;