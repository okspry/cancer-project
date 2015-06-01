var React = require('react');
var TextBox = require('../common/TextBox');
var SelectBox = require('../common/SelectBox');
var PostButton = require('../common/PostButton');

var FeedStore = require('../../stores/FeedStore');

function newStatus() {
  return { newStatus: FeedStore.getNewStatusTemplate() }
}

var StatusUpdater = React.createClass({
  getInitialState: function() {
    return newStatus();
  },
  componentWillMount: function() {
    FeedStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(newStatus());
  },
  componentWillUnmount: function() {
    FeedStore.removeChangeListener(this._onChange);
  },
	render: function() {
		return (

      <form className="form" id="status-update-form">
        <div className="form-group">
        	<div className="panel panel-default">
        		<div className="panel-body">
        			<TextBox newItem={this.state.newStatus} />
        		</div>
        		<div className="panel-footer clearfix">
              <div className="pull-right">
                <span>Share with&ensp;</span>
                <SelectBox data="friend" />
          			<PostButton newItem={this.state.newStatus} />
              </div>
        		</div>
        	</div>
        </div>
      </form>

		)
	}
});

module.exports = StatusUpdater;