var React = require('react');
var CalendarWidget = require('./CalendarWidget');
var Appointment = require('./Appointment');

var Calendar = React.createClass({
	render: function() {
		var tempCalendarItems = _.map(this.props.calendarItems, function(d) { return _.values(d)[0] });
		tempCalendarItems = _.flatten(tempCalendarItems);
		tempCalendarItems = _.sortBy(tempCalendarItems, function(d) {
			return new Date(d["date"])
		});
		var calendarItems = [];
		var today = new Date();
		var threeMosAgo = addMonths(new Date(), -3); 
		var threeMosFromNow = addMonths(new Date(), +3);
		function addMonths(date, months) {
		  date.setMonth(date.getMonth() + months);
		  return date;
		}
		_.map(tempCalendarItems, function(d) {
			var thisDate = new Date(d["date"]).getTime();
			if(thisDate > threeMosAgo && thisDate < threeMosFromNow) {
				return calendarItems.push(d)
			}
		});
		return (

			<div className="clearfix">
        <h4>Appointments To Schedule</h4>
        <table className="table table-hover">
          <tr>
            <th>Appointment Type</th>
            <th>Recommended Date</th> 
          </tr>
	      	{
	      		_.map(calendarItems, function(calendarItem, i) {
	        		return <Appointment key={i} calendarItem={calendarItem} />
	        	})
	      	}
      	</table>
      	<CalendarWidget calendarItems={this.props.calendarItems} />
      </div>

		)
	}
});

module.exports = Calendar;