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
                Partnered with the neuroscience department to develop an iOS and Android-friendly application using React Native. Integrated interactive games with a vast library of questions to boost cognitive stimulation for 2200+ Alzheimer’s patients. Crafted an LLM that dynamically generates 170+ trivia questions based on user preferences using relevant News APIs.

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
                Automated 14 quality and quantity check forms in a React-based web app for reducing data entry errors and paper stacks. Reduced the turnaround time from submission of the forms to supervisor review from over 24 hours to just 30 minutes. Built a Django backend to manage and compile forms into PDFs, improving efficiency and documentation.

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
                Utilized Machine Vision and OpenCV for counting jars passing through a production line with over 98% accuracy. Enhanced counting accuracy and reduced waste in jar production by 18%, optimizing overall proficiency. Presented real-time counts of 150000+ jars based on the day on a React web app via a Django backend hosted on AWS.
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
                </a>
                | Remote/Austin, TX
              </h4>
              <p data-aos="fade-right">
                Improved user engagement by 16%  across the company’s website and application through Three JS and Python. Led full-stack development to optimize the backend performance while simultaneously cutting page load times. Secured an acquisition of 12 clients as the Indiana brand ambassador through strategic networking efforts.
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
                Developed 3 web applications games for the Library’s touchscreen kiosk, increasing user engagement by 19%. Increased repeated interactions through scoreboards and real-time analytics with React Hooks and Django. Boosted efficiency by 40% by automating data collection and leaderboard updates through optimized backend operations.
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
