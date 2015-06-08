var React = require('react');

var Radio = React.createClass({
	handleChange: function(e) {
		this.props.actionType(e.target.value);
	},
	render: function() {
		return (

			<span>
  			<label>
					<input
						onChange={this.handleChange} 
						type="radio" 
						name="geneticPredisposingAbnormality" 
						value={this.props.value} />
					&ensp;{_.capitalize(this.props.value)}
				</label>
				&emsp;
			</span>

		)
	}
});

module.exports = Radio;