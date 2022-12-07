import { Component } from "react";

class Input extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( <input
            className="form-control"
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.change}
          /> );
    }
}
 
export default Input;