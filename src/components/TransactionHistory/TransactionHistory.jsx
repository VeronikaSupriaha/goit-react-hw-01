import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.tableTransactions}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.trTable} key={item.id}>
            <td className={css.tdTable}> {item.type} </td>
            <td className={css.tdTable}>{item.amount}</td>
            <td className={css.tdTable}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
