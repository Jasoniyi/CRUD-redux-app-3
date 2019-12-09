import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "./actions";

class CreateStudent extends Component {
  state = {
    addPupil: "",
    addGrade: "",
    addSchool: ""
  };

  onChangeStudentText = e => {
    this.setState({
      addPupil: e.target.value
    });
  };

  onChangeStudentGrade = e => {
    this.setState({
      addGrade: e.target.value
    });
  };

  onChangeStudentSchool = e => {
    this.setState({
      addSchool: e.target.value
    });
  };

  render() {
    const { addPupil, addGrade, addSchool } = this.state;
    // console.log("state", this.state);
    // console.log("props", this.props);
    return (
      <div className="pull-right">
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              placeholder="name"
              className="mx-2"
              value={this.state.addPupil}
              onChange={this.onChangeStudentText}
            />
            <input
              placeholder="grade"
              className="mx-2"
              value={this.state.addGrade}
              onChange={this.onChangeStudentGrade}
            />
            <input
              placeholder="School"
              className="mx-2"
              value={this.state.addSchool}
              onChange={this.onChangeStudentSchool}
            />
            <button
              className="btn btn-dark pull-left"
              onClick={() => {
                this.props.addStudent(addPupil, addGrade, addSchool);
                this.setState({ addPupil: "", addGrade: "", addSchool: "" });
              }}
            >
              Add New
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addStudent })(CreateStudent);
