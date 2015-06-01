var React = require('react');
var Radio = require('./Radio');

var ButtonGroup = React.createClass({
	render: function() {
		return (

			<div className="btn-group" data-toggle="buttons" required>
				{
					_.map(this.props.checkOptions, function(checkOption, i) {
						var defaultChecked = checkOption == "No" ? "defaultChecked" : "";
						return <Radio key={i} 
													ref="button"
													clicker={this.props.handleClick}
													defaultChecked={defaultChecked} 
													label={checkOption} />
					})
				}
      </div>

		)
	}
});

module.exports = ButtonGroup;