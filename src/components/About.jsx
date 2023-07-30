import React from "react";
import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";
const About = () => {
  const props = useContext(NoteContext);
  return (
    <>
      {/* {console.log(mode)} // to test if the mode parameter is being passed or not */}
      <div className="container">
        <h1 className="my-3">
          <strong>About</strong>
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>About me</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Hello! My name is Kevin Pereira, and I'm a computer science
                engineer with a passion for building innovative applications.
                Welcome to my project website, where I showcase my iNotebook
                project and share my love for coding.
              </div>
            </div>
             
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Cloud Notebook App</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                iNotebook is a cloud-based notebook app built with the MERN
                stack (MongoDB, Express, React, Node.js). Users can create,
                store, and manage notes effortlessly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Features</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                With this app, you can securely log in, organize notes easily,
                and enjoy a user-friendly interface. Access notes from anywhere,
                boosting productivity and staying organized. iNotebook leverages
                modern web technologies for a smooth and versatile note-taking
                experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
