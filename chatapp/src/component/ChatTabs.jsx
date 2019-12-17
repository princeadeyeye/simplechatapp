import React, { Component } from 'react';
import Tabs from './Tabs'

class ChatTabs extends Component {

		render() {
		return (
			<Tabs
				tabs={this.props.tabs}
				onClick={this.props.openThread}
			/>
		);
	}
}

export default ChatTabs;

