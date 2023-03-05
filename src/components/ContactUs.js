import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <div className="columns contact-details">
            <h2 style={{color:"#a1a1a1"}}>Contact Details</h2>
            <p className="address">
              Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{resumeData.name}</span>
              <br />
              Address:&nbsp;&nbsp;&nbsp;<span>{resumeData.address}</span>
              <br />
              Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{resumeData.website}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
