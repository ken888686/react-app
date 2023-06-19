import './ExpenseDate.scss'

type ExpenseDateProps = {
  date: Date
}

function ExpenseDate(props: ExpenseDateProps) {
  const { date } = props
  const year = date.toLocaleString('zh-TW', { year: 'numeric' })
  const month = date.toLocaleString('zh-TW', { month: 'numeric' })
  const day = date.toLocaleString('zh-TW', { day: 'numeric' })

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate
