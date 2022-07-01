import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import easy from "../../Images/Easy_Learning.png";
import netflix from "../../Images/Netflix-clone.png";
import amazon from "../../Images/Amazon-clone.png";
import chat from "../../Images/Chat-Web-App.png";
import uber from "../../Images/Uber-clone.png";
import instagram from "../../Images/Instagram-clone.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Projects</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={amazon} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Amazon Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Amazon-clone</div>
            <div className="img-description">
              <p>
                Application system follows complete authentication for Login,
                Registration, Payment and authentication
              </p>
              <p>
                Users can add new products to their account cart, and also
                Delete the added products on Cart and make payment also.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Lucifer12929/amazon-clone"
                  >
                    Github-Repo <i className="fad fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={easy} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">EASY-LEARNING</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">EASY-LEARNING</div>
            <div className="img-description">
              <p>
                Created E-Learning platform where user can learn by purchasing the 
                courses through recorded lecture.It contain Login,Registration,
                Cart,Course Column,Admin,Teacher,Students Section and payment also.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Lucifer12929/EasyLearning.github.io"
                  >
                   Github-Repo <i className="fad fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={chat} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Chat App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Chat App</div>
            <div className="img-description">
              <p>
                The project is a chatting web app like whatsapp.
                Implemented this application with a google authentication
                system .
              </p>
              <p>
                Avatar of user keeps on changing on each access.It tells about 
                the timing of message recieve or send.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Lucifer12929/whatsapp-clone"
                  >
                    Github-Repo <i className="fad fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={uber} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Uber-clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Uber-clone</div>
            <div className="img-description">
              <p>This app is created using next js. .</p>
              <p>
                This app have authentication,map api,different types of
                ride price according to the destination distance.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                 
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Lucifer12929/Uber-clone"
                  >
                     Github-Repo <i className="fad fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={netflix} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Netflix Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Netflix Clone</div>
            <div className="img-description">
              <p>
                The project is a ott streaming app with real-time data.
                It Sign-in,Sign-out,trending shows and can watch trailer 
                for free. 
              </p>
              
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Lucifer12929/Netflix-clone"
                  >
                     Github-Repo <i className="fad fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={instagram} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Instagram Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Instagram Clone</div>
            <div className="img-description">
              <p>
                It is an instagram clone where user can post any Images
                and video with comments.Other people can comment on 
                their posts.MERN project.
              </p>
              
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Lucifer12929/instagram-clone"
                  >
                    Github-Repo <i className="fad fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
