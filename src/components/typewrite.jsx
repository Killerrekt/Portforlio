import { ReactTyped } from "react-typed";

const TypeWriter = () => (
  <div className="typewriter">
    C:\User\Aman_L\
    <ReactTyped
      strings={[
        "Aka_killerrekt",
        "Backend_developer",
        "Age_19",
        "Team_player",
        "Passionate_learner",
        "Competitive",
        "Pushing_myself",
      ]}
      typeSpeed={100}
      loop
      backSpeed={40}
      cursorChar="|"
      showCursor={true}
    />
  </div>
);
export default TypeWriter;
