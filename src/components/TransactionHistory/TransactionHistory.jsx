import css from "./Transaction.module.css";
import clsx from "clsx";

const items = ({ type, amount, currency }) => {
  return (
    <>
      <td className={clsx(css.tbodyItem)}>{type}</td>
      <td className={clsx(css.tbodyItem)}>{amount}</td>
      <td className={clsx(css.tbodyItem)}>{currency}</td>
    </>
  );
};

const ItemT = ({ children }) => <tr>{children}</tr>;

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={clsx(css.table)}>
      <thead className={clsx(css.thead)}>
        <tr>
          <th className={clsx(css.theadItem)}>Type</th>
          <th className={clsx(css.theadItem)}>Amount</th>
          <th className={clsx(css.theadItem)}>Currency</th>
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
