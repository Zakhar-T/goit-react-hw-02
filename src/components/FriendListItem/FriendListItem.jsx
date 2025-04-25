import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, status, id }) {
  return (
    <div className={css.container} key={id}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="100" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, status === true && css.friendOnline)}
      >
        {status === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
