import React from 'react'

const ThelephoneFilterForm = ({handleFilterChange}) => {


  return (
    <form>
      <input type="text" name='filter' placeholder='Filter telephone list' onChange={handleFilterChange}/>
    </form>
  )
}

export default ThelephoneFilterForm