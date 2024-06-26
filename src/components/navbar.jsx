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

    const MouseDown = (e) => {
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
      var check;
      try {
        check = e.touches[0];
        check = true;
      } catch {
        check = false;
      }
      if (check) {
        var touch = e.touches[0];
        coords.startx = touch.clientX - element.offsetLeft;
        coords.starty = touch.clientY - element.offsetTop;
      } else {
        coords.startx = e.clientX - element.offsetLeft;
        coords.starty = e.clientY - element.offsetTop;
      }
    };

    const MouseUp = (e) => {
      IsActive.current = false;
    };

    const MouseMove = (e) => {
      if (!IsActive.current) {
        return;
      }
      var check;
      try {
        check = e.touches[0];
        check = true;
      } catch {
        check = false;
      }

      element.style.position = "absolute";

      if (check) {
        var touch = e.touches[0];
        var nextx = touch.clientX - coords.startx;
        var nexty = touch.clientY - coords.starty;
        if (
          nextx + 400 <= window.innerWidth &&
          nexty + 300 <= window.innerHeight &&
          nextx >= 0 &&
          nexty >= 0 &&
          touch.clientX >= element.offsetLeft &&
          touch.clientY >= element.offsetTop &&
          touch.clientY <= element.offsetTop + 300 &&
          touch.clientX <= element.offsetLeft + 400
        ) {
          element.style.top = `${nexty}px`;
          element.style.left = `${nextx}px`;
        }
      } else {
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
      }
    };

    element.addEventListener("mousedown", MouseDown);
    element.addEventListener("mouseup", MouseUp);
    element.addEventListener("touchstart", MouseDown);
    element.addEventListener("touchend", MouseUp);
    window.addEventListener("touchmove", MouseMove);
    window.addEventListener("touchcancel", MouseUp);
    window.addEventListener("mousemove", MouseMove);

    return () => {
      element.removeEventListener("mousedown", MouseDown);
      element.removeEventListener("mouseup", MouseUp);
      element.removeEventListener("touchstart", MouseDown);
      element.removeEventListener("touchend", MouseUp);
      window.removeEventListener("touchmove", MouseMove);
      window.removeEventListener("touchcancel", MouseUp);
      window.addEventListener("mousemove", MouseMove);
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
