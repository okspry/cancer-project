var React = require('react');
var GeneticAbnormalitySelector = require('./GeneticAbnormalitySelector');
var Radio = require('../../../common/Radio');

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var GeneticAbnormality = React.createClass({
	render: function() {    
		var disabledValue = this.props.yesNoValue == "yes" ? "" : "disabled";
		console.log(this.props.yesNoValue)
		return (

			<div className="panel panel-default">
			  <div className="panel-body">
			    <div className="form-group">
			      <label htmlFor="predisposition">Do you have a genetic or predisposing abnormality? (required)</label>
			      <br />
			      {
			      	_.map(this.props.yesNoOptions, function(option, i) {
			      		return <Radio 
			      							key={i} 
			      							onChange={this.handleClick} 
			      							value={option} 
			      							actionType={TreatmentHistoryActions.changeGeneticValue} />
			      	})
			      }
						<br />
			    </div>
		      <GeneticAbnormalitySelector
		      	yesNoValue={this.props.yesNoValue}
		      	typeValue={this.props.typeValue}
		      	actionType={TreatmentHistoryActions.changeGeneticType}
		      	geneticAbnormalityOptions={this.props.geneticAbnormalityTypes}
		      	disabledValue={disabledValue} />
			  </div>
			</div>

		)
	}
});

module.exports = GeneticAbnormality;