import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <section id="experience">
        <div className="section mainsection">
          <h2 className="section__title" data-aos="fade-right">
            My <span className="different">Experience</span>
          </h2>
          <VerticalTimeline lineColor={linecolor}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"Jan 2024 - Jul 2024"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                Software Development Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://www.linkedin.com/company/1system/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">1 System</span>
                </a>
                | Remote/Austin, TX
              </h4>
              <p data-aos="fade-right">
                Enhanced user experience and functionality using React and Java
                for the company website and app. Served as a dynamic brand
                ambassador, working on effectively networking and securing new
                clients.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date={"Aug 2023 - Present"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                Software Development Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://www.depauw.edu/it/itap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">DePauw Tenzer Technology Center</span>
                </a>{" "}
                | Indiana
              </h4>
              <p data-aos="fade-right">
                Led the creation of web apps for DePauw University's touchscreen
                kiosks using JavaScript, CSS, React, and Python. Introduced
                DePauw-themed games on the library's platform, enhancing
                university culture with tech, boosting student engagement by
                25%, and enriching the collegiate experience.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date={"Jun 2023 - Present"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                Software Mentorship Lead
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://www.depauw.edu/it/itap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">DePauw University</span>
                </a>{" "}
                | Indiana
              </h4>
              <p data-aos="fade-right">
                Initiated tech support sessions at Putnam County Public Library,
                aiding in software inquiries and promoting digital literacy.
                Provided web development guidance to local entrepreneurs,
                assisting with tech issues from Photoshop editing to creating
                Canva visuals for TV presentations, showcasing software
                versatility.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date={"June 2023 - August 2023"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<SchoolIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                Web and 3D Printing Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://sites.google.com/depauw.edu/tenzercenter/facilities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">
                    DePauw Tenzer Technology Center
                  </span>
                </a>{" "}
                | Indiana
              </h4>
              <p data-aos="fade-right">
                Created detailed 3D models using Fusion 360 and Cura LulzBot,
                completing over 10 projects and printing 5+, while leading
                calibration and troubleshooting for optimized results. Designed
                a Google Sites repository for prints and files, easing the
                transition from digital designs to tangible experiences.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"Sep 2022 - May 2023"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                Software Research and Web Dev Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://www.depauw.edu/it/itap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">DePauw University</span>
                </a>{" "}
                | Indiana
              </h4>
              <p data-aos="fade-right">
                Utilized Timeline JS, ArcGIS StoryMaps, and Big Tree for
                projects, gaining hands-on experience in Data Visualization, VR
                Technology, and Graphic Design. Explored new technologies,
                completed 10+ projects with them, and showcased on a{" "}
                <a
                  href="https://sites.google.com/depauw.edu/aarya/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">website</span>
                </a>{" "}
                I designed as a repository for all projects and software
                explored during the program.
              </p>
            </VerticalTimelineElement>

            {/* New Timeline Elements */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"Aug 2024 - Present"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                iOS Developer
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://www.depauw.edu/academics/departments-programs/psychology/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">
                    DePauw Neuroscience Department
                  </span>
                </a>{" "}
                | Greencastle, IN
              </h4>
              <p data-aos="fade-right">
                Partnered with the neuroscience dept. to develop an iOS app,
                improving cognitive skills for 2,200+ Alzheimer's patients.
                Integrated interactive games and a library of 170+ trivia
                questions to boost cognitive stimulation. Created an LLM that
                dynamically generates trivia questions based on user
                preferences, enhancing engagement.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"Jul 2024 - Aug 2024"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                Full-Stack Software Development Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://bnutty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">BNutty, LLC</span>
                </a>{" "}
                | Valparaiso, IN
              </h4>
              <p data-aos="fade-right">
                Automated 15 quality and quantity check forms in a React-based
                web app, streamlining production room processes. Reduced the
                turnaround time from submission to supervisor review from over
                24 hours to just 30 minutes. Built a Django backend to manage
                and compile forms into PDFs, improving efficiency and
                documentation.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"May 2024 - Jul 2024"}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                border: "3px solid var(--clr-primary)",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid var(--clr-primary)",
              }}
              iconStyle={{
                border: ` 3px solid var(--clr-primary)`,
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={<WorkIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                data-aos="fade-right"
              >
                AI/ML Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                data-aos="fade-right"
              >
                <a
                  href="https://bnutty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="different">BNutty, LLC</span>
                </a>{" "}
                | Valparaiso, IN
              </h4>
              <p data-aos="fade-right">
                Automated jar counting on a production line using Machine Vision
                and OpenCV on a Raspberry Pi 4. Enhanced counting accuracy and
                reduced waste in jar production by 18%, optimizing overall
                efficiency. Streamlined data flow to a Django backend hosted on
                AWS, displaying real-time counts on a React-based website.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};
