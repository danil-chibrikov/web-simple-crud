import React, { Component } from "react";
import Account from "./Accounts/Account";

 class Backlog extends Component {
     
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>Ruble</h3>
              </div>
            </div>
            <Account />
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>Euro</h3>
              </div>
            </div>
            <Account />
            {
              //  <!-- SAMPLE PROJECT TASK STARTS HERE -->
              //         <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>Dollar</h3>
              </div>
            </div>
            {
              // <!-- SAMPLE PROJECT TASK STARTS HERE -->
              // <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
        </div>
      </div>
    );
  }
}
 export default Backlog;