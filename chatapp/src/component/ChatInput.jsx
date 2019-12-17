import React, { Component } from 'react';

class ChatInput extends Component {
    state = {
        value: '',
        };

        onChange = (e) => {
            this.setState({
            value: e.target.value,
            })
        };
        
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.onSubmit(this.state.value, this.props.threadId);
            this.setState({
            value: '',
        });
    };

    render() {
        return (
            <form >
                   <div 
                                className="input-group">
                            <div 
                                className="input-group-append">
                                    <span 
                                        className="input-group-text attach_btn"><i 
                                        className="fas fa-paperclip"
                                        ></i></span>
                                </div>
                                <textarea 
                                    name="" 
                                    className="form-control type_msg" 
                                    placeholder="Type your message..."
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    >   
                                </textarea>
                                <div 
                                className="input-group-append">
                                    <span class="input-group-text send_btn"><i 
                                        className="fas fa-location-arrow"
                                        onClick={this.handleSubmit}
                                        ></i></span>
                            </div>
                    </div>
            </form>
        );
    }
}

export default ChatInput;


                            