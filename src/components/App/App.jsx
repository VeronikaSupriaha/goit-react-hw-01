import userData from '/src/userData.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';
import clsx from 'clsx';
import css from './App.module.css';
export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
