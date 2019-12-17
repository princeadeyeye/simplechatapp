import React from 'react';
import ChatInput from './ChatInput'

    

    const imgSrc_1 = `https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg`
    const imgSrc_2 = `https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg`


const ChatView = (props) => (
                <div class="col-md-8 col-xl-12 chat">
                    <div class="card">
                        <div class="card-body msg_card_body">
                            {
                                props.messages.map((m, index) => (
                                    <div
                                        className='d-flex justify-content-start mb-4'
                                        key={index}
                                        onClick={() => props.onClick(m.id)}
                                    >
                                        <div class="img_cont_msg">
                                             <img src={ imgSrc_1 } class= "rounded-circle user_img" />
                                         </div>
                                         <div class="msg_cotainer">
                                            {m.text}
                                            <span class="msg_time">@{m.timestamp}</span>
                                        </div>                                        
                                    </div>

                                ))
                            }
                            </div>
                      
                        <div class="card-footer">
                       <ChatInput
                            onSubmit={props.onSubmit}
                            threadId={props.threadId}
                        />
                          </div>
                        </div>
                    </div>
  
);

export default ChatView;

