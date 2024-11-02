import FriendListItem from "./FriendListItem";

const Item = ({ children }) => <li>{children}</li>;

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Item key={friend.id}>
            {FriendListItem({
              avatar: friend.avatar,
              name: friend.name,
              isOnline: friend.isOnline,
            })}
          </Item>
        );
      })}
    </ul>
  );
};

export default FriendList;
