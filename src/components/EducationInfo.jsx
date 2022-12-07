import { Component } from "react";
import Input from "./Input";
import Label from "./Label";

class Education extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {};
  render() {
    return (
      <>
        <h3>Education</h3>
        {this.props.educationInfo.map((education) => (
          <div key={education.id}>
            <form id={education.id}>
              <div className="form-group">
                <Label value="place" />
                <Input
                  change={this.props.changeInput}
                  value={education.place}
                  type="text"
                  name="place"
                />
              </div>
              <div className="form-group">
                <Label value="city" />
                <Input
                  change={this.props.changeInput}
                  value={education.city}
                  type="text"
                  name="city"
                />
              </div>
              <div className="form-group">
                <Label value="title" />
                <Input
                  change={this.props.changeInput}
                  value={education.title}
                  type="text"
                  name="title"
                />
              </div>
              <div className="form-group">
                <Label value="from" />
                <Input
                  change={this.props.changeInput}
                  value={education.from}
                  type="text"
                  name="from"
                />
              </div>
              <div className="form-group">
                <Label value="to" />
                <Input
                  change={this.props.changeInput}
                  value={education.to}
                  type="text"
                  name="to"
                />
              </div>
            </form>
            <button
              className="btn btn-dark w-100 my-3"
              onClick={this.props.remove}
              id={education.id}
            >
              Delete
            </button>
          </div>
        ))}
        <button className="btn btn-dark w-100 my-3" onClick={this.props.add}>
          Add
        </button>
      </>
    );
  }
}

export default Education;
