import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DailyTransaction from "./components/DailyTransaction";
import SetBudgetButton from "./components/SetBudgetButton";
import ScheduledExpenses from "./components/ScheduledExpenses";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div>
          <nav id="sidebar" className="sidebar_navbar">
            <Sidebar />
          </nav>
          <main className=" main_container">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <DailyTransaction />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <SetBudgetButton />
                  </div>
                  <div>
                    <ScheduledExpenses />
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-8">
                  
                </div>
                <div className="col-md-4">
                  <ScheduledExpenses />
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
