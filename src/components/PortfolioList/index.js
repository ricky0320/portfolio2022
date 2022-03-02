import React, { useState } from "react";
import Project from "../Project";

const PortfolioList = ({tech}) => {

  const [projects] = useState([
    {
      name: "Flavor Express",
      src: "flavor-express.jpg",
      tech: "Fullstack",
      description: "A recipe sharing app.",
      link: "https://flavor-express.herokuapp.com/",
      git: "https://github.com/ricky0320/FlavorExpress.git"
    },
    {
      name: "Music Matcher",
      src: "music-matcher.jpg",
      tech:"Front-End",
      description: "A music app that returns similar musics.",
      link: "https://ricky0320.github.io/MusicMatcher/",
      git: "https://github.com/ricky0320/MusicMatcher.git"
    },
    {
      name: "Coding Quiz",
      src: "coding-quiz.jpg",
      tech: "Front-End",
      description: "Quiz built with JavaScript.",
      link: "https://ricky0320.github.io/quiz-stop/",
      git: "https://github.com/ricky0320/quiz-stop.git"
    },
    {
      name: "Note Taker",
      src: "note-taker.jpg",
      tech: "Back-End",
      description: "A note taking app.",
      link: "https://mobile-notes.herokuapp.com/",
      git: "https://github.com/ricky0320/Mobile-Notes.git"
    },
    {
      name: "Weather Dashboard",
      src: "weather-dashboard.jpg",
      tech: "Front-End",
      description: "Weather tracker app.",
      link: "https://ricky0320.github.io/weather-tracker/",
      git: "https://github.com/kcheykim/work-day-scheduler.git"
    },
    {
      name: "Work Day Scheduler",
      src: "work-day-scheduler.jpg",
      tech: "Front-End",
      description: "Daily schedule App.",
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
