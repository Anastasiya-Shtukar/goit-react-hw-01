const items = ({ type, amout, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amout}</td>
      <td>{currency}</td>
    </tr>
  );
};

const ItemT = ({ Children }) => <tr>{Children}</tr>;

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return <ItemT key={transaction.id}>{items}</ItemT>;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
