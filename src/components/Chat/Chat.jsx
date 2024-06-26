import { useState } from 'react';
import '../../components/Chat/chat.scss';

const Chat = () => {
    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/profile-pic-2.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</p>
                </div>
                <div className="message">
                    <img src="/profile-pic-3.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</p>
                </div>
                <div className="message">
                    <img src="/profile-pic-4.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</p>
                </div>
                <div className="message">
                    <img src="/profile-pic-5.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</p>
                </div>
                <div className="message">
                    <img src="/profile-pic-6.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</p>
                </div>
            </div>
            {chat &&
                (<div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="/profile-pic-2.jpg" alt="" />
                            John Doe
                        </div>
                        <span className="close" onClick={() => setChat(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>1 Hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea name="" id=""></textarea>
                        <button className='button'>Send</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Chat