import React, { useState } from 'react'
import { InvestmentCalculateInput } from '../../models/InvestmentCalculateInput'
import classes from './UserInput.module.scss'

type UserInputProps = {
  onCalculate: (userInput: InvestmentCalculateInput) => void
}

function UserInput(props: UserInputProps) {
  const initialUserInput: InvestmentCalculateInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  }
  const [userInput, setUserInput] = useState(initialUserInput)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onCalculate(userInput)
  }

  const resetHandler = () => {
    setUserInput(initialUserInput)
  }

  const inputChangeHandler = (input: string, value: string) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      }
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default UserInput
