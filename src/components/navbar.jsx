import React, { useEffect, useState, useRef } from "react";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import Skill from "./skill";

function NavBar() {
  var [AboutClicked, SetAboutClicked] = useState(false);
  var [ProjectClicked, SetProjectClicked] = useState(false);
  var [ContactClicked, SetContactClicked] = useState(false);
  var [SkillClicked, SetSkillClicked] = useState(false);
  var IsActive = useRef(false);

  var coords = useRef({ startx: 0, starty: 0 });

  const AboutClick = () => {
    SetAboutClicked(true);
    SetProjectClicked(false);
    SetContactClicked(false);
    SetSkillClicked(false);
    coords.startx = 0;
    coords.starty = 0;
  };

  const ProjectClick = () => {
    SetProjectClicked(true);
    SetAboutClicked(false);
    SetContactClicked(false);
    SetSkillClicked(false);
    coords.startx = 0;
    coords.starty = 0;
  };

  const ContactClick = () => {
    SetContactClicked(true);
    SetAboutClicked(false);
    SetProjectClicked(false);
    SetSkillClicked(false);
    coords.startx = 0;
    coords.starty = 0;
  };

  const SkillClick = () => {
    SetSkillClicked(true);
    SetAboutClicked(false);
    SetProjectClicked(false);
    SetContactClicked(false);
    coords.startx = 0;
    coords.starty = 0;
  };

  var aboutRef = useRef(null);
  var skillRef = useRef(null);
  var contactRef = useRef(null);
  var projectRef = useRef(null);

  useEffect(() => {
    var element;
    if (
      !aboutRef.current &&
      !skillRef.current &&
      !contactRef.current &&
      !projectRef.current
    ) {
      return;
    } else {
      if (aboutRef.current) element = aboutRef.current;
      if (skillRef.current) element = skillRef.current;
      if (contactRef.current) element = contactRef.current;
      if (projectRef.current) element = projectRef.current;
    }

    const AboutMouseDown = (e) => {
      if (
        e.clientX >= element.offsetLeft + 360 &&
        e.clientX <= element.offsetLeft + 390 &&
        e.clientY >= element.offsetTop + 5 &&
        e.clientY <= element.offsetTop + 55
      ) {
        IsActive.current = false;
        SetAboutClicked(false);
        SetContactClicked(false);
        SetProjectClicked(false);
        SetSkillClicked(false);
        return;
      }
      if (IsActive.current) {
        return;
      }
      IsActive.current = true;
      coords.startx = e.clientX - element.offsetLeft;
      coords.starty = e.clientY - element.offsetTop;
    };

    const AboutMouseUp = (e) => {
      IsActive.current = false;
    };

    const AboutMouseMove = (e) => {
      if (!IsActive.current) {
        return;
      }
      element.style.position = "absolute";
      var nextx = e.clientX - coords.startx;
      var nexty = e.clientY - coords.starty;
      if (
        nextx + 400 <= window.innerWidth &&
        nexty + 300 <= window.innerHeight &&
        nextx >= 0 &&
        nexty >= 0 &&
        e.clientX >= element.offsetLeft &&
        e.clientY >= element.offsetTop &&
        e.clientY <= element.offsetTop + 300 &&
        e.clientX <= element.offsetLeft + 400
      ) {
        element.style.top = `${nexty}px`;
        element.style.left = `${nextx}px`;
      }
    };

    element.addEventListener("mousedown", AboutMouseDown);
    element.addEventListener("mouseup", AboutMouseUp);
    window.addEventListener("mousemove", AboutMouseMove);

    return () => {
      element.removeEventListener("mousedown", AboutMouseDown);
      element.removeEventListener("mouseup", AboutMouseUp);
      window.addEventListener("mousemove", AboutMouseMove);
    };
  }, [AboutClicked, ProjectClicked, ContactClicked, SkillClicked]);

  return (
    <>
      <nav>
        <ul>
          <li onClick={AboutClick} className="nav">
            /About
          </li>
          <li onClick={SkillClick} className="nav">
            /Skills
          </li>
          <li onClick={ProjectClick} className="nav">
            /Project
          </li>
          <li onClick={ContactClick} className="nav">
            /Contact
          </li>
        </ul>
      </nav>
      {AboutClicked && (
        <div ref={aboutRef}>
          <About />
        </div>
      )}
      {ContactClicked && (
        <div ref={contactRef}>
          <Contact />
        </div>
      )}
      {ProjectClicked && (
        <div ref={projectRef}>
          <Project />
        </div>
      )}
      {SkillClicked && (
        <div ref={skillRef}>
          <Skill />
        </div>
      )}
    </>
  );
}

export default NavBar;
