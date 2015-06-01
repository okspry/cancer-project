var React = require('react');
var CalendarWidget = require('./CalendarWidget');
var DueCalendarItems = require('./DueCalendarItems');

var CalendarStore = require('../../stores/CalendarStore');

function dueCalendarItems() {
	return { dueCalendarItems: CalendarStore.getDueCalendarItems() }
}

var Calendar = React.createClass({
	getInitialState: function() {
		return dueCalendarItems();
	},
	componentWillMount: function() {
		CalendarStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(dueCalendarItems());
	},
	componentWillUnmount: function() {
		CalendarStore.removeChangeListener(this._onChange);
	},
	render: function() {
		var showDue = <div>
									  <DueCalendarItems dueCalendarItems={this.state.dueCalendarItems} />
									</div>;

		var showNone = <div className="up-to-date">
		                 <span>You are up to date.</span>
									 </div>

		var test = this.state.dueCalendarItems.length != 0 ? showDue : showNone;

		return (

			<div className="clearfix">
				<h4>Upcoming Appointments</h4>
        {test}
      	<CalendarWidget />
      </div>

		)
	}
});

module.exports = Calendar;