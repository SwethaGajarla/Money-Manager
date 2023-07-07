// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails
  return (
    <li className="transaction-item-container">
      <p className="transaction">{title}</p>
      <p className="transaction">{amount}</p>
      <p className="transaction">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete"
      />
    </li>
  )
}

export default TransactionItem
