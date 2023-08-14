import React, { useEffect, useState } from 'react'
import './Navbar.css';
import {Link, useLocation} from "react-router-dom"
import userImg from '../../assets/images/mee.jpg'



const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id:1,
        username:"Ben Keter",
        isSeller: true,
    }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link' >
                <span className='text'>Benlabs</span>
                </Link>
              
                <span className='dot'>.</span>
            </div>
            <div className="nav_links">
                <Link className='link'>Benlabs Business</Link>
                <Link className='link'>Explore</Link>
                <Link className='link'>English</Link>
                <Link className='link'>Sign in</Link>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
             {!currentUser &&  <button className='nav_btn'>Join</button>}
             {currentUser && (
                <div className="user" onClick={()=> setOpen(!open)} >
                <img className='userprofile' src={userImg} alt="" />
                <span>{currentUser?.username}</span>
               { open && <div className="options">
                    {
                        currentUser?.isSeller && (
                            <>
                            <Link to="/MyGigs" className='link'>Gigs</Link>
                            <Link to="/add" className='link' >Add New</Link>
                            </>
                        )
                    }
                   <Link to='/orders' className='link' >Orders</Link>
                   <Link to='/messages' className='link' >Messages</Link>
                   <span>Logout</span> 
                </div>}
                </div>
             )}


        
            </div>
        </div>

        {/* ===== menu ====== */}
        {( active || pathname !=="/") && (
            <> 
             <hr/>
              <div className="menu">
                <Link className='link menuLink' to='/' >
                    Graphics & Design
                </Link>
                <Link className='link menuLink' to='/' >
                    Video & Animation
                </Link>
                <Link className='link menuLink' to='/' >
                   Writing & Transition
                </Link>
                <Link className='link menuLink' to='/' >
                    AI Services
                </Link>
                <Link className='link menuLink' to='/' >
                    Digital Marketing
                </Link>
                <Link className='link menuLink' to='/' >
                    Music and Audio
                </Link>
                <Link className='link menuLink' to='/' >
                    Programming & Tech
                </Link>
                <Link className='link menuLink' to='/' >
                    Business
                </Link>
                <Link className='link menuLink' to='/' >
                    Lifestyle
                </Link>
                
              </div>
              <hr/>
            </>
        )}
        
    </div>
  )
}

export default Navbar
