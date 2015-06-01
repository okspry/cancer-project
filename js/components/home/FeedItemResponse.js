var React = require('react');

var FeedItemResponse = React.createClass({
	render: function() {
		return (

			<li className="media feed-item">
        <div>
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={this.props.feedItemResponse["pictureURL"]} alt={this.props.feedItemResponse["userID"] + "'s Picture"} width="30" height="30" />
            </a>
          </div>
          <div className="media-body">
            <h5 className="media-heading">{this.props.feedItemResponse["userID"]}<small>&emsp;{this.props.feedItemResponse["timestamp"]}</small></h5>
            <p>{this.props.feedItemResponse["content"]}</p>
          </div>
        </div>
      </li>

		)
	}
});

module.exports = FeedItemResponse;