var React = require('react');
var FeedItem = require('./FeedItem');

var FeedStore = require('../../stores/FeedStore');

function feedItems() {
  return { feedItems: FeedStore.getStatuses() }
}

var FeedItems = React.createClass({
	getInitialState: function() { 
		return feedItems();
	},
	componentWillMount: function() {
    FeedStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(feedItems());
  },
  componentWillUnmount: function() {
    FeedStore.removeChangeListener(this._onChange);
  },
	render: function() {
		return (

			<ul className="media-list">
				{
					_.map(this.state.feedItems, function(feedItem, i) {
						return <FeedItem key={i} feedItem={feedItem} index={i} />
					})
				}
			</ul>

		)
	}
});

module.exports = FeedItems;