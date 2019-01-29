import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Toronto</h3>
          <p className="info">
            Computer Science, Mathematics, Human Physiology
            <span>&bull;</span>
            <em className="date">June 2019</em>
          </p>

          <h5>
            Relevant Coursework
          </h5>
          <ul>
            <li>
              <div>
                <h6>In-Progress</h6>
                <ul>
                  <li>CSC373: Algorithm Design, Analysis & Complexity</li>
                  <li>CSC369: Operating Systems</li>
                  <li>CSC343: Introduction to Databases</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <h6>Completed</h6>
                <ul>
                  <li>CSC258: Computer Organization</li>
                  <li>CSC209: Software Tools and Systems Programming</li>
                  <li>CSC263: Data Structures</li>
                  <li>CSC207: Software Design</li>
                  <li>CSC236: Introduction to Theory of Computation</li>
                  <li>CSC165: Mathematical Expression and Reasoning for Computer Science</li>
                  <li>CSC148: Intro to Computer Programming</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/*<div className="row item">
        <div className="twelve columns">
          <h3>School of Cool Designers</h3>
          <p className="info">
            B.A. Degree in Graphic Design
            <span>&bull;</span>
            <em className="date">March 2003</em>
          </p>

          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat
          </p>
        </div>
      </div> */}
    </div>
  </div>
);

export default Education;
