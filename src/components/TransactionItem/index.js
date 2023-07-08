// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item-container">
      <p className="transaction">{title}</p>
      <p className="transaction">Rs {amount}</p>
      <p className="transaction">{type}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={onDelete}
        className="custom-delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
