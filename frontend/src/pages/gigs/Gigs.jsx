import React, { useState } from 'react'
import "./Gigs.css"
import checklist from "../../assets/images/check-list.png"
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from "../../data"
const Gigs = () => {

  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>BENLABS > GRAPHICS & DESIGN ></span>
        <h1>AI Developers</h1>
        <p>Explore the boundaries of art and technology with Benlab's AI Developers</p>

        <div className="menu">
          <div className="gigs_left">
            <span>Budget</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max' />
            <button>Apply</button>

          </div>
          <div className="gigs_right">
              <span className='sort_by'>SortBy</span>
              <span className='sort_type'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
              <img src={checklist} alt="" onClick={()  => setOpen(!open)} />

             
             { open && (
             <div className="rightMenu">
                {sort === "sales" ? (<span onClick={()=>reSort("createdAt")} >Newest</span>) :
                (<span onClick={()=>reSort("sales")} >Best Selling</span>)}
              </div>)}
          </div>
        </div>

        {/* import gigs cards */}
        <div className="cards">
          {gigs.map(gig=> (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
