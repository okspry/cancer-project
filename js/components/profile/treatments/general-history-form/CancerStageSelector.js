var React = require('react');
var SelectBox = require('../../../common/SelectBox');

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var CancerStageSelector = React.createClass({
	render: function() {
		return (

			<div className="form-group">
			  <label htmlFor="cancer-type">Type of Cancer (required)</label>
			  <SelectBox 
			  	ActionSource={TreatmentHistoryActions}
			  	className="form-control"
			  	currentVal={this.props.currentVal} 
			  	data={this.props.cancerStages} />
			</div>
		)
	}
});

module.exports = CancerStageSelector;