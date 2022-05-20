import React from 'react'

export default function Filter() {
  return (
    <div className="container filterBox">
        <div className="filterTitle">
            Filter by : 
            <select>
                <option defaultChecked value="0"></option>
                <option value="1">Album</option>
            </select>
        </div>
    </div>
  )
}
