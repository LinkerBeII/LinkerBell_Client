import React from 'react'

type ButtonProps = {
  countHandler: () => void
}

const Button: React.FC<ButtonProps> = ({ countHandler }) => {
  return (
    <button onClick={countHandler}>Increment</button>
  )
}

export default Button