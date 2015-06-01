var React = require("react");

var SelectBox = React.createClass({
	handleChange: function() {
		this.props.ActionSource.changeSelector(this.props.currentVal, this.refs.selector.getDOMNode().value);
	},
	render: function() {
		return (
			<select 
				className={this.props.className}
				onChange={this.handleChange}
				disabled={this.props.disabledValue}
				ref="selector"
				value={this.props.value}>
				{_.map(this.props.data, function(datum, i) {
            return <option key={i}>{datum}</option>
        })}
			</select>
		);
	}
});

module.exports = SelectBox;