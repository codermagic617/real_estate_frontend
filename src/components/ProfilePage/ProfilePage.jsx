import '../../components/ProfilePage/profilePage.scss';
import Chat from '../Chat/Chat';
import List from '../List/List';

const ProfilePage = () => {
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src="/profile-pic.jpg" alt="Profile Image" />
                        </span>
                        <span>
                            Username: <b>John Doe</b>
                        </span>
                        <span>
                            Email: <b>johndoe@email.com</b>
                        </span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create a New Post</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>

            <div className="chatContainer">
                <Chat />
            </div>
        </div>
    )
}

export default ProfilePage