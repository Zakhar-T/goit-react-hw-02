import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.userWrapper}>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.userStatsList}>
        <li className={css.userStats}>
          <span>Followers</span>
          <br />
          <span>{stats.followers}</span>
        </li>
        <li className={css.userStats}>
          <span>Views</span>
          <br />
          <span>{stats.views}</span>
        </li>
        <li className={css.userStats}>
          <span>Likes</span>
          <br />
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
