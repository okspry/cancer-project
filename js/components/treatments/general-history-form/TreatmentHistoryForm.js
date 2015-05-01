var React = require('react');

var TreatmentHistoryForm = React.createClass({
	render: function() {
		return (

			<div className="col-md-8">
				<h2>Document Treatment</h2>
				<form data-toggle="validator" role="form">

				<div className="form-group">
				  <label htmlFor="cancer-type">Type of Cancer (required)</label>
				  <select className="form-control" id="cancer-type" required>
				    <option value="Colon Cancer">Colon Cancer</option>
				  </select>
				</div>

				<div className="form-group">
				  <label htmlFor="cancer-stage">Stage of Cancer (required)</label>
				  <select className="form-control" id="cancer-stage" required>
				    <option>Cancer Stage 2</option>
				  </select>
				  <span className="help-block with-errors">Please, do the thing</span>
				</div>

				<div className="form-group">
				  <label htmlFor="date-of-diagnosis">Date of Diagnosis</label>
				  <input type="date" className="form-control" id="date-of-diagnosis" />
				</div>

				<div className="panel panel-default">
				  <div className="panel-body">
				    <div className="form-group">
				      <label htmlFor="predisposition">Do you have a genetic or predisposing abnormality? (required)</label>
				      <br />
				      <div className="btn-group" data-toggle="buttons" required>
				        <label className="btn btn-primary active">
				          <input type="radio" name="options" id="option1" autocomplete="off" checked />I'm not sure
				        </label>
				        <label className="btn btn-primary">
				          <input type="radio" name="options" id="option2" autocomplete="off" /> No
				        </label>
				        <label className="btn btn-primary">
				          <input type="radio" name="options" id="option3" autocomplete="off" /> Yes
				        </label>
				      </div>
				    </div>
				    <div className="form-group">
				      <label htmlFor="specific-predisposition">If yes, what?</label>
				      <select className="form-control" id="specific-predisposition" required disabled>
				        <option></option>
				        <option>Inflammatory Bowel Disease</option>
				      </select>
				    </div>
				  </div>
				</div>

				<div className="well">
				  <label>Primary Care Doctor's Information</label>
				  <div className="form-group">
				    <label htmlFor="pcp-name">Name</label>
				    <input type="text" className="form-control" id="pcp-name" placeholder="First Last" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="pcp-number">Phone Number</label>
				    <input type="phone" className="form-control" id="pcp-number" placeholder="(555)555-55555" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="pcp-email">Email</label>
				    <input type="email" className="form-control" id="pcp-email" placeholder="jackrobin21@health.org" />
				  </div>
				</div>

				<div className="form-group">
				  <button type="submit" className="btn btn-primary">Save Changes</button>
				  <button type="button" className="btn">Cancel Changes</button>
				  <button type="button" className="btn btn-danger pull-right">Delete Record</button>
				</div>

				</form>
			</div>

		)
	}
});

module.exports = TreatmentHistoryForm;