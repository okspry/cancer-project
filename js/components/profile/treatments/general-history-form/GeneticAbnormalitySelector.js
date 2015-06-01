var React = require('react');
var SelectBox = require('../../../common/SelectBox');

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var GeneticAbnormalitySelector = React.createClass({
	render: function() {
		return (

			<div className="form-group">
			  <label htmlFor="specific-predisposition">If so, what is it?</label>
			  <SelectBox
			  	disabledValue={this.props.disabledValue}
			  	ActionSource={TreatmentHistoryActions}
			  	className="form-control"
			  	currentVal={this.props.currentVal} 
			  	data={this.props.geneticAbnormalityOptions} />
			</div>

		)
	}
});

module.exports = GeneticAbnormalitySelector;