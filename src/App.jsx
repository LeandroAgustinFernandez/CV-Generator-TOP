import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Preview from "./components/Preview";
import Experience from "./components/ExperienceInfo";
import Education from "./components/EducationInfo";
import uniqid from "uniqid";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handlerChangePersonalInput = (e) => {
    let { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: uniqid.time(),
      company: "",
      city: "",
      position: "",
      from: "",
      to: "",
    },
  ]);

  const handlerChangeExperienceInput = (e) => {
    let id = e.target.parentElement.parentElement.id;
    let { name, value } = e.target;
    setExperienceInfo((experienceInfo) => {
      experienceInfo = experienceInfo.map((experience) => {
        if (experience.id === id) {
          experience[name] = value;
        }
        return experience;
      });
      return experienceInfo;
    });
  };

  const addExpercience = () => {
    setExperienceInfo([
      ...experienceInfo,
      {
        id: uniqid.time(),
        company: "",
        city: "",
        position: "",
        from: "",
        to: "",
      },
    ]);
  };

  const deleteExpercience = (e) => {
    let id = e.target.id;
    setExperienceInfo((experienceInfo) => {
      let experienceNew = [];
      experienceInfo.forEach((experience) => {
        if (experience.id !== id) experienceNew.push(experience);
      });
      return experienceNew;
    });
  };

  const [educationInfo, setEducationInfo] = useState([
    {
      id: uniqid.time(),
      place: "",
      city: "",
      title: "",
      from: "",
      to: "",
    },
  ]);

  const handlerChangeEducationInput = (e) => {
    let id = e.target.parentElement.parentElement.id;
    let { name, value } = e.target;
    setEducationInfo((educationInfo) => {
      educationInfo = educationInfo.map((education) => {
        if (education.id === id) {
          education[name] = value;
        }
        return education;
      });
      return educationInfo;
    });
  };

  const addEducation = () => {
    setEducationInfo([
      ...educationInfo,
      {
        id: uniqid.time(),
        place: "",
        city: "",
        title: "",
        from: "",
        to: "",
      },
    ]);
  };

  const deleteEducation = (e) => {
    let id = e.target.id;
    setEducationInfo((educationInfo) => {
      let educationNew = [];
      educationInfo.forEach((education) => {
        if (education.id !== id) educationNew.push(education);
      });
      return educationNew;
    });
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col lg={6} className="my-5 px-3 py-4 border bg-color">
            <GeneralInfo
              handlerChangeInput={handlerChangePersonalInput}
              personalInfo={personalInfo}
            />
            <Experience
              experienceInfo={experienceInfo}
              add={addExpercience}
              remove={deleteExpercience}
              changeInput={handlerChangeExperienceInput}
            />
            <Education
              educationInfo={educationInfo}
              add={addEducation}
              remove={deleteEducation}
              changeInput={handlerChangeEducationInput}
            />
          </Col>
          <Col lg={6} className="my-5 px-3 py-4 border bg-color g-0">
            <Preview
              className="my-3"
              personalInfo={personalInfo}
              experienceInfo={experienceInfo}
              educationInfo={educationInfo}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       experienceInfo: [
//         {
//           id: uniqid.time(),
//           company: "",
//           city: "",
//           position: "",
//           from: "",
//           to: "",
//         },
//       ],
//       educationInfo: [
//         {
//           id: uniqid.time(),
//           place: "",
//           city: "",
//           title: "",
//           from: "",
//           to: "",
//         },
//       ],
//     };
//   }

//   handlerChangeEducationInput(e) {
//     let id = e.target.parentElement.parentElement.id;
//     let { name, value } = e.target;
//     let educationElement = this.state.educationInfo.find(
//       (education) => education.id === id
//     );
//     educationElement[name] = value;
//     this.setState([...this.state.educationInfo, { educationElement }]);
//     console.log(this.state.educationInfo);
//   }

//   addEducation() {
//     this.setState({
//       educationInfo: [
//         ...this.state.educationInfo,
//         {
//           id: uniqid.time(),
//           place: "",
//           city: "",
//           title: "",
//           from: "",
//           to: "",
//         },
//       ],
//     });
//   }

//   deleteEducation(e) {
//     let id = e.target.id;
//     let eduInfoCopy = this.state.educationInfo;
//     let element = eduInfoCopy.find((edu) => edu.id === id);
//     eduInfoCopy.splice(eduInfoCopy.indexOf(element), 1);
//     console.log(eduInfoCopy);
//     this.setState({
//       educationInfo: eduInfoCopy,
//     });
//   }

//   render() {
//     return (
// <div className="App">
//   <Header />
//   <Container>
//     <Row>
//       <Col lg={6} className="my-5 px-3 py-4 border bg-color">
//         <GeneralInfo
//           handlerChangeInput={this.handlerChangePersonalInput}
//           personalInfo={this.state.personalInfo}
//         />
//         <Experience
//           experienceInfo={this.state.experienceInfo}
//           add={this.addExpercience}
//           remove={this.deleteExpercience}
//           changeInput={this.handlerChangeExperienceInput}
//         />
//         <Education
//           educationInfo={this.state.educationInfo}
//           add={this.addEducation}
//           remove={this.deleteEducation}
//           changeInput={this.handlerChangeEducationInput}
//         />
//       </Col>
//       <Col lg={6} className="my-5 px-3 py-4 border bg-color g-0">
//         <Preview
//           className="my-3"
//           personalInfo={this.state.personalInfo}
//           experienceInfo={this.state.experienceInfo}
//           educationInfo={this.state.educationInfo}

//         />
//       </Col>
//     </Row>
//   </Container>
// </div>
//     );
//   }
// }

// export default App;
