import FriendListItem from "./FriendListItem";

const FriendList = () => {
  let friends = [];
  return (
    <ul>
      {friends.map((friend) => {
        return <li key={friend.id}>{FriendListItem}</li>;
      })}
    </ul>
  );
};

export default FriendList;
