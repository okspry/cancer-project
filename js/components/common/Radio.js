var React = require('react');

var TreatmentHistoryActions = require('../../actions/TreatmentHistoryActions');

var Radio = React.createClass({
	handleChange: function(e) {
		TreatmentHistoryActions.changeValue(e.target.value);
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