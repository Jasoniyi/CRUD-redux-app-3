import React, { Component } from "react";
import StudentItem from "./StudentItem";
import { connect } from "react-redux";

class StudentList extends Component {
  render() {
    let students = this.props.studentList;
    const trItem = students.map((student, index) => (
      <StudentItem
        key={index}
        student={student}
        index={index}
        // editStudentSubmit={this.props.editStudentSubmit}
        // deleteStudent={this.props.deleteStudent}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}

const mapStateToProps = state => {
  return {
    studentList: state
  };
};

export default connect(mapStateToProps, null)(StudentList);
