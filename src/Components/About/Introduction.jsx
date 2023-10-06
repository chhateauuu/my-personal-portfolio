import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/linkedinpic.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <section id="about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
    <h4>
        Hi Everyone, My name is{" "}
        <span className="different">Aarya(AAR-YEAH)</span>, and I am a student at{" "}
        <span className="different">DePauw University, Indiana</span>. Born and raised in{" "}
        <span className="different">Kathmandu, Nepal</span>, I am currently pursuing a {" "}
        <span className="different">Computer Science major and Maths minor</span> with a strong drive in bridging coding and numbers for community development.
    </h4>
    <h4>My Non-tech attributes   :</h4>
    <h4 className="different">
        <span className="icons">
            <ExitToAppIcon />
        </span>
        Gym Rat{" "}
    </h4>
    <h4 className="different">
        <span className="icons">
            <ExitToAppIcon />
        </span>
        Home Chef{" "}
    </h4>
    <h4 className="different">
        <span className="icons">
            <ExitToAppIcon />
        </span>
        "Funny guy"(unless my friends have been lying to me){" "}
    </h4>
    <h4>
        Feel free to reach out and connect with me. I'd love to learn about you and your culture.
        <a href="#contact"  onClick={() => toggleNavList("#contact")}>
            <span className="different"> Let's get in touch!</span>
        </a>
    </h4>
</div>

          </div>
        </div>
      </section>
    </>
  );
};
