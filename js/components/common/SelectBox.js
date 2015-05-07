var React = require("react");

var SelectBox = React.createClass({
	render: function() {
		return (
			<select 
				className={this.props.className}
				ref="selector" 
				onChange={this.props.update} 
				onBlur={this.props.update}
				data={this.props.data}
				value={this.props.value}>
				{_.map(this.props.data, function(datum) {
            return <option key={datum}>{datum}</option>
        })}
			</select>
		);
	}
});

module.exports = SelectBox;