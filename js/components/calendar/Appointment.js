var React = require('react');

var Appointment = React.createClass({
	render: function() {
		return (

      <tr>
        <td>{this.props.calendarItem["type"]}</td>
        <td className="clearfix">
          <span className="pull-left">{this.props.calendarItem["date"]}&emsp;</span>
          <button className="btn btn-primary btn-sm pull-right">Mark Completed</button>
        </td> 
      </tr>

		)
	}
});

module.exports = Appointment;