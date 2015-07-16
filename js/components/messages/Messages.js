var React = require('react');
var ThreadItem = require('./ThreadItem');
var ComposeMessage = require('./ComposeMessage');
var CurrentThread = require('./CurrentThread');

var MessageActions = require('../../actions/MessageActions');
var MessageStore = require('../../stores/MessageStore');

function getData() {
  return { 
  	threads: MessageStore.getThreads(),
  	currentThread: MessageStore.getCurrentThread(),
  	newThread: MessageStore.getMessageTemplate()
  }
}

var Messages = React.createClass({
	getInitialState: function() {
		return getData();
	},
  componentWillMount: function() {
    MessageStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getData());
  },
  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this._onChange);
  },
  showComposer: function() {
  	messageComposerVisibility = {display: "block"};
  },
  showThread: function() {
  	messageComposerVisibility = {display: "none"};
  },
	render: function() {
		var smallMargin = { marginTop: "8px" };
		var messageComposerVisibility = { backgroundColor: '#f00', display: 'none' };
		return (

			<div>
				
				<div className="container pull-left col-md-4">
					<div className="clearfix">
						<h5 className="pull-left">
							Inbox
						</h5>
						<div className="btn btn-default btn-sm pull-right" onClick={this.showComposer}>Compose Message</div>
					</div>
					<hr style={smallMargin} />
					<ul className="media-list">
						{
							_.map(this.state.threads, function(thread, i) {
								return <ThreadItem
													key={i} 
													thread={thread} 
													index={i}
													actionType={MessageActions.selectThread}
													onClick={this.showThread} />
							})
						}
					</ul>
				</div>

				<div className="col-md-7 pull-left">
					<ComposeMessage 
						style={messageComposerVisibility} 
						newThread={this.state.newThread} />

					<CurrentThread currentThread={this.state.currentThread} />
				</div>
		  </div>
			
		)
	}
});

module.exports = Messages;