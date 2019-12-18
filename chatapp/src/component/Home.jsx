import React, { Component } from 'react';
import ChatTabs from './ChatTabs';
import ChatDisplay from './ChatDisplay'
import './Home.css'



class Home extends Component {

    render() {
        return (
        	<div className="container-fluid h-100">
			 <div className="row justify-content-center h-100">
			    <ChatTabs 
			    	tabs={this.props.tabs}
			    	openThread ={this.props.openThread}
			    	/>
			    <ChatDisplay 
			    			tabs={this.props.tabs}
			    			activeThread={this.props.activeThread}
							addMessage ={this.props.addMessage}
							deleteMessage ={this.props.deleteMessage}
							/>
							{console.log(this.props.activeThread)}
			  </div>
			</div>
        );
    }
}

export default Home;
