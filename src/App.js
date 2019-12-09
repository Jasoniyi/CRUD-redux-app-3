import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStudent, deleteStudent, updateStudent } from "./components/actions";
import StudentList from "./components/StudentList";
import CreateStudent from "./components/CreateStudent";

class App extends Component {
  deleteStudent = id => {
    let r = window.confirm("are you sure you want to delete?");
    if (r === true) {
      this.props.deleteStudent(id);
    }
  };
  editStudent = (id, name, grade, school) => {
    this.props.editStudent(id, name, grade, school);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">Student Registry</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Grade</th>
                      <th>School</th>
                      <th>Edit/Save</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <StudentList />
                </table>
                <CreateStudent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentList: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addStudent,
      deleteStudent,
      updateStudent
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
