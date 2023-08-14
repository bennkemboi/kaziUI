import React from 'react'
import { Link } from 'react-router-dom'
import "./MyGigs.css"
const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" > 
          <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><img src="" alt="" /></td>
            <td>Gig1</td>
            <td>100</td>
            <td>50</td>
            <td><img src="" alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
