var React = require("react");

var SelectBox = React.createClass({
	handleChange: function(e) {
		this.props.actionType(e.target.value);
	},
	render: function() {
		return (
			<select 
				className={this.props.className}
				onChange={this.handleChange}
				disabled={this.props.disabledValue}
				id={this.props.infoType}
				ref="selector"
				value={this.props.currentVal}>
				{_.map(this.props.formOptions, function(option, i) {
          return <option key={i}>{option}</option>
        })}
			</select>
		);
	}
});

module.exports = SelectBox;