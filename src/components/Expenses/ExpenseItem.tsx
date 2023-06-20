import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.scss'

type ExpenseItemProps = {
  date: Date
  title: string
  amount: number
}

function ExpenseItem(props: ExpenseItemProps) {
  const { date, amount } = props
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('Updated!')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
