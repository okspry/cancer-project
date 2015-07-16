var React = require('react');
var FormGroup = require('../common/FormGroup');
var TextBox = require('../common/TextBox');
var PostButton = require('../common/PostButton');
var ClearButton = require('../common/ClearButton');

var MessageActions = require('../../actions/MessageActions');

var ComposeMessage = React.createClass({
	render: function() {
		return (

			<form data-toggle="validator" role="form">
				<FormGroup 
			  	infoType={_.findKey(this.props.newThread, "sendTo")}
			  	label="To"
			  	type="email"
			  	placeholder="recipient@email.com"
			  	value={_.get(this.props.newThread, "sendTo")}
			  	actionType={MessageActions.changeRecipient} />

				<FormGroup 
			  	infoType={_.findKey(this.props.newThread, "subject")}
			  	label="Subject"
			  	type="text"
			  	placeholder="Subject"
			  	value={_.get(this.props.newThread, "subject")}
			  	actionType={MessageActions.changeSubject} />

			  <TextBox
			  	infoType={_.findKey(this.props.newThread, "content")}
			  	label="Subject"
			  	placeholder="Write a message..."
			  	content={this.props.newThread["content"]}
			  	actionType={MessageActions.changeMessage} />

			  <br />
			  <div className="pull-right">
				  <PostButton 
				  	label="Send"
            actionPost={MessageActions.send} 
            actionNewTemplate={MessageActions.newTemplate} 
            item={this.props.newThread} />

        </div>
			</form>
			
		)
	}
});

module.exports = ComposeMessage;