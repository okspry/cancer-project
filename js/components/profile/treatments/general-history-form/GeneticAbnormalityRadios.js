var React = require('react');

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var GeneticAbnormalityRadios = React.createClass({
	handleClick: function() {
		TreatmentHistoryActions.changeSelector(this.props.checkerValue, this.refs.buttons.getDOMNode().label);
	},
	render: function() {
		return (

			<div className="form-group">
	      <label htmlFor="predisposition">Do you have a genetic or predisposing abnormality? (required)</label>
	      <br />
	      <label className={this.props.classes}>
	        <input 
	        	ref="rad"
	        	type="radio" 
	        	name="options"
	        	defaultChecked="defaultChecked" />
	        	No
	      </label>
	      <label className={this.props.classes}>
	        <input 
	        	ref="rad"
	        	type="radio" 
	        	name="options" />
	        	Yes
	      </label>
	    </div>

		)
	}
});

module.exports = GeneticAbnormalityRadios;