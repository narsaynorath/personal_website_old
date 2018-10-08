import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      {/*<p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>*/}
      <table>
        <tr>
          <th>Programming Languages</th>
          <td>Python, JavaScript, Java, LaTeX</td>
        </tr>
        <tr>
          <th>Frameworks and Libraries</th>
          <td>Django, Django REST Framework, ReactJS, Redux, Material UI, GatsbyJS</td>
        </tr>
        <tr>
          <th>Tools</th>
          <td>Git, GitLab, GitHub, Vim, PyCharm, JIRA</td>
        </tr>
        <tr>
          <th>Operating Systems</th>
          <td>Linux (Ubuntu), OS X, Windows</td>
        </tr>
      </table>

      {/*<div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>Photoshop</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Illustrator</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Wordpress</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
        </ul>
      </div> */}
    </div>
  </div>
);

export default Skills;
