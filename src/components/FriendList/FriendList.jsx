import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => {
        return (
          <li className={css.itemWrapper}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
              id={friend.id}
            />
          </li>
        );
      })}
    </ul>
  );
}
