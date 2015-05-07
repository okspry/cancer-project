var React = require('react');
var SelectBox = require('../common/SelectBox');

var StatusUpdater = React.createClass({
	render: function() {
		return (

      <form className="form" id="status-update-form">
        <div className="form-group">
        	<div className="panel panel-default">
        		<div className="panel-body">
        			<textarea className="form-control" placeholder="Share your thoughts..."></textarea>
        		</div>
        		<div className="panel-footer clearfix">
              <div className="pull-right">
                <span>Share with&ensp;</span>
                <SelectBox data="friend" />
          			<input type="submit" className="btn btn-primary btn-sm" value="Post" />
              </div>
        		</div>
        	</div>
        </div>
      </form>

		)
	}
});

module.exports = StatusUpdater;