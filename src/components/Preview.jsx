import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { personalInfo, experienceInfo, educationInfo } = this.props;
    return (
      <section>
        <h2 className="mb-5 text-center">
          {personalInfo.fullName || "Your Name"}
        </h2>
        <article>
          <div className="px-2">
            <p>
              <strong>Address:</strong>{" "}
              {personalInfo.address || "eg: Santa Fe 1234"}
            </p>
            <p>
              <strong>Phone Number:</strong>{" "}
              {personalInfo.phoneNumber || "eg: +54 11 12341234"}
            </p>
            <p>
              <strong>E-mail:</strong>{" "}
              {personalInfo.email || "eg: example@email.com"}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {personalInfo.description ||
                "eg: I'm a junior developer since..."}
            </p>
          </div>
        </article>
        <article>
          <h4 className="text-end bg-secondary text-white pt-1 pb-4 px-1">
            Experience
          </h4>
          <hr />
          <div className="px-2">
            {experienceInfo.map((experience) => (
              <div key={experience.id} className="mb-2 border-bottom">
                <p>
                  <strong>Company:</strong> {experience.company || "eg: IBM"}
                </p>
                <p>
                  <strong>City:</strong> {experience.city || "eg: Mexico City"}
                </p>
                <p>
                  <strong>Position:</strong>{" "}
                  {experience.position || "eg: Front-End Developer"}
                </p>
                <p>
                  <strong>From - To:</strong> {experience.from || "eg: mm/yyyy"}{" "}
                  - {experience.to || "mm/yyyy"}
                </p>
              </div>
            ))}
          </div>
        </article>
        <article>
          <h4 className="text-end bg-secondary text-white pt-1 pb-4 px-1">
            Education
          </h4>
          <hr />
          <div className="px-2">
            {educationInfo.map((education) => (
              <div key={education.id} className="mb-2 border-bottom">
                <p>
                  <strong>Place:</strong> {education.place || "eg: IBM"}
                </p>
                <p>
                  <strong>City:</strong> {education.city || "eg: Mexico City"}
                </p>
                <p>
                  <strong>Title:</strong>{" "}
                  {education.title || "eg: Front-End Developer"}
                </p>
                <p>
                  <strong>From - To:</strong> {education.from || "eg: mm/yyyy"}{" "}
                  - {education.to || "mm/yyyy"}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  }
}

export default Preview;
