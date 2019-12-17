import React, { Component } from 'react';
import Chat from './Chat'


class ChatDisplay extends Component {

	render() {
	return (
		<Chat
			thread={this.props.activeThread}
			onMessageClick={this.props.deleteMessage}
			onMessageSubmit={this.props.addMessage}
			/>
		);
	}
}

export default ChatDisplay;
