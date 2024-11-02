import { Children } from "react";
import FriendListItem from "./FriendListItem";

const Item = ({ Children }) => <li>{Children}</li>;

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <Item key={friend.id}>{FriendListItem}</Item>;
      })}
    </ul>
  );
};

export default FriendList;
