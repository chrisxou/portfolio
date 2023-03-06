import React, { Component } from "react";
import "./resume.css";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
 

      <section id="skills" style={{paddingTop:"0"}}>
        <div className="row skill">
          <div className="three columns header-col" >
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="container">
            {resumeData.skills &&
              resumeData.skills.map((item) => {
                return (
                  <>
                    <div className="skills">
                      <img
                      className='imgSkills'
                      src={item.src}
                      alt=""
                    />
                      <p className="titleSkill">{item.skillname}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>

</section>
     
    
    );
  }
}
