import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>ASAMOAH RICHARD</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        laborum numquam? Nam reiciendis dignissimos id amet soluta suscipit
        mollitia facere?
      </p>
    </div>
  );
}
function Avatar() {
  return (
    <div className="img">
      <img className="img" src="asamoah.jpg" alt="p" />
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JAVASCRIPT" emoji="💪" color="yellow" />
      <Skill skill="WEB DESIGN" emoji="💪" color="green" />
      <Skill skill="GIT AND GITHUB" emoji="💪" color="orangered" />
      <Skill skill="React" emoji="💪" color="violet" />
      <Skill skill="Svelte" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
