import React from 'react'

const ThelephoneForm = ({handleSubmit, handleChange, newName}) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <input type="text" name="name" placeholder="Add your name" value={newName.name} onChange={handleChange} />
      <input type="text" name="number" placeholder="Add your phone number" value={newName.number} onChange={handleChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

  )
}

export default ThelephoneForm