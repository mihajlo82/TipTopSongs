import React from 'react'
import './Table.css'

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Duration</th>
      </tr>
    </thead>
  )
}

export default React.memo(TableHead)