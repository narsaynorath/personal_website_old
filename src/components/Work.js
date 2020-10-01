import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Security Compass - SD Elements</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">September 2019 - Present</em>
		  </p>
          <p className="info">
            Software Engineer Intern
            <span>&bull;</span>
            <em className="date">May 2017 - August 2018</em>
          </p>

          <ul className="circle">
            <li>Frontend: Implemented the redesign of several integral application pages with ReactJS and Redux to provide customers with a modern user interface, resulting in notable positive feedback from customers</li>
            <li>Backend: Developed new API endpoints, implemented features in existing ones, and created new Django commands to improve functionality for client-facing API</li>
            <li>Worked with UX Designers and Product Managers in an Agile environment to identify and negotiate developer acceptance criteria for client needs and customizations</li>
            <li>Experienced Developer Support sprints and resolved client Zendesk issues/inquiries requiring developer domain knowledge</li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>SickKids Hospital</h3>
          <p className="info">
            Lab Assistant
            <span>&bull;</span>
            <em className="date">September 2015 - March 2016</em>
          </p>

          <ul className="circle">
            <li>Performed fish husbandry tasks, such as preparing and distributing feed, creating mating pairs, and maintaining specimen environments</li>
            <li>Communicated to colleagues about proper lab techniques, procedure changes, and specimen health</li>
            <li>Took initiative to self-assign tasks when planned work was completed</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
