import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img src={image} className={css.image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.statusList}>
        <li className={css.statusItem}>
          <span className={css.statusName}>Followers</span>
          <span className={css.statusNumber}>{stats.followers}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusName}>Views</span>
          <span className={css.statusNumber}>{stats.views}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusName}>Likes</span>
          <span className={css.statusNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
