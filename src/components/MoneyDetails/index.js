// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense} = props
  const balance = income - expense

  return (
    <div className="money-details">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="custom-image"
        />
        <div>
          <p className="content-heading">Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="custom-image"
        />
        <div>
          <p className="content-heading">Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expense-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="custom-image"
        />
        <div>
          <p className="content-heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
