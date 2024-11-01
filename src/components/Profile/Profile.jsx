import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profile)}>
      <div className={clsx(css.userInformation)}>
        <img src={image} alt="User avatar" className={clsx(css.userAvatar)} />
        <p className={clsx(css.userName)}>{name}</p>
        <p className={clsx(css.userTag)}>@{tag}</p>
        <p className={clsx(css.userTag)}>{location}</p>
      </div>

      <ul className={clsx(css.statsInformation)}>
        <li className={clsx(css.liStats)}>
          <span>Followers</span>
          <span className={clsx(css.statsSpan)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.liStats, css.liStatsViews)}>
          <span>Views</span>
          <span className={clsx(css.statsSpan)}>{stats.views}</span>
        </li>
        <li className={clsx(css.liStats)}>
          <span>Likes</span>
          <span className={clsx(css.statsSpan)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
