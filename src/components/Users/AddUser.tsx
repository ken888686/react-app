import React from 'react'

// type AddUserProps = {}

function AddUser() {
  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" name="age" id="age" />
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUser
