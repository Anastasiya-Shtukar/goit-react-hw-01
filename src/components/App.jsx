import Profile from "./Profile/Profile";
import "./App.css";
import userData from "./Profile/userData.json";
import friends from "./Friends/Friends.json";
import FriendList from "./Friends/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;