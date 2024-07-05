import React from 'react'

type viewProps = {
  count: number
}

const View: React.FC<viewProps> = ({ count }) => {
  return (
    <div>{count}</div>
  )
}

export default View