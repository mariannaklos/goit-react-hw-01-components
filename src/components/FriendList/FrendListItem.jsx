import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FrendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.list}>
      <span
        className={`${css.status} ${
          isOnline ? css.statusOnlain : css.statusOflain
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt={avatar} width="48" />
      <p className={css.text}>{name}</p>
    </li>
  );
};

FrendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};