import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiJava, SiPython, SiCplusplus, SiErlang, SiMysql, SiVisualstudiocode, SiTableau, SiAutodesk, SiAdobephotoshop, SiMicrosoftoffice
  
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
        <div>
          <SiJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          
          
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiErlang />
            <h5>Erlang</h5>
          </div>

          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          {/* 
          <div>
            <SiTableau />
            <h5>Tableau</h5>
          </div>
          <div>
            <SiVisualstudiocode />
            <h5>VS Code</h5>
          </div>
          <div>
            <SiAdobephotoshop />
            <h5>Photoshop</h5>
          </div>
          <div>
            <SiAutodesk />
            <h5>Fusion 360</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiMicrosoftoffice />
            <h5>Microsoft Office</h5>
          </div>
          */}
        </div>
      </div>
    </>
  );
};
