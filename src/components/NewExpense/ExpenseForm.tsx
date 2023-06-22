import React, { useState } from 'react'
import './ExpenseForm.scss'
import { ExpenseData } from '../Models/ExpenseData'

type ExpenseFormProps = {
  onSaveExpenseData: (expenseData: ExpenseData) => void
}

export default function ExpenseForm(props: ExpenseFormProps) {
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: 0,
    enteredDate: new Date(),
  })
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  }
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: Number.parseInt(event.target.value),
      }
    })
  }
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: new Date(event.target.value) }
    })
  }
  */

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())
  const inputChangeHandler = (
    identifier: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value

    if (identifier === 'title') {
      setTitle(value)
    } else if (identifier === 'amount') {
      setAmount(Number.parseInt(value))
    } else if (identifier === 'date') {
      setDate(new Date(value))
    }
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    }

    const { onSaveExpenseData } = props
    onSaveExpenseData(expenseData)

    setTitle('')
    setAmount(0)
    setDate(new Date())
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => inputChangeHandler('title', event)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="1"
            value={amount}
            onChange={(event) => inputChangeHandler('amount', event)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2020-01-01"
            max="2025-01-01"
            pattern="yyyy-MM-dd"
            value={date.toLocaleDateString('zh-TW')}
            onChange={(event) => inputChangeHandler('date', event)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}
