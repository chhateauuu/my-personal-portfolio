import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaPython } from "react-icons/fa";
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
                    src={objectDetect}
                    alt="Object Detection Image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Detect AI</h2>
                <p>
                Trained a TensorFlow model on Google Colab and converted it to TensorFlow Lite for deployment. Crafted a Python script with OpenCV and NumPy to run the model on a Raspberry Pi 4 for real-time object detection
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
                    src={atmPic}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Aarya's ATM</h2>
                <p>
                Developed an ATM Simulator using Java, offering features such as real-time cash deposits, withdrawals, and instant account balance updates. Utilized MySQL for robust backend data management and harnessed Maven for streamlined project builds and efficient dependency handling.
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
