var React = require('react');

var Aside = React.createClass({
	render: function() {
		return (

			<div className="pull-left col-sm-3 panel panel-default">
				<div className="panel-body">Here is some information about communities around town.</div>
			</div>

		)
	}
});

module.exports = Aside;