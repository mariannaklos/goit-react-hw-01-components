import PropTypes from 'prop-types';
import css from 'components//TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table_blur}>
      <thead>
        <tr className={css.headField}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transact => (
          <tr key={transact.id}>
            <td>{transact.type}</td>
            <td>{transact.amount}</td>
            <td>{transact.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};