import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent, updateStudent } from "./actions";
import { bindActionCreators } from "redux";

class StudentItem extends Component {
  state = {
    isEdit: false,
    toBeSaved: this.props.student
  };

  handleChange = field => event =>
    this.setState({
      toBeSaved: {
        ...this.state.toBeSaved,
        [field]: event.target.value
      }
    });

  onEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  };
  render() {
    // console.log("student", this.props.student);
    const { id, name, grade, school } = this.props.student;
    return (
      <>
        {this.state.isEdit ? (
          <tr className="bg-warning" key={this.props.index}>
            <td>
              <input onChange={this.handleChange("name")} defaultValue={name} />
            </td>
            <td>
              <input
                defaultValue={grade}
                onChange={this.handleChange("grade")}
              />
            </td>
            <td>
              <input
                onChange={this.handleChange("school")}
                defaultValue={school}
              />
            </td>
            <td>
              <i
                className="far fa-save"
                onClick={() => {
                  this.props.updateStudent(
                    id,
                    this.state.toBeSaved.name,
                    this.state.toBeSaved.grade,
                    this.state.toBeSaved.school
                  );
                  this.onEdit();
                }}
              ></i>
            </td>
            <td>
              <i className="fas fa-trash"></i>
            </td>
          </tr>
        ) : (
          <tr>
            <td>{name}</td>
            <td>{grade}</td>
            <td>{school}</td>
            <td>
              <i className="far fa-edit" onClick={this.onEdit}></i>
            </td>
            <td>
              <i
                className="fas fa-trash"
                onClick={() => this.props.deleteStudent(id)}
              ></i>
            </td>
          </tr>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteStudent,
      updateStudent
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(StudentItem);
