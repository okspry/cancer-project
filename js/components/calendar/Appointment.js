var React = require('react');
var MarkComplete = require('./MarkComplete');

var Appointment = React.createClass({
	render: function() {
		return (

      <tr dueCalendarItem={this.props.dueCalendarItem} className={this.props.classAttr}>
        <td width="50%">{this.props.dueCalendarItem["type"]}</td>
        <td width="50%" className="clearfix">
          <span className="pull-left">{this.props.dueCalendarItem["date"]}&emsp;</span>
          <MarkComplete dueCalendarItem={this.props.dueCalendarItem} />
        </td> 
      </tr>

		)
	}
});

module.exports = Appointment;