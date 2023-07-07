import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {transactionList: []}

  render() {
    const {transactionList} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <h1>Hi, Rechard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails income={0} />
        </div>
        <div className="transaction-container">
          <form className="transaction-form-container">
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="title" className="label-content">
              TITLE
            </label>
            <input
              type="text"
              placeholder="TITLE"
              id="title"
              className="input-content"
            />
            <label htmlFor="amount" className="label-content">
              AMOUNT
            </label>
            <input
              type="text"
              placeholder="AMOUNT"
              id="amount"
              className="input-content"
            />
            <label htmlFor="type" className="label-content">
              TYPE
            </label>
            <select id="type" className="input-content">
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button type="submit" className="custom-btn">
              ADD
            </button>
          </form>
          <div className="transaction-history">
            <h1 className="history">History</h1>
            <div className="transactions-headings-container">
              <p className="transactions-headings">Title</p>
              <p className="transactions-headings">Amount</p>
              <p className="transactions-headings">Type</p>
            </div>
            <ul>
              {transactionList.map(each => (
                <TransactionItem transactionDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
