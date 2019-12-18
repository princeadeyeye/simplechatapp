import React from 'react';
import ChatInput from './ChatInput'
import Moment from 'react-moment';
    

    const imgSrc_1 = `https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg`
    const imgSrc_2 = `https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg`


const ChatView = (props) => (
                <div class="col-md-8 col-xl-12 chat">
                    <div class="card">
                    <div class="card-header msg_head">
                             <div class="d-flex bd-highlight">
                                 <div class="img_cont">
                                    <img src= {imgSrc_1} class="rounded-circle user_img" />
                                    <span class="online_icon"></span>
                                </div>
                                <div class="user_info">
                                    <span>Chat with {props.threadId}</span>
                                </div>
                                <div class="video_cam">
                                    <span><i class="fas fa-video"></i></span>
                                    <span><i class="fas fa-phone"></i></span>
                                </div>
                            
                            <div class="action_menu">
                                
                            </div>
                        </div>  
                           
                        </div>
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
                                            <span class="msg_time">
                                             <Moment date={m.timestamp} /></span>
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

