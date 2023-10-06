import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Undergraduate Student", "Full Stack Web Developer", "Front- and Back-end Software Developer", "SDE Intern at Tenzer Tech Center", "Debater"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
