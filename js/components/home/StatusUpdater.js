var React = require('react');

var StatusUpdater = React.createClass({
	render: function() {
		return (

      <form className="form">
        <div className="form-group">
        	<div className="panel panel-default">
        		<div className="panel-body">
        			<textarea className="form-control" placeholder="Share your thoughts..."></textarea>
        		</div>
        		<div className="panel-footer clearfix">
        			<div className="btn btn-primary btn-sm pull-right">
        				Post
        			</div>
        		</div>
        	</div>
        </div>
      </form>

		)
	}
});

module.exports = StatusUpdater;