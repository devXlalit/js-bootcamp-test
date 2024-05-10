import React from "react";
import WeekCard from "./WeekCard";

const Buildsection = () => {
  return (
    <div>
      <h1 className="text-center pt-12 text-white text-3xl md:text-4xl font-bold ">
        What exactly we’ll learn & build❓
      </h1>
      <div className="flex flex-wrap justify-center gap-8 pt-12">
        <WeekCard
          week="Week 1"
          topic="Javascript Basics"
          list1="Introduction to JavaScript ES6 basics.
          "
          list2="Understanding basic JS APIs."
        />
        <WeekCard
          week="Week 2"
          topic="Intermediate JavaScript"
          list1="Gaining proficiency in intermediate JavaScript concepts. "
          list2="Exploring JS animation techniques."
        />
        <WeekCard
          week="Week 3"
          topic="Advanced JavaScript & DOM Manipulation"
          list1="Mastering DOM manipulation techniques."
          list2="Exploring GSAP for web animations."
        />
        <WeekCard
          week="Week 4"
          topic="Introduction to React.js"
          list1="Understanding React.js fundamentals."
          list2="Learning Redux for state management."
        />
        <WeekCard
          week="Week 5"
          topic="Building with React.js"
          list1="Building dynamic user interfaces with ReactJs."
          list2="Creating interactive web applications."
        />
        <WeekCard
          week="Week 6"
          topic="Javascript Basics"
          list1="Engaging in hands-on projects to apply learned concepts."
          list2="Preparing for technical interviews.
          Accessing placement and internship assistance."
        />
      </div>
    </div>
  );
};

export default Buildsection;
