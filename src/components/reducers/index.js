import INITIAL_STUDENTS from "../initialStudents";
import { ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from "../actions";

const MainReducer = (state = INITIAL_STUDENTS, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [
        ...state,
        {
          id: Math.max(...state.map(o => o.id)) + 1,
          name: action.name,
          grade: action.grade,
          school: action.school
        }
      ];

    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.id);

    case UPDATE_STUDENT:
      return state.map(student => {
        if (student.id === action.id) {
          return {
            name: action.name,
            grade: action.grade,
            school: action.school
          };
        }
        return student;
      });

    default:
      return state;
  }
};

export default MainReducer;
