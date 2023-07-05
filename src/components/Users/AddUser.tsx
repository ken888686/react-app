import React, { useState } from 'react'
import Card from '../UI/Card'
import SubmitButton from '../UI/SubmitButton'
import classes from './AddUser.module.scss'
import ErrorModal from '../UI/ErrorModal'

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState(0)

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(Number.parseInt(event.target.value))
  }

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0) {
      return
    }

    setEnteredUsername('')
    setEnteredAge(0)
  }

  return (
    <>
      <ErrorModal title="An error occurred!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
            min={5}
          />
          <SubmitButton onClick={addUserHandler}>Add User</SubmitButton>
        </form>
      </Card>
    </>
  )
}

export default AddUser
