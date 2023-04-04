import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticList = ({ title, stats }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.h}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(stat => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.li}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};