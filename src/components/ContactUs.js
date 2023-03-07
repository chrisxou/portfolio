import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" style={{display:"flex", justifyContent:"center",textAlign:"center"}}>
        <div className="row" style={{display:"contents"}}>
          <div className="columns contact-details">
            <h2 style={{color:"#a1a1a1"}}>Contact Details</h2>
            <p className="address">
            <span>{resumeData.name}</span>
              <br />
              <span>{resumeData.address}</span>
              <br />
             <span>{resumeData.website}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
