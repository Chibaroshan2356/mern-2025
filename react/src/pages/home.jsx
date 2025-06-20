import React from 'react'

const home = ({items}) => {
  return (
    <div>
      <ol>
        {items.map((fruit) => (<li>{fruit}</li>))}
      </ol>
      
    </div>
  )
}

export default home