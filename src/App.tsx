import './App.scss'
import Expenses from './components/Expenses/Expenses'
import { ExpenseData } from './components/Models/ExpenseData'
import NewExpense from './components/NewExpense/NewExpense'

const data: ExpenseData[] = [
  { id: 0, date: new Date(1993, 9, 3), title: 'Aaron', amount: 100 },
  { id: 1, date: new Date(1994, 10, 4), title: 'Belle', amount: 100 },
  { id: 2, date: new Date(1995, 11, 5), title: 'Carlin', amount: 100 },
  { id: 3, date: new Date(1996, 12, 6), title: 'David', amount: 100 },
  { id: 4, date: new Date(1997, 1, 7), title: 'Elise', amount: 100 },
]

function App() {
  const addExpenseHandler = (expense: ExpenseData) => {
    data.push({ id: data.length + 1, ...expense })
    console.log(data)
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={data} />
    </>
  )
}

export default App
