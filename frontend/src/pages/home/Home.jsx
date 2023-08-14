import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import "./Home.css";
import Slide from "../../components/slide/Slide";
import video from "../../assets/images/video.mp4";
import checklist from "../../assets/images/check-list.png";
import businessImg from "../../assets/images/business.png";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={checklist} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every point. No hourly rates, just
              project-based pricing.
            </p>

            <div className="title">
              <img src={checklist} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every point. No hourly rates, just
              project-based pricing.
            </p>

            <div className="title">
              <img src={checklist} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every point. No hourly rates, just
              project-based pricing.
            </p>

            <div className="title">
              <img src={checklist} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every point. No hourly rates, just
              project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src={video} controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Benlabs business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits ,
              dedicated to businesses.
            </p>

            <div className="title">
              <img src={checklist} alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src={checklist} alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src={checklist} alt="" />
              Connect to freelancers with proven business experience
            </div>

            <button>Explore Benlabs Business</button>
          </div>
          <div className="item">
            <img src={businessImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
