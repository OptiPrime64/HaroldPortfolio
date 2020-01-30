import React from "react";

function Intro() {
  return (
    <div className="introdiv">
      <div className="container">
        <div className="row">
          <div className="col" lg={6}>
            <img
              src="https://st2.depositphotos.com/3752757/5284/v/950/depositphotos_52843577-stock-illustration-working-hard-on-laptop-in.jpg"
              alt="At Laptop"
              height="350"
              width="350"
            />
          </div>
          <div className="col myName" lg={6}>
            <h1>
              Harold <br /> Jennett
            </h1>
            <h2>Illustrator • Web Developer</h2>
          </div>
        </div>
        <div className="row">
          <div classname="col" lg={12}>
            <h1 name="hate" id="hate">
              I hate react.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div>
//   <h1>Hello CodeSandbox</h1>
//   <h2>Start editing to see some magic happen!</h2>
// </div>

export default Intro;
