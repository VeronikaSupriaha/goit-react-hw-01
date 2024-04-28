import css from './Profile.module.css';
export default function Profile({
  userData: { username, tag, location, avatar, stats },
}) {
  return (
    <div className={css.container}>
      <div className={css.profileDiv}>
        <img className={css.profileImg} src={avatar} alt="User avatar" />
        <p className={css.bolidText}>{username}</p>
        <p className={css.greyText}>{tag}</p>
        <p className={css.greyText}> {location} </p>
      </div>

      <ul className={css.profileUl}>
        <li className={css.profileLi}>
          <span>Followers</span>
          <span className={css.bolidText}> {stats.followers} </span>
        </li>
        <li className={css.profileLi}>
          <span>Views</span>
          <span className={css.bolidText}> {stats.views} </span>
        </li>
        <li className={css.profileLi}>
          <span>Likes</span>
          <span className={css.bolidText}> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}
