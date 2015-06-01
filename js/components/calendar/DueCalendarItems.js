var React = require('react');
var CalendarWidget = require('./CalendarWidget');
var Appointment = require('./Appointment');


var DueCalendarItems = React.createClass({
	render: function() {
		return (

			<table className="table table-hover" id="due-appointments">
				<thead>
	        <tr>
	          <th width="50%">Appointment Type</th>
	          <th width="50%">Recommended Date</th>
	        </tr>
	       </thead>
	       <tbody>
	      	{
	      		_.map(this.props.dueCalendarItems, function(dueCalendarItem, i) {
	        		return <Appointment key={i} dueCalendarItem={dueCalendarItem} classAttr="datarow" />
	        	})
	      	}
	      </tbody>
    	</table>

		)
	}
});

module.exports = DueCalendarItems;