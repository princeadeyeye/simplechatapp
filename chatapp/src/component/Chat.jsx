import React from 'react';
import ChatView from './ChatView'



const Chat = (props) => (
    <div>
        <ChatView
        	tabs={props.tabs}
            messages={props.thread.messages}
            onClick={props.onMessageClick}
             onSubmit={props.onMessageSubmit}
            threadId={props.thread.id}
        />
      
           

    </div>
);

export default Chat;