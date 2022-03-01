import React, { useState } from "react";
import Project from "../Project";

const PortfolioList = ({tech}) => {

  const [projects] = useState([
    {
      name: "Flavor Express",
      src: "flavor-express.png",
      tech: "Fullstack",
      description: "A recipe sharing app.",
      link: "https://flavor-express.herokuapp.com/",
      git: "https://github.com/ricky0320/FlavorExpress.git"
    },
    {
      name: "Music Matcher",
      src: "music-matcher.png",
      tech:"Front-End",
      description: "A music app that returns similar musics.",
      link: "https://ricky0320.github.io/MusicMatcher/",
      git: "https://github.com/ricky0320/MusicMatcher.git"
    },
    {
      name: "Coding Quiz",
      src: "coding-quiz.png",
      tech: "Front-End",
      description: "An quiz app for JavaScript, HTML and CSS.",
      link: "https://kcheykim.github.io/coding-quiz/",
      git: "https://github.com/kcheykim/coding-quiz.git"
    },
    {
      name: "Note Taker",
      src: "note-taker-landing.png",
      tech: "Back-End",
      description: "An note taking app.",
      link: "https://sleepy-cove-15810.herokuapp.com/",
      git: "https://github.com/kcheykim/note-taker.git"
    },
    {
      name: "Weather Dashboard",
      src: "weather-dashboard.png",
      tech: "Front-End",
      description: "An weather app.",
      link: "https://kcheykim.github.io/weather-dashboard/",
      git: "https://github.com/kcheykim/work-day-scheduler.git"
    },
    {
      name: "Work Day Scheduler",
      src: "work-day-scheduler.png",
      tech: "Front-End",
      description: "An application that keeps track of daily schedule.",
      link: "https://ricky0320.github.io/work-day-scheduler/",
      git: "https://github.com/ricky0320/work-day-scheduler.git"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
         <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
