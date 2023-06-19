import './App.scss'
import ExpenseItem from './components/ExpenseItem'

const data = [
  {
    date: new Date(1993, 9, 3),
    title: 'Aaron',
    amount: 100,
  },
  {
    date: new Date(1994, 10, 4),
    title: 'Belle',
    amount: 100,
  },
  {
    date: new Date(1995, 11, 5),
    title: 'Carlin',
    amount: 100,
  },
  {
    date: new Date(1996, 12, 6),
    title: 'David',
    amount: 100,
  },
  {
    date: new Date(1997, 1, 7),
    title: 'Elise',
    amount: 100,
  },
]

function App() {
  return (
    <>
      {data.map((x) => (
        <ExpenseItem date={x.date} title={x.title} amount={x.amount} />
      ))}
    </>
  )
}

export default App
