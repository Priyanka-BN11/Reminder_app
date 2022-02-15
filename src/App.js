import React from "react";
import Reminder from "./Reminder";
import './App.css';
import Remindernew from "./Remindernew";

class App extends React.Component {
  render()
  {
    return(
      <div className="App">
      <div className="container-fluid">
      

        <h1>Reminder</h1>
       
      </div>
      <div className="datetime col-12">
      <h6>Today: {new Date().toDateString()}.</h6>
   
      <h6>{new Date().toLocaleTimeString()}.</h6>
      </div>
     
      <Remindernew/>
      </div>
    )
  }
}
export default App;
