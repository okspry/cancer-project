var React = require('react');
var StatusUpdater = require('./StatusUpdater');
var FeedItems = require('./FeedItems');

var FeedStore = require('../../stores/FeedStore');

function getData() {
  return { 
  	feedItems: FeedStore.getStatuses(),
  	newStatus: FeedStore.getNewStatusTemplate()
  }
}

var Home = React.createClass({
	getInitialState: function() { 
		return getData();
	},
	componentWillMount: function() {
    FeedStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getData());
  },
  componentWillUnmount: function() {
    FeedStore.removeChangeListener(this._onChange);
  },
	render: function() {
		return (

			<div className="clearfix">
				<div>
					<StatusUpdater newStatus={this.state.newStatus} />
					<FeedItems feedItems={this.state.feedItems} />
				</div>
			</div>

		)
	}
});

module.exports = Home;