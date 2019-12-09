export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export const addStudent = (name, grade, school) => {
  return {
    type: ADD_STUDENT,
    name,
    grade,
    school
  };
};

export const deleteStudent = id => ({
  type: DELETE_STUDENT,
  id
});

export const updateStudent = (id, name, grade, school) => {
  return {
    type: UPDATE_STUDENT,
    name,
    grade,
    school
  };
};
