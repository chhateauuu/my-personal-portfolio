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
            {/* New Timeline Elements at the Top */}

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
                App Developer
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
Partnered with the neuroscience dept. to build an iOS/Android app tested by 68+ users using React Native. Targeted a demographic of 2200+ Alzhiemer’s patients to boost cognitive simulations via interactive categorical games. Crafted a MongoDB database storing 1500+ unique questions generated using News APIs and OpenAI API.
              </p>
            </VerticalTimelineElement>
<VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"Jul 2024 - Sep 2024"}
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
Implemented Machine Vision via OpenCV in Python, achieving 98%+ accuracy in automated tracking of production. Minimized manual effort by 89% and counting accuracy by 18% through digitization and automation of processes. Presented real-time counts of 40K+ jars daily on a React frontend through a Django backend using AWS.          </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={"Apr 2024 - Jul 2024"}
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
                Automated 14 quality/quantity check forms via a React web app for reducing paperwork and data entry errors. Reduced turnaround time from over 24 hours to 30 minutes for form submission to supervisor review. Developed a Django backend that improved efficiency 3-fold by automatic form compilation into PDF and CSV.

              </p>
            </VerticalTimelineElement>

            
            {/* Existing Timeline Elements Below */}

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
                </a>{" "}
                | Remote/Austin, TX
              </h4>
              <p data-aos="fade-right">
Built 3D interactive features with Three.js and Swift boosting session duration by 16% on the website and iOS app. Optimized backend performance in Django, cutting page load time by  23% with caching and indexing. Developed AI-driven personalized recommendations using Python and TensorFlow, increasing user retention by 12%              </p>
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
                Developed 3 web-based games for the Library’s touchscreen kiosk aimed at increasing interactions with the kiosk. Improved user engagement by 19% through scoreboards and real-time analytics with React and Node.JS. Boosted efficiency by 41% by automating data collection for leaderboard updates and optimizing the backend.
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
                Initiated tech support sessions for 16+ local residents at Putnam County Public Library,
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
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};
