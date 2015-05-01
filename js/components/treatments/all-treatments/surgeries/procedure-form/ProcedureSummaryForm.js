var React = require('react');

var ProcedureSummaryForm = React.createClass({
  render: function() {
    return (

      <div>
        <h2>Document a Procedure</h2>
        <form data-toggle="validator" role="form">

          <div className="form-group">
            <label htmlFor="date-of-surgery">Date of Surgery</label>
            <input type="date" className="form-control" id="date-of-surgery" />
          </div>

          <div className="well">
            <label>Institution's Information</label>
            <div className="form-group">
              <label htmlFor="institution-name">Hospital or Clinic Name</label>
              <input type="text" className="form-control" id="institution-name" placeholder="Hospital Health" />
            </div>
            <div className="form-group">
              <label htmlFor="institution-town">City/Town</label>
              <input type="text" className="form-control" id="institution-town" placeholder="Townsville" />
            </div>
            <div className="form-group">
              <label htmlFor="institution-state">State</label>
              <select className="form-control" id="institution-state">
                <option>IN</option>
              </select>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-group">
                <label htmlFor="surgery-type">Type of surgery</label>
                <div required>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option1" autocomplete="off" /> Colostomy or ileostomy
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option2" autocomplete="off" /> Lymph node removal/dissection 
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option3" autocomplete="off" /> Right colectomy
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option3" autocomplete="off" /> Sigmoid colectomy
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option3" autocomplete="off" /> Low anterior resection
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option3" autocomplete="off" /> Abdominal perineal resection 
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option3" autocomplete="off" /> Subtotal colectomy  
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="options" id="option3" autocomplete="off" /> Total proctocolectomy 
                    </label>
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <input type="checkbox" aria-label="Other surgery type" />
                    </span>
                    <input type="text" className="form-control" aria-label="Other surgery type" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="well">
            <label>Surgeon's Information</label>
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

          <div className="form-group clearfix">
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" className="btn">Cancel Changes</button>
            <button type="button" className="btn btn-danger pull-right">Delete Record</button>
          </div>

        </form>
      </div>

    )
  }
});

module.exports = ProcedureSummaryForm;