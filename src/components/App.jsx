import { UserList } from './Profile/Profile';
import user from '../user.json';
import { StatisticList } from './Statistics/Statistics';
import data from '../components/data.json';
import { FrendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <UserList
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
      <FrendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};