/**
 * Function to sum student IDs
 * @param {Array} students - List of student objects
 * @returns {number} - Sum of all student IDs
 */
const getStudentIdsSum = (students) => {
    if (!Array.isArray(students)) {
      return 0;
    }
  
    return students.reduce((accumulator, student) => accumulator + student.id, 0);
  };
  export default getStudentIdsSum;
  