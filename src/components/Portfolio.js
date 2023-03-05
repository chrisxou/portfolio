import React, { Component } from "react";
import "./resume.css";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" style={{paddingTop:"40px"}}>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{fontSize:"35px"}}>Projects</h1>
            {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf"> */}

            <div className="container">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <>
                      <div className="skills2">
                        <a href={item.url}>
                          <img style={{width:"700px", paddingBottom:"20px"}} src={item.imgurl} alt="" />
                        </a>
                        <h5 style={{ paddingBottom:"10px"}}>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}
