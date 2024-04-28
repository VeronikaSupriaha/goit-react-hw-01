import clsx from 'clsx';
import css from './FriendListItem.module.css';
export default function FriendListItem({
  friend: { avatar, name, isOnline, id },
}) {
  const isOnlineClass = clsx(isOnline === true ? css.online : css.offline);
  return (
    <div className={css.containerFriend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnlineClass}>
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
