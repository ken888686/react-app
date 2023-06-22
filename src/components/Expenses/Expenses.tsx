import { ExpenseData } from '../Models/ExpenseData'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

type ExpensesProps = {
  data: ExpenseData[]
}

function Expenses(props: ExpensesProps) {
  const { data } = props
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
