import React from 'react'

const CountryForm = ({handleOnChangeFilter}) => {
  return (
    <form>
      <input type='text' name='country' placeholder='Search country' onChange={handleOnChangeFilter}></input>
    </form>
  )
}

export default CountryForm;