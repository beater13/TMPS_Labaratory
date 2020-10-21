import React from 'react';
import './App.css';
import { ScheduleList } from "./todo/single"

const MyScheduleList = ScheduleList.getPiece()
MyScheduleList.setScheduleCategory({
  university: "UTM",
  work: "work",
  life: "irl"
})

export default function App() {

  MyScheduleList.addToEat("balgarskii peret", "I need to eat my favorite food")
  MyScheduleList.addToPlay("game", "it's gaming time")
  MyScheduleList.addToWatch("video", "I need to watch hindu lesson to complete the lab")
  MyScheduleList.addToWork("task", "I gotta complete today's tasks")
  
  return (
    <div className="App">
      <header className="App-header">
        This is just a demo version please check browser console console
      </header>
    </div>
  );
}