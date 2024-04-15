import React from "react";
import "./Home.css";
import img from "../assets/back.jpg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaInfinity } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";





function Home() {
  return (
    <div>
      {/* <div className="image-with-text-container">
      <div className="image-container">
       
        <img src={img} alt="Background" className="background-image" />
      </div>
      <div className="text-container">
        <h1>Your Text Message Here</h1>
      </div>
    </div> */}

      <div className="home_container">
        <div className="home_heading">
          <h3>REMOTE ACCESS SOLUTIONS FOR DESKTOPS AND APPLICATIONS.</h3>
          <p className="home_paragraph">Remote Access Made Simple</p>
        </div>
        <div className="home_para">
          <p>
            Our software collection addresses a diverse set of requirements for
            remote access. They collectively uphold identical fundamental
            principles.
          </p>
        </div>
        <div class="box__container">
          <div class="box">
            <div className="icons">
            <FaInfinity />

            </div>
            <h2>Everlasting </h2>
            <p>
              Our licenses are perpetual and have no expiration date. When you
              acquire a ConnectApp software, it becomes your permanent possession.
              Eternally yours.
            </p>
          </div>
          <div class="box">
            <div className="icons">
              {" "}
              <FaHandHoldingDollar />
            </div>
            <h2>Cost-Effective</h2>
            <p>
              Accessing systems remotely doesn't need to incur high expenses.
              Trim down your IT expenditures and concentrate on what holds the
              utmost importance.
            </p>
          </div>
          <div class="box">
            <div className="icons">
            <FaRocket />

            </div>
            <h2>Rapid Implementation</h2>
            <p>
              Optimize your time and budget with our swift deployment procedure.
              Transitioning to production should be seamless and uncomplicated.
            </p>
          </div>
        </div>
        <div class="box__container">
          <div class="box">
            <div className="icons">
            <MdOutlineSecurity />

            </div>
            <h2>Secure</h2>
            <p>
              Our software consistently aligns with the most recent security
              protocols, ensuring continual protection for your servers.
            </p>
          </div>
          <div class="box">
            <div className="icons"><FaUserFriends />
</div>
            <h2> Intuitive for users </h2>
            <p>
              Discover all the functionalities and utilities you require,
              conveniently consolidated within a multilingual and user-friendly
              interface.
            </p>
          </div>
          <div class="box">
            <div className="icons"><FiLayers />
</div>
            <h2>Versatile</h2>
            <p>
              We effectively offer solutions for prominent and expansive
              enterprises. No obstacle is too substantial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
