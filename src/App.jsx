import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Preview from "./components/Preview";
import { Header } from "./components/Header";
import Experience from "./components/ExperienceInfo";
import uniqid from "uniqid";
import Education from "./components/EducationInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        fullName: "",
        address: "",
        email: "",
        phoneNumber: "",
        description: "",
      },
      experienceInfo: [
        {
          id: uniqid.time(),
          company: "",
          city: "",
          position: "",
          from: "",
          to: "",
        },
      ],
      educationInfo: [
        {
          id: uniqid.time(),
          place: "",
          city: "",
          title: "",
          from: "",
          to: "",
        },
      ],
    };
    this.handlerChangePersonalInput =
      this.handlerChangePersonalInput.bind(this);
    this.handlerChangeExperienceInput =
      this.handlerChangeExperienceInput.bind(this);
    this.addExpercience = this.addExpercience.bind(this);
    this.deleteExpercience = this.deleteExpercience.bind(this);
    this.handlerChangeEducationInput =
      this.handlerChangeEducationInput.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  handlerChangePersonalInput(e) {
    let { name, value } = e.target;
    this.setState({
      personalInfo: { ...this.state.personalInfo, [name]: value },
    });
  }

  handlerChangeExperienceInput(e) {
    let id = e.target.parentElement.parentElement.id;
    let { name, value } = e.target;
    let experienceElement = this.state.experienceInfo.find(
      (experience) => experience.id === id
    );
    experienceElement[name] = value;
    this.setState([...this.state.experienceInfo, { experienceElement }]);
    console.log(this.state.experienceInfo);
  }

  addExpercience() {
    this.setState({
      experienceInfo: [
        ...this.state.experienceInfo,
        {
          id: uniqid.time(),
          company: "",
          city: "",
          position: "",
          from: "",
          to: "",
        },
      ],
    });
  }

  deleteExpercience(e) {
    let id = e.target.id;
    let expInfoCopy = this.state.experienceInfo;
    let element = expInfoCopy.find((exp) => exp.id === id);
    expInfoCopy.splice(expInfoCopy.indexOf(element), 1);
    console.log(expInfoCopy);
    this.setState({
      experienceInfo: expInfoCopy,
    });
  }

  handlerChangeEducationInput(e) {
    let id = e.target.parentElement.parentElement.id;
    let { name, value } = e.target;
    let educationElement = this.state.educationInfo.find(
      (education) => education.id === id
    );
    educationElement[name] = value;
    this.setState([...this.state.educationInfo, { educationElement }]);
    console.log(this.state.educationInfo);
  }

  addEducation() {
    this.setState({
      educationInfo: [
        ...this.state.educationInfo,
        {
          id: uniqid.time(),
          place: "",
          city: "",
          title: "",
          from: "",
          to: "",
        },
      ],
    });
  }

  deleteEducation(e) {
    let id = e.target.id;
    let eduInfoCopy = this.state.educationInfo;
    let element = eduInfoCopy.find((edu) => edu.id === id);
    eduInfoCopy.splice(eduInfoCopy.indexOf(element), 1);
    console.log(eduInfoCopy);
    this.setState({
      educationInfo: eduInfoCopy,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col lg={6} className="my-5 px-3 py-4 border bg-color">
              <GeneralInfo
                handlerChangeInput={this.handlerChangePersonalInput}
                personalInfo={this.state.personalInfo}
              />
              <Experience
                experienceInfo={this.state.experienceInfo}
                add={this.addExpercience}
                remove={this.deleteExpercience}
                changeInput={this.handlerChangeExperienceInput}
              />
              <Education
                educationInfo={this.state.educationInfo}
                add={this.addEducation}
                remove={this.deleteEducation}
                changeInput={this.handlerChangeEducationInput}
              />
            </Col>
            <Col lg={6} className="my-5 px-3 py-4 border bg-color g-0">
              <Preview
                className="my-3"
                personalInfo={this.state.personalInfo}
                experienceInfo={this.state.experienceInfo}
                educationInfo={this.state.educationInfo}

              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
