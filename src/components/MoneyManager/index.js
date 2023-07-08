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
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    income: 0,
    expenses: 0,
    transactionList: [],
  }

  onTitleChange = e => {
    this.setState({title: e.target.value})
  }

  getAmount = e => {
    this.setState({amount: parseInt(e.target.value)})
  }

  getType = e => {
    this.setState({type: e.target.value})
  }

  submitTransaction = e => {
    e.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    if (type === 'EXPENSES') {
      return this.setState(preState => ({
        transactionList: [...preState.transactionList, newTransaction],
        expenses: preState.expenses + amount,
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
    return this.setState(preState => ({
      transactionList: [...preState.transactionList, newTransaction],
      income: preState.income + amount,
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const filteredData = transactionList.filter(each => each.id !== id)
    const deletedId = transactionList.filter(each => each.id === id)
    console.log(deletedId)
    if (deletedId[0].type === 'EXPENSES') {
      return this.setState(preState => ({
        transactionList: filteredData,
        expenses: preState.expenses - deletedId[0].amount,
      }))
    }
    return this.setState(preState => ({
      transactionList: filteredData,
      income: preState.income - deletedId[0].amount,
    }))
  }

  render() {
    const {title, amount, type, transactionList, income, expenses} = this.state

    return (
      <div className="bg-container">
        <div className="heading-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails income={income} expense={expenses} />
        </div>
        <div className="transaction-container">
          <form
            className="transaction-form-container"
            onSubmit={this.submitTransaction}
          >
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="title" className="label-content">
              TITLE
            </label>
            <input
              type="text"
              value={title}
              placeholder="TITLE"
              id="title"
              className="input-content"
              onChange={this.onTitleChange}
            />
            <label htmlFor="amount" className="label-content">
              AMOUNT
            </label>
            <input
              type="text"
              placeholder="AMOUNT"
              value={amount}
              id="amount"
              className="input-content"
              onChange={this.getAmount}
            />
            <label htmlFor="type" className="label-content">
              TYPE
            </label>
            <select
              id="type"
              className="input-content"
              value={type}
              onChange={this.getType}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="custom-btn">
              ADD
            </button>
          </form>
          <div className="transaction-history">
            <h1 className="history">History</h1>
            <div className="transactions-headings-container">
              <p className="transactions-headings1">Title</p>
              <p className="transactions-headings2">Amount</p>
              <p className="transactions-headings2">Type</p>
            </div>
            <ul className="list-container">
              {transactionList.map(each => (
                <TransactionItem
                  transactionDetails={each}
                  key={each.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
