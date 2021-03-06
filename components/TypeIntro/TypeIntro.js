import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeIntro() {
  return (
    <section className="intro_text">
      <div>Hello</div>
      <div>
        <Typewriter
          options={{
            delay: 20,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "I'm Elijah Simpson, a Project Manager, Scrum Master, and Full-Stack Engineer "
              )
              .start();
          }}
        />
      </div>
    </section>
  );
}
