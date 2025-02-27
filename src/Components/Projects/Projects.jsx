import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaPython, FaSwift } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiJava,
  SiReact,
  SiCss3,
  SiTensorflow,
  SiTypescript,
  SiPostgresql,
  SiFastapi,
  
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import sortingPic from "../../assets/sorting.png";
import atmPic from "../../assets/atmpagepic.png";
import wPic from "../../assets/weatherw.png";
import spendSavvy from "../../assets/spendsavvy.png";
import bmicalc from "../../assets/BMI-calculator.png";
import objectDetect from "../../assets/object_detection.png"
import dice from "../../assets/dice.png"
import aiassistant from "../../assets/aiassistant.png"
import anime from "../../assets/anime2.png"
import mern from "../../assets/mern.png"




export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">



<div className="projects_container" data-aos="fade-right">
            <div className="project">
            
              <div className="project_videocontainer">
                <div>
                  <img
                    src={aiassistant}
                    alt="AI assistant"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>AI-powered Business Assistant</h2>
                <p>
Building an AI assistant to automate business tasks via Google Calendar, Slack and Customer Relationship Management. Utilizing PostgreSQL, FastAPI, NLP to manage business data, optimize workflows, generate actionable insights.                
                 </p> 
                  <div>
                  <FaPython />
                  <SiPostgresql />
                  
                  <SiFastapi />

                </div>
                <div>
                  
                  <a
                    href="https://github.com/chhateauuu/AI-Powered-Business-Assistant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>






          


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
            
              <div className="project_videocontainer">
                <div>
                  <img
                    src={mern}
                    alt="Mern eCommerce Application"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>TypeScript MERN eCommerce Application</h2>
                <p>
Built a platform using MongoDB, Express, React, and Node.js for enhancing shopping for a Nepali home goods store. Developed REST APIs, used TypeScript for frontend/backend, implemented authentication, improved accessibility.
                </p>
                  <div>
                  
                  <SiTypescript />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  
                  <a
                    href="https://github.com/chhateauuu/MERN-Ecommerce-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        <div className="projects_container" data-aos="fade-right">
            <div className="project">
            
              <div className="project_videocontainer">
                <div>
                  <img
                    src={anime}
                    alt="Anime Recommendation System"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Hybrid ML Recommendation System</h2>
                <p>
Built an ML-based anime recommender to provide recommendations for anime watchers with a 92% accuracy. Applied clustering, collaborative filtering to train the model, optimizing data pipelines with Pandas and Numpy.
               </p>
                <div>
                  
                  <FaPython />
                </div>
                <div>
                  
                  <a
                    href="https://github.com/chhateauuu/Hybrid-ML-Anime-Recommendation-System"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>







          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
            
              <div className="project_videocontainer">
                <div>
                  <img
                    src={objectDetect}
                    alt="Object Detection Image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Detect AI</h2>
                <p>
                Trained a TensorFlow model on Google Colab, reducing model size by 2x to deploy by converting it to TFLite. Crafted a Python Script using OpenCV and NumPy to achieve real-time object detection, processing 30 FPS.
                </p>
                <div>
                  
                  <FaPython />
                  <SiTensorflow />
                </div>
                <div>
                  
                  <a
                    href="https://github.com/chhateauuu/DetectAI-Real-Time-Object-Recognition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={dice}
                    alt="DiceMaster"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>DiceMaster</h2>
                <p>
                Built an iOS app using Swift and UIKit, creating smooth transitions and optimizing logic for seamless interactions. Reduced UI load time by 32% compared to standard image handling methods, enhancing overall responsiveness.
                </p>
                <div>
                  <FaSwift />
                </div>
                <div>
                  <a
                    href="https://github.com/chhateauuu/DiceMaster"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={atmPic}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Aarya's ATM</h2>
                <p>
                Created an ATM Simulator in Java using JFrame and Maven, handling up to 55 transactions running parallelly. Integrated MySQL with Java Database Connectivity, improving data management efficiency and privacy.
                </p>
                <div>
                  <SiJava />
                  <SiMysql />
                </div>
                <div>
                 
                  <a
                    href="https://github.com/chhateauuu/ATM-Simulator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={sortingPic}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Visualize Sorting</h2>
                <p>
                Designed a Sorting Visualizer in React, showcasing custom algorithms like Heap and Merge; employed DOM manipulation to sync animations with algorithmic operations, demystifying sorting mechanics.
                </p>
                <div>
                  
                  <FaReact />
                  <SiJava />
                </div>
                <div>
                  <a
                    href="https://visualize-sorting-with-aarya.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Project
                    </span>
                  </a>
                  <a
                    href="https://github.com/chhateauuu/Visualize-Sorting/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={wPic} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather with Aarya</h2>
                <p>
                Developed a Weather App with React using the OpenWeatherMap API; features real-time updates on temperature, humidity, and wind speed; implemented asynchronous calls for instant data retrieval and dynamic UI responsiveness.
                </p>
                <div>
                  <SiReact />
                  <SiHtml5 />
                  <SiCss3/>
                </div>
                <div>
                  <a
                    href="https://weather-with-aarya.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Project
                    </span>
                  </a>
                  <a
                    href="https://github.com/chhateauuu/weather-with-aarya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={spendSavvy}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SpendSavvy</h2>
                <p>
                An Advanced Web Interface harnessing CRUD methodologies with HTML, CSS, and JavaScript. Prioritizes real-time feedback, sleek design, and dynamic interactivity. A synergy of foundational and modern web design principles.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://spendsavvy.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Project
                    </span>
                  </a>
                  <a
                    href="https://github.com/chhateauuu/SpendSavvy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={bmicalc}
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>BMI Calculator</h2>
                <p>
                A Body Mass Index (BMI) Calculator designed with precision and user-friendliness in mind, accepting inputs for height and weight in a diverse range of units. Hosted on Netlify, it guarantees quick load times and a hassle-free user experience, making health checks a breeze.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://aarya-bmi-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Project
                    </span>
                  </a>
                  <a
                    href="https://github.com/chhateauuu/BMI-Calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
