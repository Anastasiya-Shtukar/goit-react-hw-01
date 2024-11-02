import FriendListItem from "./FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";

const Item = ({ children }) => (
  <li className={clsx(css.friendItem)}>{children}</li>
);

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendList)}>
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
