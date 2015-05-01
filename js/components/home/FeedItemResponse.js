var React = require('react');

var FeedItemResponse = React.createClass({
	render: function() {
		return (

			<div className="panel-footer clearfix">
        <ul className="media-list feed-subitems clearfix">
          <li className="media feed-item">
            <div>
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src="../../../assets/ken_photo.jpg" alt="Ken's Picture" width="30" height="30" />
                </a>
              </div>
              <div className="media-body">
                <h5 className="media-heading">Ken Spry<small>&emsp;Just a little later</small></h5>
                <p>You are wrong. Try another!</p>
              </div>
            </div>
          </li>
          <li className="media feed-item">
            <div>
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src="../../../assets/jer_bear_photo.jpg" alt="Jeremy's Picture" width="30" height="30" />
                </a>
              </div>
              <div className="media-body">
                <h5 className="media-heading">Jeremy Leventhal<small>&emsp;Even later</small></h5>
                <p>I will not. I have had enough.</p>
              </div>
            </div>
          </li>
          <li className="media feed-comment">
          	<div className="separator">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src="../../../assets/jer_bear_photo.jpg" alt="Jeremy's Picture" width="30" height="30" />
                </a>
              </div>
              <div className="media-body">
                <form>
                	<div className="form-group-sm">
		              	<input className="form-control" placeholder="Comment&hellip;" />
		              </div>
		            </form>
              </div>
            </div>
          </li>
        </ul>
      </div>

		)
	}
});

module.exports = FeedItemResponse;