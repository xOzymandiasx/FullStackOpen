import React from 'react'

const Button = ({buttonName, handleClick}) => {
  return (
    <button onClick={handleClick}>{buttonName}</button>
  )
}

export default Button;