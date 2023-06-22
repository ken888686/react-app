import { ExpenseData } from '../Models/ExpenseData'
import ExpenseForm from './ExpenseForm'
import './NewExpense.scss'

type NewExpenseProps = {
  onAddExpense: (expenseData: ExpenseData) => void
}

function NewExpense(props: NewExpenseProps) {
  const { onAddExpense } = props
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    }
    onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
