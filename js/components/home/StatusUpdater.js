var React = require('react');
var TextBox = require('../common/TextBox');
var SelectBox = require('../common/SelectBox');
var PostButton = require('../common/PostButton');

var FeedActions = require('../../actions/FeedActions');

var StatusUpdater = React.createClass({
	render: function() {
		return (

      <form className="form" id="status-update-form">
        <div className="form-group">
        	<div className="panel panel-default">
        		<div className="panel-body">
        			<TextBox 
                placeholder="Share your thoughts..."
                content={_.get(this.props.newStatus, "content")}
                actionType={FeedActions.changeStatus} />
        		</div>
        		<div className="panel-footer clearfix">
              <div className="pull-right">
                <span>Share with&ensp;</span>
                <SelectBox actionType={FeedActions.changeShare} formOptions={this.props.newStatus["shareWith"]} />
          			<PostButton 
                  label="Post"
                  actionPost={FeedActions.post} 
                  actionNewTemplate={FeedActions.newTemplate} 
                  item={this.props.newStatus} />
              </div>
        		</div>
        	</div>
        </div>
      </form>

		)
	}
});

module.exports = StatusUpdater;