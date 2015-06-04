var React = require('react');
var SelectBox = require('./SelectBox');

var SelectorGroup = React.createClass({
	render: function() {
		return (

			<div className="form-group">
			  <label htmlFor={this.props.infoType}>{this.props.label}</label>
			  <SelectBox 
			  	{...this.props}
			  	className="form-control" />
			</div>
			
		)
	}
});

module.exports = SelectorGroup;