import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="draw a picture" emoji="🎨🧹" color="orange" />
      <Skill skill="play a game" emoji="🎮" color="skyblue" />
      <Skill skill="python" emoji="✊" color="yellow" />
      <Skill skill="javascript" emoji="🤏" color="lime" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นางสาวกมลรัตน์ สาลีวรรณ</h1>
      <p>
        นักศึกษา ICT อารมณ์ดี เฟรนลี่ แต่โลกส่วนตัวสูง
        จากสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบการวาดภาพและออกแบบ
        อยากเป็นนักพัฒนาเว็บโปรแกรมมิ่งที่เก่งในอนาคต😇
      </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="kamon.jpg" alt="My Avatar"></img>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
