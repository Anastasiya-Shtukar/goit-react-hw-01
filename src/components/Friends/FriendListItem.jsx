import clsx from "clsx";
import css from "./FriendList.module.css";

const classStatus = ({ isOnline }) =>
  clsx({
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" className={clsx(css.avatar)} />
      <p className={clsx(css.nameFriend)}>{name}</p>
      <p className={classStatus({ isOnline: isOnline })}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
