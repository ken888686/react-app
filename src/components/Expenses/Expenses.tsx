import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

const data = [
  { id: 0, date: new Date(1993, 9, 3), title: 'Aaron', amount: 100 },
  { id: 1, date: new Date(1994, 10, 4), title: 'Belle', amount: 100 },
  { id: 2, date: new Date(1995, 11, 5), title: 'Carlin', amount: 100 },
  { id: 3, date: new Date(1996, 12, 6), title: 'David', amount: 100 },
  { id: 4, date: new Date(1997, 1, 7), title: 'Elise', amount: 100 },
]

function Expenses() {
  return (
    <Card className="expenses">
      {data.map((x) => (
        <ExpenseItem
          key={x.id}
          date={x.date}
          title={x.title}
          amount={x.amount}
        />
      ))}
    </Card>
  )
}

export default Expenses
