import PropTypes from 'prop-types';
import { FrendListItem } from './FrendListItem';
import css from './FriendList.module.css';
export const FrendList = ({ friends }) => {
  return (
    <ul className={css.section}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FrendListItem
          kay={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};
FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};