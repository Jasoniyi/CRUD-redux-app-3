import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent, updateStudent } from "./actions";
import { bindActionCreators } from "redux";

class StudentItem extends Component {
  state = {
    isEdit: false
  };

  onEdit = () => {
    this.setState({
      isEdit: !false
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
              <input
                ref={nameInput => (this.nameInput = nameInput)}
                defaultValue={name}
              />
            </td>
            <td>
              <input
                defaultValue={grade}
                ref={gradeInput => (this.gradeInput = gradeInput)}
              />
            </td>
            <td>
              <input
                ref={schoolInput => (this.schoolInput = schoolInput)}
                defaultValue={school}
              />
            </td>
            <td>
              <i
                className="far fa-save"
                onClick={() => {
                  this.props.updateStudent(
                    id,
                    this.nameInput.value,
                    this.gradeInput.value,
                    this.schoolInput.value
                  );
                  //   console.log(id, this.nameInput.value);
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
