import React from 'react'
import starImg from "../../assets/images/star.png";
import websiteImg from "../../assets/images/website.png"
import userImg from "../../assets/images/mee.jpg"
import Slider from 'infinite-react-carousel/lib/carousel/slider';
import logo from "../../assets/images/check-list.png"
import "./Gig.css"

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">

        <div className="gig_left">
          <span className='breadCrumbs'>BENLABS  GRAPHICS & DESIGNN  </span>
          <h1>I will create AI generated art for you</h1>
          
          <div className="user">
            <img className='user_profile' src={userImg} alt="" />
            <span>Benson Keter</span>
            <div className="stars">
              <img src={starImg} alt="" />
              <img src={starImg} alt="" />
              <img src={starImg} alt="" />
              <img src={starImg} alt="" />
              <img src={starImg} alt="" />
             
              <span>5</span>

            </div>
          </div>
          <Slider slideToShow={1} arrowToShow={1} className="slider" >
          <img src={websiteImg} alt="" />
          <img src={websiteImg} alt="" />
          <img src={websiteImg} alt="" />
            
          </Slider>
          <h2>About This Gig</h2>
          <p> I use an Ai program to create images based on a text promps. This
            means i can help you create a vision you have through a textual description
            of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits (E.g. Wallpapers
            illustrations to compliment a story.) Logos . If you have any questions
            you are more than welcome to send a message.
          </p>

          <div className="seller">
            <h2>About seller</h2>
            <div className="user">
              <img src={userImg} alt="" />
              <div className="user_info">
                <span>Benson Keter</span>
                <div className="stars">
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="box_items">
                <div className="box_item">
                  <span className='title'>From</span>
                  <span className='desc'>KENYA</span>
                </div>
                <div className="box_item">
                  <span className='title'>Member since</span>
                  <span className='desc'>Aug 2018</span>
                </div>
                <div className="box_item">
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>4 hours</span>
                </div>
                <div className="box_item">
                  <span className='title'>Last Delivery</span>
                  <span className='desc'>1 day</span>
                </div>
                <div className="box_item">
                  <span className='title'>Languages</span>
                  <span className='desc'>English</span>
                </div>
                
              </div>
              <hr/>
              <p>My name is Benn, i enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that means
                i know what to prompt the AI with to get a great and incredibly
                detailed result.
              </p>
            </div>
          </div>

          <div className="reviews">
              <h2>Reviews</h2>
              <div className="user_item">
                <div className="seller_info">
                  <img src={userImg} alt="" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <span>5</span>
                </div>
                <p> I just want to say that John Doe was fast and
                  the only artist i will be using on Benlabs. Communication
                  was amazing , each and every day he sen me images that i was free to request changes
                  to. He listened, understood and delivered above and beyond expectation.
                </p>
                <div className="helpful">
                  <span>Helpful</span>
                  <img src="" alt="" />
                  <span>Yes</span>
                  <img src="" alt="" />
                  <span>No</span>
               
                </div>
              </div>
              <hr />
              <div className="user_item">
                <div className="seller_info">
                  <img src={userImg} alt="" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <img src={starImg} alt="" />
                    <span>5</span>
                </div>
                <p> I just want to say that John Doe was fast and
                  the only artist i will be using on Benlabs. Communication
                  was amazing , each and every day he sen me images that i was free to request changes
                  to. He listened, understood and delivered above and beyond expectation.
                </p>
                <div className="helpful">
                  <span>Helpful</span>
                  <img src="" alt="" />
                  <span>Yes</span>
                  <img src="" alt="" />
                  <span>No</span>
               
                </div>
              </div>
              <hr />
          </div>

        </div>

        <div className="gig_right">
            <div className="price">
              <h3>1 AI generated images</h3>
              <h2>Ksh 5000</h2>
            </div>
            <p>I will create a unique high quality AI generated image </p>
            <div className="details">
              <div className="details_item">
                <img src={logo} alt="" />
                <span>2 days delivery</span>
              </div>
              <div className="details_item">
                <img src={logo} alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="detail_features">
                <div className="features_item">
                  <img src={logo} alt="" />
                  <span>Prompt writing</span>
                </div>
                <div className="features_item">
                  <img src={logo} alt="" />
                  <span>Artwork delivery</span>
                </div>
                <div className="features_item">
                  <img src={logo} alt="" />
                  <span>Image upscaling</span>
                </div>
                <div className="features_item">
                  <img src={logo} alt="" />
                  <span>Additional design</span>
                </div>
                
              </div>
            <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
