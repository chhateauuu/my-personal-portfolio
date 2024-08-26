import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Undergraduate Student", "Full Stack Web Developer", "Front- and Back-end Software Developer", "AI/ML Intern and Full stack Software Developer at BNutty LLC", "iOS Developer at DePauw Tenzer Technology Center", "SDE Intern at Tenzer Tech Center", "Debater"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
