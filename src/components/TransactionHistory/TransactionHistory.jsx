const items = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

const ItemT = ({ children }) => <tr>{children}</tr>;

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
          return (
            <ItemT key={transaction.id}>
              {items({
                type: transaction.type,
                amount: transaction.amount,
                currency: transaction.currency,
              })}
            </ItemT>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
