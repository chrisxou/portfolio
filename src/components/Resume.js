import React, { Component } from "react";
import "./resume.css";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>

                      <ul>
                        {item.Achievements.map((ach) => {
                          return (
                            <li style={{ listStyle: "disc outside none " }}>
                              <em>{ach.achievement}</em>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>


   
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.certifications &&
              resumeData.certifications.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h4>{item.name} </h4>
                      <p >
                        {item.issuedBy}
                        <span>&bull;</span>{" "}
                        <em className="date">
                         Issued: {item.MonthOfPassing} {item.year}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>








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
