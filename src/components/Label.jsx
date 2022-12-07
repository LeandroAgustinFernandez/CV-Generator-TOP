import { Component } from "react";

class Label extends Component {
    capitalize(string){
        return `${string[0].toUpperCase()}${string.substring(1)}`;
    }

  render() {
    return (
      <label className="form-label" htmlFor={this.props.value}>
        {this.capitalize(this.props.value)}
      </label>
    );
  }
}

export default Label;
