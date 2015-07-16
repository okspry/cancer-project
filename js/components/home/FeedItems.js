var React = require('react');
var FeedItem = require('./FeedItem');

var FeedItems = React.createClass({
	render: function() {
		return (

			<ul className="media-list">
				{
					_.map(this.props.feedItems, function(feedItem, i) {
						return <FeedItem key={i} feedItem={feedItem} index={i} />
					})
				}
			</ul>

		)
	}
});

module.exports = FeedItems;